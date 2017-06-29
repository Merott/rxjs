
import { Observable } from '../../Observable';
import { take } from '../../operator/take';

Observable.prototype.take = take;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    take: typeof take;
  }
}