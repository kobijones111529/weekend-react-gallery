import pg from 'pg'

const pool = new pg.Pool(
  process.env.NODE_ENV === 'production'
    ? {
        host: 'db.bit.io',
        port: 5432,
        database: 'kobijones/react_gallery',
        user: 'vercel',
        password: process.env.DB_KEY,
        ssl: true
      }
    : {
        host: 'localhost',
        port: 5432,
        database: 'react_gallery'
      }
)

export default pool
