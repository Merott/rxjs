
import { Observable } from '../../Observable';
import { letProto } from '../../operator/let';

Observable.prototype.let = letProto;
Observable.prototype.letBind = letProto;

declare module '../../Observable' {
  interface Observable<T, E = any> {
    let: typeof letProto;
    letBind: typeof letProto;
  }
}