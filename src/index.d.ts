/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */
/** @author Tomás Ruiz */

//*******************************************
// Crocks
//*******************************************

import Arrow from './Arrow'
import Async from './Async'
import Const from './Const'
import Either from './Either'
import Equiv from './Equiv'
import Identity from './Identity'
import IO from './IO'
import List from './List'
import Maybe from './Maybe'
import Pair from './Pair'
import Pred from './Pred'
import Reader from './Reader'
// import ReaderT from './Reader/src/ReaderT'
import Result from './Result'
import Star from './Star'
import State from './State'
// import Tuple from './src/Tuple'
// import Unit from './src/Unit'
import Writer from './Writer'

// export const Async:Async;
export {
  Arrow,
  Async,
  Const,
  Either,
  Equiv,
  Identity,
  IO,
  List,
  Maybe,
  Pair,
  Pred,
  Reader,
  // ReaderT,
  Result,
  Star,
  State,
  // Tuple,
  // Unit,
  Writer,
}
export type crocksType = {
  Arrow: typeof Arrow,
  Async: typeof Async,
  Const: typeof Const,
  Either: typeof Either,
  Equiv: typeof Equiv,
  Identity: typeof Identity,
  IO: IO,
  List: List,
  Maybe: typeof Maybe,
  Pair: typeof Pair,
  Pred: typeof Pred,
  Reader: typeof Reader,
  // ReaderT,
  Result: typeof Result,
  Star: Star,
  State: typeof State,
  // Tuple,
  // Unit,
  Writer: typeof Writer,
}

export const crocks: crocksType

//*******************************************
// Monoids
//*******************************************

import All from './All';
import Any from './Any';
import Assign from './Assign';
import Endo from './Endo';
import First from './First';
import Last from './Last';
import Max from './Max';
import Min from './Min';
import Prod from './Prod';
import Sum from './Sum';
export {
  All,
  Any,
  Assign,
  Endo,
  First,
  Last,
  Max,
  Min,
  Prod,
  Sum,
}
export type monoidsType = {
  All: typeof All
  Any: typeof Any
  Assign: typeof Assign
  Endo: Endo
  First: typeof First
  Last: typeof Last
  Max: typeof Max
  Min: typeof Min
  Prod: typeof Prod
  Sum: typeof Sum
}

//*******************************************
// Helpers
//*******************************************


export * from './Pair/branch';
export * from './Pair/fanout';
export * from './Maybe/find';
export * from './Maybe/getPath';
export * from './Maybe/getProp';
export * from './Maybe/safe';
export * from './Maybe/safeAfter';
export * from './Maybe/safeLift';
export * from './Pair/toPairs';
export * from './Result/tryCatch';

import branch from './Pair/branch';
import fanout from './Pair/fanout';
import find from './Maybe/find';
import getPath from './Maybe/getPath';
import getProp from './Maybe/getProp';
import safe from './Maybe/safe';
import safeAfter from './Maybe/safeAfter';
import safeLift from './Maybe/safeLift';
import toPairs from './Pair/toPairs';
import tryCatch from './Result/tryCatch';

export {
  branch,
  fanout, 
  find, 
  getPath,  
  getProp,  
  safe, 
  safeAfter,  
  safeLift, 
  toPairs,  
  tryCatch, 
}

export * from './helpers'
import * as _helpers from './helpers'
export type helpersType = typeof _helpers & {
  branch: typeof branch
  fanout: typeof fanout
  find: typeof find
  getPath: typeof getPath
  getProp: typeof getProp
  prop: typeof getProp
  propPath: typeof getPath
  safe: typeof safe
  safeAfter: typeof safeAfter
  safeLift: typeof safeLift
  toPairs: typeof toPairs
  tryCatch: typeof tryCatch 
}
export const helpers:helpersType;

//*******************************************
// Point Free
//*******************************************

import evalWith from './State/evalWith';
import execWith from './State/execWith';
import fst from './Pair/fst';
import log from './Writer/log';
import nmap from './Tuple/nmap';
import project from './Tuple/project';
import race from './Async/race';
import read from './Writer/read';
import snd from './Pair/snd';
export {
  evalWith,
  execWith,
  fst,
  log,
  nmap,
  project,
  race,
  read,
  snd
}

export * from './pointfree';
import * as _pointfree from './pointfree';
export type pointfreeType = typeof _pointfree &{
  evalWith: typeof evalWith
  execWith: typeof execWith
  fst: typeof fst
  log: typeof log
  nmap: typeof nmap
  project: typeof project
  race: typeof race
  read: typeof read
  snd: typeof snd
}
export const pointfree:pointfreeType;

//*******************************************
// Transforms
//*******************************************

