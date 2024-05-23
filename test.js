const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPund} = require('./app')

test('add 3 + 7 to equal 10', () => {
    expect(sum(3,7)).toBe(10)
}) 

test('expect 3,5 Euros to bo 3.745 dollars', () => {
    expect(fromEuroToDollar(3.5)).toBe(3.745)
})

test('expect 1.07 dollar to be 156.5 yens',() => {
    expect(fromDollarToYen(1.07)).toBe(156.5)
})

test('expect 156.5 yens to be 0.87 pounds', () => {
    expect(fromYenToPund(156.5)).toBe(0.87);
})