import {
    BinaryFunction,
    UnaryFunction,
    Functor,
    Monad,
    Applicative
} from '../interfaces/index';

declare function Pair<F=any,S=any>(val1: F, val2: S): Pair<F,S>;
declare class Pair<First=any,Second=any> implements Functor<Second>, Monad<Second>, Applicative<Second> {
    map<RETURN=Second, S=Second>(fn: UnaryFunction<RETURN,S>): Pair<First,S>;
    chain<RETURN=Second, S=Second>(fn: UnaryFunction<Pair<First,RETURN>,S>): Pair<First,RETURN>;
    ap<S=Second>(val: Pair<First, S>): Pair<First, S>;
    equals<S=Second>(val: S): boolean;
    concat<F=First,S=Second>(val: Pair<F,S>): Pair<F,S>;
    bimap<F=First, S=Second>(fn1: UnaryFunction<F>, fn2: UnaryFunction<S>): Pair<F,S>;
    sequence(val: unknown): any; //TODO: Completar el tipo aca
    traverse(val: unknown): any; //TODO: Completar el tipo aca
    extend<S=Second>(fn: (val: Pair<First,S>) => S): Pair<First,S>;
    swap<F=First,S=Second>(fn1: UnaryFunction<F>, fn2: UnaryFunction<S>): Pair<F,S>;
    fst<F=First>(): F;
    snd<S=Second>(): S;
    toArray<F,S>(): [F, S];
    merge<F=First,S=Second, R=Second>(fn: BinaryFunction<F,S>): R;
    type():string;
}

export default Pair;
