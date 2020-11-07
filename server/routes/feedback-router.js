const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
  const queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [
      req.body.feeling,
      req.body.understanding,
      req.body.support,
      req.body.comment,
    ])
    .then((responseDb) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
  let search = `SELECT * FROM "feedback" ORDER BY "id"`;
  pool
    .query(search)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
  const feedbackId = req.params.id;
  const queryText = `DELETE FROM "feedback" WHERE id=$1;`;
  const queryArrayData = [feedbackId];

  pool
    .query(queryText, queryArrayData)
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});
module.exports = router;
