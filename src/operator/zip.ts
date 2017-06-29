import { Observable, ObservableInput } from '../Observable';
import { ArrayObservable } from '../observable/ArrayObservable';
import { isArray } from '../util/isArray';
import { Operator } from '../Operator';
import { PartialObserver } from '../Observer';
import { Subscriber } from '../Subscriber';
import { OuterSubscriber } from '../OuterSubscriber';
import { InnerSubscriber } from '../InnerSubscriber';
import { subscribeToResult } from '../util/subscribeToResult';
import { iterator as Symbol_iterator } from '../symbol/iterator';

/* tslint:disable:max-line-length */
export function zipProto<T, R, E>(this: Observable<T, E>, project: (v1: T) => R): Observable<R, E>;
export function zipProto<T, T2, R, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, project: (v1: T, v2: T2) => R): Observable<R, E>;
export function zipProto<T, T2, T3, R, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, project: (v1: T, v2: T2, v3: T3) => R): Observable<R, E>;
export function zipProto<T, T2, T3, T4, R, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, project: (v1: T, v2: T2, v3: T3, v4: T4) => R): Observable<R, E>;
export function zipProto<T, T2, T3, T4, T5, R, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, v5: ObservableInput<T5, E>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => R): Observable<R, E>;
export function zipProto<T, T2, T3, T4, T5, T6, R, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, v5: ObservableInput<T5, E>, v6: ObservableInput<T6, E>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): Observable<R, E> ;
export function zipProto<T, T2, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>): Observable<[T, T2], E>;
export function zipProto<T, T2, T3, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>): Observable<[T, T2, T3], E>;
export function zipProto<T, T2, T3, T4, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>): Observable<[T, T2, T3, T4], E>;
export function zipProto<T, T2, T3, T4, T5, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, v5: ObservableInput<T5, E>): Observable<[T, T2, T3, T4, T5], E>;
export function zipProto<T, T2, T3, T4, T5, T6, E>(this: Observable<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, v5: ObservableInput<T5, E>, v6: ObservableInput<T6, E>): Observable<[T, T2, T3, T4, T5, T6], E>;
export function zipProto<T, R, E>(this: Observable<T, E>, ...observables: Array<ObservableInput<T, E> | ((...values: Array<T>) => R)>): Observable<R, E>;
export function zipProto<T, R, E>(this: Observable<T, E>, array: Array<ObservableInput<T, E>>): Observable<R, E>;
export function zipProto<T, TOther, R, E>(this: Observable<T, E>, array: Array<ObservableInput<TOther, E>>, project: (v1: T, ...values: Array<TOther>) => R): Observable<R, E>;
/* tslint:enable:max-line-length */

/**
 * @param observables
 * @return {Observable<R>}
 * @method zip
 * @owner Observable
 */
export function zipProto<T, R, E>(
  this: Observable<T, E>,
  ...observables: Array<ObservableInput<any, any> | ((...values: Array<any>) => R)>
): Observable<R, E> {
  return this.lift.call(zipStatic<R, E>(this, ...observables));
}

/* tslint:disable:max-line-length */
export function zipStatic<T, T2, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>): Observable<[T, T2], E>;
export function zipStatic<T, T2, T3, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>): Observable<[T, T2, T3], E>;
export function zipStatic<T, T2, T3, T4, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>): Observable<[T, T2, T3, T4], E>;
export function zipStatic<T, T2, T3, T4, T5, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, v5: ObservableInput<T5, E>): Observable<[T, T2, T3, T4, T5], E>;
export function zipStatic<T, T2, T3, T4, T5, T6, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, v5: ObservableInput<T5, E>, v6: ObservableInput<T6, E>): Observable<[T, T2, T3, T4, T5, T6], E>;

