/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */
/** @author Tomás Ruiz */

//*******************************************
// Crocks
//*******************************************

import Arrow from './types/Arrow'
import Async from './types/Async'
import Const from './types/Const'
import Either from './types/Either'
import Equiv from './types/Equiv'
import Identity from './types/Identity'
import IO from './types/IO'
import List from './types/List'
import Maybe from './types/Maybe'
import Pair from './types/Pair'
import Pred from './types/Pred'
import Reader from './types/Reader'
// import ReaderT from './Reader/types/ReaderT'
import Result from './types/Result'
import Star from './types/Star'
import State from './types/State'
// import Tuple from './types/Tuple'
// import Unit from './types/Unit'
import Writer from './types/Writer'

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

import All from './types/All';
import Any from './types/Any';
import Assign from './types/Assign';
import Endo from './types/Endo';
import First from './types/First';
import Last from './types/Last';
import Max from './types/Max';
import Min from './types/Min';
import Prod from './types/Prod';
import Sum from './types/Sum';
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


export * from './types/Pair/branch';
export * from './types/Pair/fanout';
export * from './types/Maybe/find';
export * from './types/Maybe/getPath';
export * from './types/Maybe/getProp';
// export * from './types/Maybe/safe';
export * from './types/Maybe/safeAfter';
export * from './types/Maybe/safeLift';
export * from './types/Pair/toPairs';
export * from './types/Result/tryCatch';

import branch from './types/Pair/branch';
import fanout from './types/Pair/fanout';
import find from './types/Maybe/find';
import getPath from './types/Maybe/getPath';
import getProp from './types/Maybe/getProp';
import safe from './types/Maybe/safe';
import safeAfter from './types/Maybe/safeAfter';
import safeLift from './types/Maybe/safeLift';
import toPairs from './types/Pair/toPairs';
import tryCatch from './types/Result/tryCatch';

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

import * as _helpers from './types/helpers'
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

import evalWith from './types/State/evalWith';
import execWith from './types/State/execWith';
import fst from './types/Pair/fst';
import log from './types/Writer/log';
import nmap from './types/Tuple/nmap';
import project from './types/Tuple/project';
import race from './types/Async/race';
import read from './types/Writer/read';
import snd from './types/Pair/snd';
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

import * as _pointfree from './types/pointfree';
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

// import arrayToList from './types/List/arrayToList';
import asyncToPromise from './types/Async/asyncToPromise';
import eitherToAsync from './types/Async/eitherToAsync';
import eitherToFirst from './types/First/eitherToFirst';
import eitherToLast from './types/Last/eitherToLast';
import eitherToMaybe from './types/Maybe/eitherToMaybe';
// import eitherToResult from './types/Result/eitherToResult';
import firstToAsync from './types/Async/firstToAsync';
import firstToEither from './types/Either/firstToEither';
import firstToLast from './types/Last/firstToLast';
import firstToMaybe from './types/Maybe/firstToMaybe';
// import firstToResult from './types/Result/firstToResult';
import lastToAsync from './types/Async/lastToAsync';
import lastToEither from './types/Either/lastToEither';
import lastToFirst from './types/First/lastToFirst';
import lastToMaybe from './types/Maybe/lastToMaybe';
// import lastToResult from './types/Result/lastToResult';
// import listToArray from './types/List/listToArray';
import maybeToArray from './types/Maybe/maybeToArray';
import maybeToAsync from './types/Async/maybeToAsync';
import maybeToEither from './types/Either/maybeToEither';
import maybeToFirst from './types/First/maybeToFirst';
import maybeToLast from './types/Last/maybeToLast';
// import maybeToList from './types/List/maybeToList';
// import maybeToResult from './types/Result/maybeToResult';
import resultToAsync from './types/Async/resultToAsync';
import resultToEither from './types/Either/resultToEither';
import resultToFirst from './types/First/resultToFirst';
import resultToLast from './types/Last/resultToLast';
import resultToMaybe from './types/Maybe/resultToMaybe';
// import tupleToArray from './types/Tuple/tupleToArray';
// import writerToPair from './types/Pair/writerToPair;

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
export const transformers: transformsType

//*******************************************
// Combinators
//*******************************************
export * as combinators from './types/combinators'
export * from './types/combinators'

//*******************************************
// Logic
//*******************************************
export * as logic from './types/logic'
export * from './types/logic'

//*******************************************
// Predicates
//*******************************************
export * as predicates from './types/predicates'
export * from './types/predicates'