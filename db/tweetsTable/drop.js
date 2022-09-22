import instantClient from '../index.js';

async function dropTweets() {
  const client = instantClient();
  const result = await client.query(`DROP TABLE IF EXISTS tweets`);
  console.log(result.command, "tweets deleted");
  client.end();
}

dropTweets();