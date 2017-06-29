
import { Observable } from '../../Observable';
import { takeUntil } from '../../operator/takeUntil';

Observable.prototype.takeUntil = takeUntil;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    takeUntil: typeof takeUntil;
  }
}