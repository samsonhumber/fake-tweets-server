# fake-tweets-server

## A backend for the fake tweets social media app

22/09/2022:  
- A postgreSQL database on ElephantSQL has been created
- The tweets for everyone may currently be read.   
- A user may post a tweet to the database.
- A user may edit the text content of their tweet.
- A user may delete a tweet.  
Still to do:  
- Comments are currently an array, so I recommend that they be in their own table, so that data of username, timestamp, etc. may be applied to them too.
- If ElephantSQL is not a sensible choice, then the scripts will have to be significantly changed