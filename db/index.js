import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config();

//elephant sql db has a limit of 5 connections. This is using node pg - couldn't get it to work the normal way with pool,
// and did this.
export default function instantClient() {
    const client = new pg.Client(process.env.PG_URL);
    client.connect();
    return client
}
