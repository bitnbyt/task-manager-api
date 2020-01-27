const request = require('supertest')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const app = require('../app')
const User = require('../models/user')

const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name: "example",
    email: "example@example.com",
    password: "qwerty123",
    tokens: [{
        token: jwt.sign({ _id: userOneId}, process.env.JWT_SECRET)
    }]
}



beforeEach(async () => {
    await User.deleteMany()
    await new User(userOne).save()
})

test('Should signup new user', async () => {
    const response = await request(app).post('/users').send({
        name: "amit",
        email: "amkjitdhaterwal@example.com",
        password: "qwerty123"
    }).expect(201)
    // Assert that database was changed succesfully
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Assertions about the response
    expect(response.body).toMatchObject({
        user :{
            name: "amit",
            email: "amkjitdhaterwal@example.com"
        },
        token: user.tokens[0].token
    })
    // assert that password is not plane in database (i.e it is hashed)
    expect(user.password).not.toBe('qwerty123')
})

test('Should login existing user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
})

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: "dontexists"
    }).expect(400)
})

test('Should read user profile after authantication', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization',`Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not read user profile for unotherization', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})

test('Should delete account for user', async () => {
    await request(app)
        .get('/users/me')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not delete for unotherization', async () => {
    await request(app)
        .get('/users/me')
        .send()
        .expect(401)
})
