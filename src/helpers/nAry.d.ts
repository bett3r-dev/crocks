import { VariadicFunction } from '../interfaces/VariadicFunction';

/**
 * nAry :: Number -> ((*) -> a) -> (*) -> a
 */
declare function nAry(n: number, fn: VariadicFunction): VariadicFunction;
declare function nAry(n: number): (fn: VariadicFunction) => VariadicFunction;

export default nAry;
