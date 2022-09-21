import instantClient from '../db/index.js'

export async function getTheTime() {
  const client = instantClient();
  let result = await client.query('SELECT NOW() AS "theTime"');
  console.log(result.rows);
  client.end();
  return result.rows[0].theTime
};

