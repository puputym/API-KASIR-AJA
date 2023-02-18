const request = require('supertest')
const { expect } = require('chai')//buat manggil semua isi funct dari folder lain
const {auth} = require('./auth.js')
const baseUrl = 'https://kasir-api.belajarqa.com'
const response = request('https://kasir-api.belajarqa.com')//baseurl
.post('/authentications')//endpoint
.send({
    "email":"puput@gmail.com",
    "password": "12345678"
})
const token = response.body.data.accessToken


describe('Get User', async () => {
    //Assert tulisan sesuai ekpetasi
    const response = request('https://kasir-api.belajarqa.com')//baseurl
    .get('/users/{userId}')//endpoint
    .set({'Authorization' : token})

    console.log((await response).body);
    it('response status is 200', async () =>{
        // console.log((await response).status);
        // console.log((await response).body);
        expect((await response).status).to.equal(200);
    })
    // let token = auth()
    // console.log(token)
})