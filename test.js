// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    const dollars = fromEuroToDollar(3.5)
    const expected = 3.5 * 1.2; 

     expect(expected).toBe(dollars);
})

test("one thousand yen should be around 6.25 pounds", function(){
  
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(1000)
    const expected = (1000/127.9)*0.8; 

     expect(expected).toBe(pounds); 
})

test("Two dollars should be around 213.17 yen ", function(){

    const { fromDollarToYen} = require('./app.js')
    const yen = fromDollarToYen(2)
    const expected = (2/1.2) * 127.9;

     expect(expected).toBe(yen);
})