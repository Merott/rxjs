
import { Observable } from '../../Observable';
import { partition } from '../../operator/partition';

Observable.prototype.partition = partition;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    partition: typeof partition;
  }
}