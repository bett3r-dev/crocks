import type { PredicateFunction } from '../interfaces/index';
import Pred from '../Pred';

/**
 * and :: ((a -> Boolean) | Pred a) -> ((a -> Boolean) | Pred a) -> a -> Boolean
 */
declare function and<A>(p: PredicateFunction<A> | Pred, q: PredicateFunction<A> | Pred, x: A): boolean;
declare function and<A>(p: PredicateFunction<A> | Pred, q: PredicateFunction<A> | Pred): (x: A) => boolean;
declare function and<A>(p: PredicateFunction<A> | Pred): (q: PredicateFunction<A> | Pred) => (x: A) => boolean;

export default and;
