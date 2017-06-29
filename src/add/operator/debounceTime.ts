
import { Observable } from '../../Observable';
import { debounceTime } from '../../operator/debounceTime';

Observable.prototype.debounceTime = debounceTime;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    debounceTime: typeof debounceTime;
  }
}