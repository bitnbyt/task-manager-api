const fahrenheitToCelsius = (temp) => {
    return (temp - 32) / 1.8 // 68-32=36/1.8=2*10=20
}

const celsiusToFahrenheit = (temp) => {
    return (temp * 1.8) + 32  // 20*1.8=36 +32 = 68
}

const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}



module.exports = {
    fahrenheitToCelsius,
    celsiusToFahrenheit,
    add
}