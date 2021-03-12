export class UnexpectedError extends Error {
  constructor () {
    super('Ocorreu um erro. Tente novamente depois.')
    this.name = 'UnexpectedError'
  }
}
