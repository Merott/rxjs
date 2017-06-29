
import { Observable } from '../../Observable';
import { _finally } from '../../operator/finally';

Observable.prototype.finally = _finally;
Observable.prototype._finally = _finally;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    finally: typeof _finally;
    _finally: typeof _finally;
  }
}