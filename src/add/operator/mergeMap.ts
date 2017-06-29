
import { Observable } from '../../Observable';
import { mergeMap } from '../../operator/mergeMap';

Observable.prototype.mergeMap = <any>mergeMap;
Observable.prototype.flatMap = <any>mergeMap;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    flatMap: typeof mergeMap;
    mergeMap: typeof mergeMap;
  }
}