export function zipStatic<T, R, E>(v1: ObservableInput<T, E>, project: (v1: T) => R): Observable<R, E>;
export function zipStatic<T, T2, R, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, project: (v1: T, v2: T2) => R): Observable<R, E>;
export function zipStatic<T, T2, T3, R, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, project: (v1: T, v2: T2, v3: T3) => R): Observable<R, E>;
export function zipStatic<T, T2, T3, T4, R, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, project: (v1: T, v2: T2, v3: T3, v4: T4) => R): Observable<R, E>;
export function zipStatic<T, T2, T3, T4, T5, R, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, v5: ObservableInput<T5, E>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5) => R): Observable<R, E>;
export function zipStatic<T, T2, T3, T4, T5, T6, R, E>(v1: ObservableInput<T, E>, v2: ObservableInput<T2, E>, v3: ObservableInput<T3, E>, v4: ObservableInput<T4, E>, v5: ObservableInput<T5, E>, v6: ObservableInput<T6, E>, project: (v1: T, v2: T2, v3: T3, v4: T4, v5: T5, v6: T6) => R): Observable<R, E>;

export function zipStatic<T, E>(array: ObservableInput<T, E>[]): Observable<T[], E>;
export function zipStatic<R, E>(array: ObservableInput<any, any>[]): Observable<R, E>;
export function zipStatic<T, R, E>(array: ObservableInput<T, E>[], project: (...values: Array<T>) => R): Observable<R, E>;
export function zipStatic<R, E>(array: ObservableInput<any, any>[], project: (...values: Array<any>) => R): Observable<R, E>;

export function zipStatic<T, E>(...observables: Array<ObservableInput<T, E>>): Observable<T[], E>;
export function zipStatic<T, R, E>(...observables: Array<ObservableInput<T, E> | ((...values: Array<T>) => R)>): Observable<R, E>;
export function zipStatic<R, E>(...observables: Array<ObservableInput<any, any> | ((...values: Array<any>) => R)>): Observable<R, E>;
/* tslint:enable:max-line-length */

/**
 * Combines multiple Observables to create an Observable whose values are calculated from the values, in order, of each
 * of its input Observables.
 *
 * If the latest parameter is a function, this function is used to compute the created value from the input values.
 * Otherwise, an array of the input values is returned.
 *
 * @example <caption>Combine age and name from different sources</caption>
 *
 * let age$ = Observable.of<number>(27, 25, 29);
 * let name$ = Observable.of<string>('Foo', 'Bar', 'Beer');
 * let isDev$ = Observable.of<boolean>(true, true, false);
 *
 * Observable
 *     .zip(age$,
 *          name$,
 *          isDev$,
 *          (age: number, name: string, isDev: boolean) => ({ age, name, isDev }))
 *     .subscribe(x => console.log(x));
 *
 * // outputs
 * // { age: 27, name: 'Foo', isDev: true }
 * // { age: 25, name: 'Bar', isDev: true }
 * // { age: 29, name: 'Beer', isDev: false }
 *
 * @param observables
 * @return {Observable<R>}
 * @static true
 * @name zip
 * @owner Observable
 */
export function zipStatic<T, R, E>(...observables: Array<ObservableInput<any, any> | ((...values: Array<any>) => R)>): Observable<R, E> {
  const project = <((...ys: Array<any>) => R)> observables[observables.length - 1];
  if (typeof project === 'function') {
    observables.pop();
  }
  return new ArrayObservable(observables).lift(new ZipOperator(project));
}

export class ZipOperator<T, R, E> implements Operator<T, R, E> {

  project: (...values: Array<any>) => R;

  constructor(project?: (...values: Array<any>) => R) {
    this.project = project;
  }

  call(subscriber: Subscriber<R, E>, source: any): any {
    return source.subscribe(new ZipSubscriber(subscriber, this.project));
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
export class ZipSubscriber<T, R, E> extends Subscriber<T, E> {
  private values: any;
  private project: (...values: Array<any>) => R;
  private iterators: LookAheadIterator<any>[] = [];
  private active = 0;

  constructor(destination: Subscriber<R, E>,
              project?: (...values: Array<any>) => R,
              values: any = Object.create(null)) {
    super(destination);
    this.project = (typeof project === 'function') ? project : null;
    this.values = values;
  }

  protected _next(value: any) {
    const iterators = this.iterators;
    if (isArray(value)) {
      iterators.push(new StaticArrayIterator(value));
    } else if (typeof value[Symbol_iterator] === 'function') {
      iterators.push(new StaticIterator(value[Symbol_iterator]()));
    } else {
      iterators.push(new ZipBufferIterator(this.destination, this, value));
    }
  }

  protected _complete() {
    const iterators = this.iterators;
    const len = iterators.length;

    if (len === 0) {
      this.destination.complete();
      return;
    }

    this.active = len;
    for (let i = 0; i < len; i++) {
      let iterator: ZipBufferIterator<any, any, any> = <any>iterators[i];
      if (iterator.stillUnsubscribed) {
        this.add(iterator.subscribe(iterator, i));
      } else {
        this.active--; // not an observable
      }
    }
  }

  notifyInactive() {
    this.active--;
    if (this.active === 0) {
      this.destination.complete();
    }
  }

  checkIterators() {
    const iterators = this.iterators;
    const len = iterators.length;
    const destination = this.destination;

    // abort if not all of them have values
    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];
      if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
        return;
      }
    }

