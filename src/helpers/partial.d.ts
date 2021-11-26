import { VariadicFunction } from '../interfaces/VariadicFunction';

/**
 * partial :: (((*) -> c), *) -> (*) -> c
 */
declare function partial(fn: VariadicFunction, ...args: unknown[]): VariadicFunction;

export default partial;
