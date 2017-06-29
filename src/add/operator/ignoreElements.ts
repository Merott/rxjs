
import { Observable } from '../../Observable';
import { ignoreElements } from '../../operator/ignoreElements';

Observable.prototype.ignoreElements = ignoreElements;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    ignoreElements: typeof ignoreElements;
  }
}