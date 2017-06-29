
import { Observable } from '../../Observable';
import { retryWhen } from '../../operator/retryWhen';

Observable.prototype.retryWhen = retryWhen;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    retryWhen: typeof retryWhen;
  }
}