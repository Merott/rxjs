
import { Observable } from '../../Observable';
import { zipAll } from '../../operator/zipAll';

Observable.prototype.zipAll = zipAll;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    zipAll: typeof zipAll;
  }
}