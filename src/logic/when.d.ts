import type { PredicateFunction } from '../interfaces/index';
import Pred from '../Pred';

/**
 * when :: ((a -> Boolean) | Pred) -> (a -> a) -> a -> a
 */
declare function when<A, B>(p: PredicateFunction<A> | Pred, f: (x: A) => B): (x: A) => A | B;
declare function when<A, B>(p: PredicateFunction<A> | Pred): (f: (x: A) => B) => (x: A) => A | B;

export default when;
