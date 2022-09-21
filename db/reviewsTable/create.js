import instantClient from '../index.js';

async function createTweets() {
  const client = instantClient();
  const result = await client.query(`CREATE TABLE IF NOT EXISTS tweets (id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, user TEXT, timestamp TEXT, textContent TEXT, comments TEXT[]);`);
}
    
createReviews();
