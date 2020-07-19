const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
  console.log(req.params);
  const galleryId = req.params.id;
  const query = `UPDATE "gallery" SET "likes" = likes + 1 WHERE "id" = $1;`;

  pool
    .query(query, [galleryId])
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(`That's not gonna work. ${err} `);
      res.sendStatus(500);
    });
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
  const query = `SELECT * FROM "gallery" ORDER BY "id" ASC;`;

  pool
    .query(query)
    .then((dbResponse) => {
      const gallery = dbResponse.rows;
      res.send(gallery);
    })
    .catch((err) => {
      console.log(`Oops, try again. `, err);
      res.sendStatus(500);
    });
}); // END GET Route

// POST route to add image
router.post('/', (req, res) => {
  const image = req.body;
  console.log(req.body);
  const query = `INSERT INTO gallery ("path", "description", "likes")
  VALUES ($1, $2, $3)`;

  pool
    .query(query, [image.path, image.description, image.likes])
    .then((dbResponse) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log(`Doesn't seem right? ${err}`);
      res.sendStatus(500);
    });
});

module.exports = router;
