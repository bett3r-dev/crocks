import Either from '../Either';
import { UnaryFunction } from '../interfaces/index';
import First from './First';

declare function eitherToFirst(val: Either): First;
declare function eitherToFirst(fn: UnaryFunction<Either>): UnaryFunction<First>;

export default eitherToFirst;
