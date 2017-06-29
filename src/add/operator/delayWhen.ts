
import { Observable } from '../../Observable';
import { delayWhen } from '../../operator/delayWhen';

Observable.prototype.delayWhen = delayWhen;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    delayWhen: typeof delayWhen;
  }
}