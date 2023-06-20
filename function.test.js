const {
    returnTwo,
    greeting,
    add,
    multiply,
    divide,
    subtract
} = require('./functions')

test('Does returnTwo return 2?', () => {
    expect(returnTwo()).toEqual(2)
})

describe('Tests for greeting', () =>{

    test('Does greeting say name param', () => {
        expect(greeting('James')).toEqual('Hello, James')
        expect(greeting('Jill')).toEqual('Hello, Jill')
    })

    test('Does greeting say name param', () => {
        expect(greeting('Jill')).toEqual('Hello, Jill')
    })

})

describe('Math functions', () => {

    describe('Tests for add', () => {

        test('Is add(1,2) equal to 3', () => {
            expect(add(1,2)).toEqual(3)
            expect(add(5,9)).toEqual(14)
        })
    
    })

    test('Is multiply(1,2) equal to 2', () => {
        expect(multiply(1,2)).toEqual(2)
    })
    
    test('Is divide(4,2) equal to 2', () => {
        expect(divide(4,2)).toEqual(2)
    })
    
    test('Is subtract(4,2) equal to 2', () => {
        expect(subtract(4,2)).toEqual(2)
    })

})

