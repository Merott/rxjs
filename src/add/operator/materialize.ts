
import { Observable } from '../../Observable';
import { materialize } from '../../operator/materialize';

Observable.prototype.materialize = materialize;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    materialize: typeof materialize;
  }
}