import instantClient from '../db/index.js'

export async function deleteTweetById(id) {
  const client = instantClient();
  let result = await client.query(`DELETE FROM tweets WHERE id = $1 RETURNING *;`,
  [id]);
  console.log(result.rows);
  client.end();
  return result.rows;
};