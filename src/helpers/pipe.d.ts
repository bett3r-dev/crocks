/**
 * pipe :: ((a -> b), ..., (y -> z)) -> a -> z
 */
declare function pipe<Z>(...args: Function[]): Z;

export default pipe;
