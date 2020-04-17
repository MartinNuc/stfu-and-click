export class NotFoundError extends Error {
  constructor(message: string) {
    super(message);
    // set the prototype to make instance of functional
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}
