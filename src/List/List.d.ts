import { Applicative, Functor, Monad, UnaryFunction } from "../interfaces";

declare function List<T>(value: T): List<T>;

declare class List<Right = any> implements Functor<Right>, Monad<Right>, Applicative<Right> {
    _type: Right;
    map<RETURN=Right, R= RETURN>(fn: UnaryFunction<RETURN, R>): List<RETURN>;
    chain<RETURN=Right, R=Right>(fn: UnaryFunction<List<RETURN>, R>): List<RETURN>;
    ap<R=Right>(val: List): List<R>;
    traverse<R=Right, POINT = any>(point: POINT, transformFn: (value: R) => R): POINT
    valueOf(): Right;
    type():string;
    static of<R>(val?: R): List<R>;
}
export default List;
