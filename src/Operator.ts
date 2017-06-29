import { Subscriber } from './Subscriber';
import { TeardownLogic } from './Subscription';

export interface Operator<T, R, E = any> {
  call(subscriber: Subscriber<R, E>, source: any): TeardownLogic;
}
