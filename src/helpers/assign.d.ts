/**
 * Assigns like Object.assign(base, patch)
 * assign :: Object -> Object -> Object
 */
declare function assign(base: object, patch: object): object;
declare function assign(base: object): (patch: object) => object;

export default assign;
