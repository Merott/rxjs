
import { Observable } from '../../Observable';
import { switchMapTo } from '../../operator/switchMapTo';

Observable.prototype.switchMapTo = switchMapTo;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    switchMapTo: typeof switchMapTo;
  }
}