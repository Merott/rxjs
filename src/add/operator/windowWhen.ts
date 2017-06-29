
import { Observable } from '../../Observable';
import { windowWhen } from '../../operator/windowWhen';

Observable.prototype.windowWhen = windowWhen;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    windowWhen: typeof windowWhen;
  }
}