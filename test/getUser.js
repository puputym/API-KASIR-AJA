const request = require('supertest')
const { expect } = require('chai')//buat manggil semua isi funct dari folder lain
const {auth} = require('./auth.js')

const baseUrl = 'https://kasir-api.belajarqa.com'//lokal variable

describe('Get Token',  () => {
    //Assert tulisan sesuai ekpetasi
    const response = request(baseUrl)//baseurl
    .get('/users/{userId}')//endpoint
    it('response status is 200', async () =>{
        // console.log((await response).status);
        // console.log((await response).body);
        expect((await response).status).to.equal(200);
    })
    let token = auth
    console.log(token)
})