jsonSamplePost ={
    "timestamp": "2022-09-12T16:32:04+00:00",
    "user": "samsonhumber",
    "textContent": "Who is this null guy",
    "comments": ["What a nube!"]
}

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