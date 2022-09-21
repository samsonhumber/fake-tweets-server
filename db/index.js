import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config();

export default function instantClient() {
    const client = new pg.Client(process.env.PG_URL);
    client.connect();
    return client
}
