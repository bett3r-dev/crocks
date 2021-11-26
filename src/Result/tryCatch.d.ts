import { VariadicFunction } from '../interfaces/VariadicFunction';
import Result from '.';

/**
 * tryCatch :: ((*) -> b) -> (*) -> Result e b
 */
declare function tryCatch<T>(fn: VariadicFunction<T>): VariadicFunction<Result<T>>;

export default tryCatch;
