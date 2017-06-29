import { Subscriber } from './Subscriber';
import { InnerSubscriber } from './InnerSubscriber';

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class OuterSubscriber<T, R, E = any> extends Subscriber<T, E> {
  notifyNext(outerValue: T, innerValue: R,
             outerIndex: number, innerIndex: number,
             innerSub: InnerSubscriber<T, R>): void {
    this.destination.next(innerValue);
  }

  notifyError(error: E, innerSub: InnerSubscriber<T, R>): void {
    this.destination.error(error);
  }

  notifyComplete(innerSub: InnerSubscriber<T, R>): void {
    this.destination.complete();
  }
}