    let shouldComplete = false;
    const args: any[] = [];
    for (let i = 0; i < len; i++) {
      let iterator = iterators[i];
      let result = iterator.next();

      // check to see if it's completed now that you've gotten
      // the next value.
      if (iterator.hasCompleted()) {
        shouldComplete = true;
      }

      if (result.done) {
        destination.complete();
        return;
      }

      args.push(result.value);
    }

    if (this.project) {
      this._tryProject(args);
    } else {
      destination.next(args);
    }

    if (shouldComplete) {
      destination.complete();
    }
  }

  protected _tryProject(args: any[]) {
    let result: any;
    try {
      result = this.project.apply(this, args);
    } catch (err) {
      this.destination.error(err);
      return;
    }
    this.destination.next(result);
  }
}

interface LookAheadIterator<T> extends Iterator<T> {
  hasValue(): boolean;
  hasCompleted(): boolean;
}

class StaticIterator<T> implements LookAheadIterator<T> {
  private nextResult: IteratorResult<T>;

  constructor(private iterator: Iterator<T>) {
    this.nextResult = iterator.next();
  }

  hasValue() {
    return true;
  }

  next(): IteratorResult<T> {
    const result = this.nextResult;
    this.nextResult = this.iterator.next();
    return result;
  }

  hasCompleted() {
    const nextResult = this.nextResult;
    return nextResult && nextResult.done;
  }
}

class StaticArrayIterator<T> implements LookAheadIterator<T> {
  private index = 0;
  private length = 0;

  constructor(private array: T[]) {
    this.length = array.length;
  }

  [Symbol_iterator]() {
    return this;
  }

  next(value?: any): IteratorResult<T> {
    const i = this.index++;
    const array = this.array;
    return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
  }

  hasValue() {
    return this.array.length > this.index;
  }

  hasCompleted() {
    return this.array.length === this.index;
  }
}

/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
class ZipBufferIterator<T, R, E> extends OuterSubscriber<T, R, E> implements LookAheadIterator<T> {
  stillUnsubscribed = true;
  buffer: T[] = [];
  isComplete = false;

  constructor(destination: PartialObserver<T, E>,
              private parent: ZipSubscriber<T, R, E>,
              private observable: Observable<T, E>) {
    super(destination);
  }

  [Symbol_iterator]() {
    return this;
  }

  // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
  //    this is legit because `next()` will never be called by a subscription in this case.
  next(): IteratorResult<T> {
    const buffer = this.buffer;
    if (buffer.length === 0 && this.isComplete) {
      return { value: null, done: true };
    } else {
      return { value: buffer.shift(), done: false };
    }
  }

  hasValue() {
    return this.buffer.length > 0;
  }

  hasCompleted() {
    return this.buffer.length === 0 && this.isComplete;
  }

  notifyComplete() {
    if (this.buffer.length > 0) {
      this.isComplete = true;
      this.parent.notifyInactive();
    } else {
      this.destination.complete();
    }
  }

  notifyNext(outerValue: T, innerValue: any,
             outerIndex: number, innerIndex: number,
             innerSub: InnerSubscriber<T, R>): void {
    this.buffer.push(innerValue);
    this.parent.checkIterators();
  }

  subscribe(value: any, index: number) {
    return subscribeToResult<any, any>(this, this.observable, this, index);
  }
}
