import pool from './pool.js'

export const getGallery = async () => {
  const query = `
    SELECT * FROM "gallery"
    ORDER BY "id";
  `
  const res = await pool.query(query)
  return res.rows
}

export const addLike = async id => {
  const query = `
    UPDATE "gallery"
    SET "likes" = "likes" + 1
    WHERE "id" = $1;
  `
  await pool.query(query, [id])
}

export const addPhoto = async photo => {
  const query = `
    INSERT INTO "gallery"
      ("path", "description")
    VALUES
      ($1, $2);
  `
  await pool.query(query, [photo.path, photo.description])
}
