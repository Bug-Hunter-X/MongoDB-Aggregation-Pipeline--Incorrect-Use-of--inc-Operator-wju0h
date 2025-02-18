# MongoDB Aggregation Pipeline Bug: Incorrect $inc Usage

This repository demonstrates a common error when using the `$inc` operator within a MongoDB aggregation pipeline.  The `$inc` operator is designed to increment fields *in existing documents*, not to modify the results of an aggregation. Attempting to use it on the output of an aggregation leads to unexpected behavior.

The `bug.js` file contains the incorrect code, and the `bugSolution.js` file provides the correct solution.

## How to Reproduce

1.  Ensure you have a MongoDB instance running.
2.  Create a sample collection with documents.
3.  Run `bug.js`. Observe that the `$inc` operator does not correctly increment the count as intended. It will fail, as there are no documents to be updated, and an error will be returned.
4.  Run `bugSolution.js`. This shows the corrected aggregation pipeline, calculating the count accurately without modifying the original documents.

## Solution

The correct approach is to perform the increment *before* or *after* the aggregation pipeline, based on the desired outcome.  See the `bugSolution.js` for the correct implementation.