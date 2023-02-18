//const {assert} = require('chai).assert;
const{expect} = require('chai');
const { describe,it } = require('mocha');
//const app = require('../app');

//Definisi Assert
//Cara assert menggunakan chai
//describe adalah function yang ada di mocha
describe('App', function () {
    //Assert tulisan sesuai ekpetasi
    it('app should return welcome message', function(){
        let response ="Welcome to QA Course at Sanbercode";
        expect(response).to.equal("Welcome to QA Course at Sanbercode")
        //expect{response}.to.include("sanbercode")
    })
    
})