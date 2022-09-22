import instantClient from '../db/index.js'

export async function postTweet(tweet) {
  const client = instantClient();
  let result = await client.query(`INSERT INTO tweets(username, timestamp, textContent, comments) VALUES ($1, $2, $3, $4) RETURNING *;`,
  [tweet.user, tweet.timestamp, tweet.textContent, tweet.comments]);
  // If it doesn't work, you can try VALUES ('$1', '$2', '$3', '$4')
  console.log(result.rows);
  client.end();
  return result.rows;
};
