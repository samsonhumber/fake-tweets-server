import instantClient from '../db/index.js'

export async function getAllTweets() {
  const client = instantClient();
  let result = await client.query('SELECT * FROM tweets');
  console.log(result.rows);
  client.end();
  return result.rows;
};

