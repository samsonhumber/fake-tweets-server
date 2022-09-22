import instantClient from '../db/index.js'

export async function updateTweetTextById(id, tweet) {
  const client = instantClient();
  let result = await client.query(`UPDATE tweets SET textcontent = $1 WHERE id=$2 RETURNING *;`,
  [tweet.textContent, id]);
  console.log(result.rows);
  client.end();
  return result.rows;
};