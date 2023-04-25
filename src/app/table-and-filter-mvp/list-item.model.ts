import {v4 as uuid} from 'uuid'

export class ListItem {

  private _id: string = uuid()

  constructor(
    private _name: string
  ) {
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }
}
