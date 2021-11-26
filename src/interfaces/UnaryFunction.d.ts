export type UnaryFunction<RETURN=any, VALUE = any> = (arg: VALUE) => RETURN | UnaryFunction<RETURN, VALUE>;
