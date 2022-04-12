import {UnaryFunction} from '../interfaces/index'
/**
 * pipeK :: Chain m => ((a -> m b), ..., (y -> m z)) -> a -> m z
 */
// declare function pipeK<A extends any[], Z>(f: (...args: A) => unknown, g: ReadonlyArray<(y: unknown) => Z>): Z;
declare function pipeK<Z, V=any>(head: UnaryFunction, ...tail: UnaryFunction[]): (initialVal?: V) => Z;

export default pipeK;
