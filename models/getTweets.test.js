import { test,expect } from '@jest/globals';
import { getAllTweets } from './getTweets.js';
// These tests may not work on the live database
// Use the create and populate functions before testing

const sampleReviewData = [
    {'id': expect.any(Number), 'timestamp': '2022-09-12T16:32:04+00:00', 'username': 'samsonhumber', 'textcontent': 'Have a nice day!', 'comments': ['You too!']},
    {'id': expect.any(Number),'timestamp': '2022-09-14T16:34:10+00:00', 'username': 'otheerGuy34', 'textcontent': 'Donald Trump was actually a good president', 'comments': ['Nah not really', 'This site is called fake tweets after all']},
    {'id': expect.any(Number),'timestamp': '2022-09-16T16:38:04+00:00', 'username': 'gerbillie', 'textcontent': "Please don't comment on this", 'comments': []}
];

describe ('getAllTweets tests', () => {
test('expects search for sample tweets data to return the sample data', async () => {
    //ARRANGE
    const expected = sampleReviewData;
    //ACT 
    const actual = await getAllTweets();
    //ASSERT
    expect(actual).toEqual(expect.arrayContaining(expected));
});
});

/*
Some other tests from previous work that may be adapted later
describe('getReviewsFromUserName tests', () => {
    test('expects search for my username to return one review', async () => {
        //ARRANGE
        const expected = [sampleReviewData[0]];
        //ACT
        const actual = await getReviewsFromUserName('samsonhumber');
        //ASSERT
        expect(actual).toEqual(expected);
    });
    
    test('expects search for the sample username to return the other review', async () => {
        //ARRANGE
        const expected = [sampleReviewData[1]];
        //ACT
        const actual = await getReviewsFromUserName(sampleReviewData[1].user);
        //ASSERT
        expect(actual).toEqual(expected);
    })
})
*/
