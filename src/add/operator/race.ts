
import { Observable } from '../../Observable';
import { race } from '../../operator/race';

Observable.prototype.race = race;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    race: typeof race;
  }
}