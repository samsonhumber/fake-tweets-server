import instantClient from '../db/index.js'

export async function getTweetById(id) {
  const client = instantClient();
  let result = await client.query(`SELECT * FROM tweets WHERE id = $1;`,
  [id]);
  console.log(result.rows);
  client.end();
  return result.rows;
};