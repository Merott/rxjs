
import { Observable } from '../../Observable';
import { mergeScan } from '../../operator/mergeScan';

Observable.prototype.mergeScan = mergeScan;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    mergeScan: typeof mergeScan;
  }
}