// import arrayToList from './src/List/arrayToList';
import asyncToPromise from './Async/asyncToPromise';
import eitherToAsync from './Async/eitherToAsync';
import eitherToFirst from './First/eitherToFirst';
import eitherToLast from './Last/eitherToLast';
import eitherToMaybe from './Maybe/eitherToMaybe';
// import eitherToResult from './src/Result/eitherToResult';
import firstToAsync from './Async/firstToAsync';
import firstToEither from './Either/firstToEither';
import firstToLast from './Last/firstToLast';
import firstToMaybe from './Maybe/firstToMaybe';
// import firstToResult from './src/Result/firstToResult';
import lastToAsync from './Async/lastToAsync';
import lastToEither from './Either/lastToEither';
import lastToFirst from './First/lastToFirst';
import lastToMaybe from './Maybe/lastToMaybe';
// import lastToResult from './src/Result/lastToResult';
// import listToArray from './src/List/listToArray';
import maybeToArray from './Maybe/maybeToArray';
import maybeToAsync from './Async/maybeToAsync';
import maybeToEither from './Either/maybeToEither';
import maybeToFirst from './First/maybeToFirst';
import maybeToLast from './Last/maybeToLast';
// import maybeToList from './src/List/maybeToList';
import maybeToResult from './Result/maybeToResult';
import resultToAsync from './Async/resultToAsync';
import resultToEither from './Either/resultToEither';
import resultToFirst from './First/resultToFirst';
import resultToLast from './Last/resultToLast';
import resultToMaybe from './Maybe/resultToMaybe';
// import tupleToArray from './src/Tuple/tupleToArray';
// import writerToPair from './src/Pair/writerToPair;

export {
  // arrayToList,
  asyncToPromise,
  eitherToAsync,
  eitherToFirst,
  eitherToLast,
  eitherToMaybe,
  // eitherToResult,
  firstToAsync,
  firstToEither,
  firstToLast,
  firstToMaybe,
  // firstToResult,
  lastToAsync,
  lastToEither,
  lastToFirst,
  lastToMaybe,
  // lastToResult,
  // listToArray,
  maybeToArray,
  maybeToAsync,
  maybeToEither,
  maybeToFirst,
  maybeToLast,
  // maybeToList,
  maybeToResult,
  resultToAsync,
  resultToEither,
  resultToFirst,
  resultToLast,
  resultToMaybe,
  // tupleToArray,
  // writerToPair,
}

export type transformsType = {
  // arrayToList: typeof arrayToList
  asyncToPromise: typeof asyncToPromise
  eitherToAsync: typeof eitherToAsync
  eitherToFirst: typeof eitherToFirst
  eitherToLast: typeof eitherToLast
  eitherToMaybe: typeof eitherToMaybe
  // eitherToResult: typeof eitherToResult
  firstToAsync: typeof firstToAsync
  firstToEither: typeof firstToEither
  firstToLast: typeof firstToLast
  firstToMaybe: typeof firstToMaybe
  // firstToResult: typeof firstToResult
  lastToAsync: typeof lastToAsync
  lastToEither: typeof lastToEither
  lastToFirst: typeof lastToFirst
  lastToMaybe: typeof lastToMaybe
  // lastToResult: typeof lastToResult
  // listToArray: typeof listToArray
  maybeToArray: typeof maybeToArray
  maybeToAsync: typeof maybeToAsync
  maybeToEither: typeof maybeToEither
  maybeToFirst: typeof maybeToFirst
  maybeToLast: typeof maybeToLast
  // maybeToList: typeof maybeToList
  // maybeToResult: typeof maybeToResult
  resultToAsync: typeof resultToAsync
  resultToEither: typeof resultToEither
  resultToFirst: typeof resultToFirst
  resultToLast: typeof resultToLast
  resultToMaybe: typeof resultToMaybe
  // tupleToArray: typeof tupleToArray
  // writerToPair: typeof writerToPair
}
export const transforms: transformsType

//*******************************************
// Combinators
//*******************************************
export * as combinators from './combinators'
export * from './combinators'

//*******************************************
// Logic
//*******************************************
export * as logic from './logic'
export * from './logic'

//*******************************************
// Predicates
//*******************************************
export * as predicates from './predicates'
export * from './predicates'

//*******************************************
// Core
//*******************************************

import equals from './core/equals'
import flNames from './core/flNames'
import implements from './core/implements'
import inspect from './core/inspect'
import isSameType from './core/isSameType'

export type coreType = {
  equals: typeof equals
  flNames: typeof flNames
  implements: typeof implements
  inspect: typeof inspect
  isSameType: typeof isSameType
}

export {
  equals,
  flNames,
  implements,
  inspect,
  isSameType
}

export const core: coreType

//*******************************************
// Internals
//*******************************************
export * from './interfaces';