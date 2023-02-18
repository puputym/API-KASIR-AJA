const request = require('supertest')
module.export = function auth () {
    const response = request('https://kasir-api.belajarqa.com')//baseurl
    .post('/authentications')//endpoint
    .send({
        "email":"puput@gmail.com",
        "password": "12345678"
    })
    token = response.body.data.accessToken
    
    return token
    
}