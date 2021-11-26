import { UnaryFunction, VariadicFunction } from '../interfaces/index';

/**
 * unary :: ((*) -> b) -> a -> b
 */
declare function unary(fn: VariadicFunction): UnaryFunction;

export default unary;
