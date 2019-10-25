/**
 * Assuming an operation was completed a specific amount of times in a timeframe, calculate the operations on average that were completed every specified unit of time.
 * @param num The amount of times the operation was completed.
 * @param time The amount of time it took for all the operations to complete.
 * @param est The units of time to estimate the operation amount for.
 * @example
 * ```
 * const timePer = require("time-per")
 * timePer(2, 15, 60)
 * //=> 8
 * ```
 */
declare function timePer(num: number, time: number, est: number): number;

export = timePer;
