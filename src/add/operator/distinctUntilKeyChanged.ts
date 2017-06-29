
import { Observable } from '../../Observable';
import { distinctUntilKeyChanged } from '../../operator/distinctUntilKeyChanged';

Observable.prototype.distinctUntilKeyChanged = distinctUntilKeyChanged;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    distinctUntilKeyChanged: typeof distinctUntilKeyChanged;
  }
}