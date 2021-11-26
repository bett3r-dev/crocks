import { UnaryFunction } from '../interfaces/UnaryFunction';

/**
 * mconcatMap :: Monoid m, Foldable f => m -> (b -> a) -> f b -> m a
 */
declare function mconcatMap(m: object, fn: UnaryFunction, f: object): object;
declare function mconcatMap(m: object, fn: UnaryFunction): (f: object) => object;
declare function mconcatMap(m: object): (fn: UnaryFunction) => (f: object) => object;

export default mconcatMap;
