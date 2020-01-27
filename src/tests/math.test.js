const { fahrenheitToCelsius, celsiusToFahrenheit, add} = require('../math')

test('farenhiteToCelcius', () => {
    const celcius = fahrenheitToCelsius(32) 
    expect(celcius).toBe(0)
})

test('celciusToFarenheit', () => {
    const fahrenheit = celsiusToFahrenheit(0)
    expect(fahrenheit).toBe(32)
})

test('should calculate sum of two numbers', (done) => {
    add(1,3).then((sum) => {
        expect(sum).toBe(4)
        done()
    })
})

test('async/await sum', async () => {
    const sum = await add(1,3)
    expect(sum).toBe(4)
})



