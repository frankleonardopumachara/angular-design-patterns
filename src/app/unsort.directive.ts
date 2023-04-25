import {Directive, Host, Optional, Self} from '@angular/core'
import {Table} from 'primeng/table'

@Directive({
  selector: '[appUnsort]'
})
export class UnsortDirective {

  constructor(@Host() @Self() @Optional() public dt: Table) {

    (this.dt as any).removeSortMeta = (function (this: Table, field: string) {
      let index = -1;
      if (this.multiSortMeta && this.multiSortMeta.length) {
        for (let i = 0; i < this.multiSortMeta.length; i++) {
          if (this.multiSortMeta[i].field === field) {
            index = i;
            break;
          }
        }
      }
      if (index !== -1) {
        this._multiSortMeta.splice(index, 1);
      }
    });

    this.dt.sort = (function (this: Table, event: any) {
      let originalEvent = event.originalEvent;
      let unsortKey = originalEvent.ctrlKey;

      if (this.sortMode === 'single') {
        if (unsortKey) {
          if (this.sortField === event.field) {
            this._sortOrder = this.defaultSortOrder;
            (this._sortField as any) = null;

            this._filter();
            this.tableService.onSort(null as any);
          }
        } else {
          this._sortOrder = this.sortField === event.field ? this.sortOrder * -1 : this.defaultSortOrder;
          this._sortField = event.field;

          if (this.resetPageOnSort) {
            this._first = 0;
            this.firstChange.emit(this._first);

            if (this.scrollable) {
              this.resetScrollTop();
            }
          }

          this.sortSingle();
        }
      }
      if (this.sortMode === 'multiple') {
        let sortKey = originalEvent.shiftKey;
        let sortMeta = this.getSortMeta(event.field);

        if (sortMeta) {
          if (!sortKey) {
            if (unsortKey) {
              // remove by field
              (this as any).removeSortMeta(event.field);
            } else {
              this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
            }

            if (this.resetPageOnSort) {
              this._first = 0;
              this.firstChange.emit(this._first);

              if (this.scrollable) {
                this.resetScrollTop();
              }
            }
          } else {
            sortMeta.order = sortMeta.order * -1;
          }
        } else {
          // sortKey takes precedence
          if (sortKey || !unsortKey) {
            if (!sortKey || !this.multiSortMeta) {
              this._multiSortMeta = [];

              if (this.resetPageOnSort) {
                this._first = 0;
                this.firstChange.emit(this._first);
              }
            }
            this._multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
          }
        }

        this.sortMultiple();
      }

      if (this.isStateful()) {
        this.saveState();
      }

      (this.anchorRowIndex as any) = null;
    });
  }

}
