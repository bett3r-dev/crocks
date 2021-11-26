/** @license ISC License (c) copyright 2016 original and current authors */
/** @author Ian Hofmann-Hicks (evil) */
/** @author Tomás Ruiz */

//*******************************************
// Crocks
//*******************************************

export * as Arrow from './types/Arrow'
export * as Async from './types/Async'
export * as Const from './types/Const'
export * as Either from './types/Either'
export * as Equiv from './types/Equiv'
export * as Identity from './types/Identity'
export * as IO from './types/IO'
export * as List from './types/List'
export * as Maybe from './types/Maybe'
export * as Pair from './types/Pair'
export * as Pred from './types/Pred'
export * as Reader from './types/Reader'
// export * as ReaderT from './Reader/types/ReaderT'
export * as Result from './types/Result'
export * as Star from './types/Star'
export * as State from './types/State'
// export * as Tuple from './types/Tuple'
// export * as Unit from './types/Unit'
export * as Writer from './types/Writer'

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

export type crocks = {
  Arrow: Arrow;
  Async: Async;
  Const: Const;
  Either: Either;
  Equiv: Equiv;
  Identity: Identity;
  IO: IO;
  List: List;
  Maybe: Maybe;
  Pair: Pair;
  Pred: Pred;
  Reader: Reader;
  // ReaderT: ReaderT;
  Result: Result;
  Star: Star;
  State: State;
  // Tuple: Tuple;
  // Unit: Unit;
  Writer: Writer;
}

//*******************************************
// Helpers
//*******************************************


export * as branch from './types/Pair/branch';
export * as fanout from './types/Pair/fanout';
export * as find from './types/Maybe/find';
export * as getPath from './types/Maybe/getPath';
export * as getProp from './types/Maybe/getProp';
export * as safe from './types/Maybe/safe';
export * as safeAfter from './types/Maybe/safeAfter';
export * as safeLift from './types/Maybe/safeLift';
export * as toPairs from './types/Pair/toPairs';
export * as tryCatch from './types/Result/tryCatch';

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

import * as _helpers from './types/helpers'
export type helpers = typeof _helpers & {
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

//*******************************************
// Monoids
//*******************************************

export * as All from './types/All';
export * as Any from './types/Any';
export * as Assign from './types/Assign';
export * as Endo from './types/Endo';
export * as First from './types/First';
export * as Last from './types/Last';
export * as Max from './types/Max';
export * as Min from './types/Min';
export * as Prod from './types/Prod';
export * as Sum from './types/Sum';

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
export type monoids = {
  All: All
  Any: Any
  Assign: Assign
  Endo: Endo
  First: First
  Last: Last
  Max: Max
  Min: Min
  Prod: Prod
  Sum: Sum
}

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

import * as _pointfree from './types/pointfree';
export type pointfree = typeof _pointfree &{
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

export type transforms = {
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