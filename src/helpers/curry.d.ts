import { VariadicFunction } from '../interfaces/index';

/**
 * curry :: ((a, b, ...) -> z) -> a -> b -> ... -> z
 */
declare function curry<R>(fn: VariadicFunction<R>): any;

export default curry;
