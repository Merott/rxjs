
import { Observable } from '../../Observable';
import { concatMap } from '../../operator/concatMap';

Observable.prototype.concatMap = concatMap;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    concatMap: typeof concatMap;
  }
}