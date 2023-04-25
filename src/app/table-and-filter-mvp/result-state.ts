import {BehaviorSubject} from 'rxjs'

export class ResultState<T = any, E = any> {

  private _state = new BehaviorSubject<{
    loading: boolean,
    error: E | null,
    result: T | null
  }>({
    loading: false,
    error: null,
    result: null,
  })

  get state$() {
    return this._state.asObservable()
  }

  get loading() {
    return this._state.value.loading
  }

  get error() {
    return this._state.value.error
  }

  get result() {
    return this._state.value.result
  }

  loadingState() {
    this._state.next({loading: true, error: null, result: null})
  }

  errorState(error: E) {
    this._state.next({loading: false, error: error, result: null})
  }

  successState(result: T) {
    this._state.next({loading: false, error: null, result: result})
  }
}


const resultState = new ResultState<string>();

resultState.loadingState();

resultState.errorState('Ha ocurrido un error');
resultState.successState('Operación exitosa');


resultState.state$.subscribe(state => {
  if (state.loading) {
    // Mostrar indicador de carga
  } else if (state.error) {
    // Mostrar mensaje de error
  } else if (state.result) {
    // Mostrar resultado
  }
});
