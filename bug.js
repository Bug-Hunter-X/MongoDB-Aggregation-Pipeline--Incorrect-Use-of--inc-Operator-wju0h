```javascript
// Incorrect use of $inc operator in MongoDB aggregation pipeline
db.collection.aggregate([
  { $match: { ... } },
  { $group: { _id: '$field', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 10 },
  { $inc: { count: 1 } } // WRONG: Modifies the output, not the original document
]);
```