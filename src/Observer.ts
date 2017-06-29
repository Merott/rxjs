export interface NextObserver<T, E = any> {
  closed?: boolean;
  next: (value: T) => void;
  error?: (err: E) => void;
  complete?: () => void;
}

export interface ErrorObserver<T, E = any> {
  closed?: boolean;
  next?: (value: T) => void;
  error: (err: E) => void;
  complete?: () => void;
}

export interface CompletionObserver<T, E = any> {
  closed?: boolean;
  next?: (value: T) => void;
  error?: (err: E) => void;
  complete: () => void;
}

export type PartialObserver<T, E = any> = NextObserver<T, E> | ErrorObserver<T, E> | CompletionObserver<T, E>;

export interface Observer<T, E = any> {
  closed?: boolean;
  next: (value: T) => void;
  error: (err: E) => void;
  complete: () => void;
}

export const empty: Observer<any, any> = {
  closed: true,
  next(value: any): void { /* noop */},
  error(err: any): void { throw err; },
  complete(): void { /*noop*/ }
};
