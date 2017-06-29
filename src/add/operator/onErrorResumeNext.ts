import { Observable } from '../../Observable';
import { onErrorResumeNext } from '../../operator/onErrorResumeNext';

Observable.prototype.onErrorResumeNext = onErrorResumeNext;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    onErrorResumeNext: typeof onErrorResumeNext;
  }
}