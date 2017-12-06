


describe('Services: Upload Service', ()=>{
    describe('upload()', ()=>{
        it('should not throw any exception', async ()=>{

            const redisService = require('../../../src/services/redis-service')
            const uploadService = require('../../../src/services/upload-service');

            const redis = require('redis');

            const redisStub = sinon.stub(redis, 'createClient');
            redisStub.callsFake(() => {
                return ()=>{};
            });

            const userServiceStub = sinon.stub(redisService, 'set');
            userServiceStub.callsFake(() => {
                return 'OK';
            });

            const result = await uploadService.upload('', '');

            expect(result).to.equal('OK');
        })
    })
})