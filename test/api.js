const expect = require('chai').expect
const rq = require('request-promise-native')

describe('API 서버 테스트', () => {
    it('hello 를 콜하면 world 값을 리턴', async () => {
        const {hello} = await rq({
            url :'http://localhost:3000/hello',
            method : 'GET',
            json : true
        })
        expect(hello).to.equal("world")
    }).timeout(200)
})