import { VariadicFunction } from '../interfaces/VariadicFunction';

/**
 * mapProps :: { (* -> *) } -> Object -> Object
 */
declare function mapProps(m: { [k: string]: VariadicFunction }, o: object): object;
declare function mapProps(m: { [k: string]: VariadicFunction }): (o: object) => object;

export default mapProps;
