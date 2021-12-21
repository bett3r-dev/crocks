/**
 * merge :: (a -> b -> c) -> m a b -> c
 */
declare function merge<R, T>(fn: (left: any, right:any) => R, b: T): R;
declare function merge<R, T>(fn: (left: any, right:any) => R): (b: T) => R;

export default merge;
