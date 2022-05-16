import postgres from 'postgres';

const sql = postgres({
  database: 'ftj',
  host: 'localhost',
  password: 'safe',
  user: 'postgres',
});

await sql`DROP TABLE IF EXISTS demo`;

const createTable = await sql`
CREATE TABLE "demo" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(100),
    "datetime" timestamp,
    "code" integer,
    "isValid" boolean
  );  
`;

console.log(createTable);

const describe = await sql`
    SELECT
        table_name,
        column_name,
        data_type
    FROM
        information_schema.columns
    WHERE
        table_name = 'demo';
`;

console.log(describe);

const insert =
  await sql`INSERT INTO demo VALUES (1, 'tom böttger', ${new Date().toISOString()}, 910, true), (2, 'lol', ${Date.now()}, ${187}, ${true})`;

console.log(insert.count);

const select = await sql`SELECT * FROM demo`;

console.log(select);
console.log(select.columns);

await sql.end();
