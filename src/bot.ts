import dotenv from 'dotenv';
import { Puppeteer } from 'puppeteer';
import { format } from 'date-fns';
import Twitter from 'twitter';
import fetch from 'node-fetch';

dotenv.config();

const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY as string,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET as string,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY as string,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET as string,
});