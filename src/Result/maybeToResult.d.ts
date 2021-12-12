import { UnaryFunction } from '../interfaces/index';
import Maybe from '../Maybe';
import Result from './Result';

/**
 * maybeToResult :: c -> Maybe a -> Result c a
 * maybeToResult :: c -> (a -> Maybe b) -> a -> Result c a
 */
 declare function maybeToResult<R, L = Error>(errVal: L): (maybe: Maybe<R>) => Result<R>;
 declare function maybeToResult<R, L = Error>(errVal: L, maybe: Maybe<R>): Result<R>;
 //TODO: Test this function
 declare function maybeToResult<R, L = Error>(fn: UnaryFunction<Maybe<R>>): (maybe: Maybe<R>) => UnaryFunction<Result<R>>;
 //TODO: Test this function
 declare function maybeToResult<R, L = Error>(fn: UnaryFunction<Maybe<R>>, maybe: Maybe<R>): UnaryFunction<Result<R>>;

export default maybeToResult;
