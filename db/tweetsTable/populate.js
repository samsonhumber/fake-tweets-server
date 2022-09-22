import instantClient from "../index.js";

// It may be sensible to use a different table for the comments, containing a column of tweetId equivalent to id in the tweets table

const sampleReviewData = [
    {'timestamp': '2022-09-12T16:32:04+00:00', 'user': 'samsonhumber', 'textContent': 'Have a nice day!', 'comments': ['You too!']},
    {'timestamp': '2022-09-14T16:34:10+00:00', 'user': 'otheerGuy34', 'textContent': 'Donald Trump was actually a good president', 'comments': ['Nah not really', 'This site is called fake tweets after all']},
    {'timestamp': '2022-09-16T16:38:04+00:00', 'user': 'gerbillie', 'textContent': "Please don't comment on this", 'comments': []}
];

async function populateReviews(tweet) {
  const client = instantClient();
  const result = await client.query(`INSERT INTO tweets (username, timestamp, textContent, comments) VALUES ($1, $2, $3, $4) RETURNING *;`,
  [tweet.user, tweet.timestamp, tweet.textContent, tweet.comments]
  );
  console.log('Tweet by ', result.rows[0].username, ' inserted at time ', result.rows[0].timestamp);
  client.end();
}

for(let i=0; i<sampleReviewData.length; i++) {
    populateReviews(sampleReviewData[i]);
}
