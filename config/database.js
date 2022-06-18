const sqlite = {
  client: 'sqlite',
  connection: {
    filename: '.tmp/data.db',
  },
  useNullAsDefault: true,
};

const postgres = {
  client: 'postgres',
  connection: {
    host: process.env.DATABASE_HOST,
    port: 5432,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
};

const mysql = {
  client: 'mysql',
  connection: {
    database: 'strapi',
    user: 'strapi',
    password: 'strapi',
    port: 3306,
    host: 'localhost',
  },
};

const db = {
  mysql,
  sqlite,
  postgres,
};

const connection = process.env.DATABASE ? db[process.env.DATABASE] : db.sqlite;

module.exports = { connection };
