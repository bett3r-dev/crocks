/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */
/** @author Tomás Ruiz */

//*******************************************
// Crocks
//*******************************************

import Arrow from './src/Arrow'
import Async from './src/Async'
import Const from './src/Const'
import Either from './src/Either'
import Equiv from './src/Equiv'
import Identity from './src/Identity'
import IO from './src/IO'
import List from './src/List'
import Maybe from './src/Maybe'
import Pair from './src/Pair'
import Pred from './src/Pred'
import Reader from './src/Reader'
// import ReaderT from './Reader/src/ReaderT'
import Result from './src/Result'
import Star from './src/Star'
import State from './src/State'
// import Tuple from './src/Tuple'
// import Unit from './src/Unit'
import Writer from './src/Writer'

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

import All from './src/All';
import Any from './src/Any';
import Assign from './src/Assign';
import Endo from './src/Endo';
import First from './src/First';
import Last from './src/Last';
import Max from './src/Max';
import Min from './src/Min';
import Prod from './src/Prod';
import Sum from './src/Sum';
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


export * from './src/Pair/branch';
export * from './src/Pair/fanout';
export * from './src/Maybe/find';
export * from './src/Maybe/getPath';
export * from './src/Maybe/getProp';
export * from './src/Maybe/safe';
export * from './src/Maybe/safeAfter';
export * from './src/Maybe/safeLift';
export * from './src/Pair/toPairs';
export * from './src/Result/tryCatch';

import branch from './src/Pair/branch';
import fanout from './src/Pair/fanout';
import find from './src/Maybe/find';
import getPath from './src/Maybe/getPath';
import getProp from './src/Maybe/getProp';
import safe from './src/Maybe/safe';
import safeAfter from './src/Maybe/safeAfter';
import safeLift from './src/Maybe/safeLift';
import toPairs from './src/Pair/toPairs';
import tryCatch from './src/Result/tryCatch';

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

export * from './src/helpers'
import * as _helpers from './src/helpers'
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

import evalWith from './src/State/evalWith';
import execWith from './src/State/execWith';
import fst from './src/Pair/fst';
import log from './src/Writer/log';
import nmap from './src/Tuple/nmap';
import project from './src/Tuple/project';
import race from './src/Async/race';
import read from './src/Writer/read';
import snd from './src/Pair/snd';
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

export * from './src/pointfree';
import * as _pointfree from './src/pointfree';
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
import asyncToPromise from './src/Async/asyncToPromise';
import eitherToAsync from './src/Async/eitherToAsync';
import eitherToFirst from './src/First/eitherToFirst';
import eitherToLast from './src/Last/eitherToLast';
import eitherToMaybe from './src/Maybe/eitherToMaybe';
// import eitherToResult from './src/Result/eitherToResult';
import firstToAsync from './src/Async/firstToAsync';
import firstToEither from './src/Either/firstToEither';
import firstToLast from './src/Last/firstToLast';
import firstToMaybe from './src/Maybe/firstToMaybe';
// import firstToResult from './src/Result/firstToResult';
import lastToAsync from './src/Async/lastToAsync';
import lastToEither from './src/Either/lastToEither';
import lastToFirst from './src/First/lastToFirst';
import lastToMaybe from './src/Maybe/lastToMaybe';
// import lastToResult from './src/Result/lastToResult';
// import listToArray from './src/List/listToArray';
import maybeToArray from './src/Maybe/maybeToArray';
import maybeToAsync from './src/Async/maybeToAsync';
import maybeToEither from './src/Either/maybeToEither';
import maybeToFirst from './src/First/maybeToFirst';
import maybeToLast from './src/Last/maybeToLast';
// import maybeToList from './src/List/maybeToList';
// import maybeToResult from './src/Result/maybeToResult';
import resultToAsync from './src/Async/resultToAsync';
import resultToEither from './src/Either/resultToEither';
import resultToFirst from './src/First/resultToFirst';
import resultToLast from './src/Last/resultToLast';
import resultToMaybe from './src/Maybe/resultToMaybe';
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
  // maybeToResult,
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
export * as combinators from './src/combinators'
export * from './src/combinators'

//*******************************************
// Logic
//*******************************************
export * as logic from './src/logic'
export * from './src/logic'

//*******************************************
// Predicates
//*******************************************
export * as predicates from './src/predicates'
export * from './src/predicates'

//*******************************************
// Internals
//*******************************************
export * from './src/interfaces';