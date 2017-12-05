const metadataValidator = require('../../../src/validators/metadata-validator');
const HttpError = require('../../../src/errors/http-error');

describe('Validators: Metadata Validator', ()=>{
   describe('validateMetadata()', ()=>{

       let metadataWrapper = {};

       beforeEach(()=>{
           metadataWrapper = {
               name: 'default name',
               mimeType: 'default mime type',
               size: 999,
               status: 'default status',
               expiry: new Date(),
               creationTime: new Date(),
           };
       });

       it('should validate without throw an error', ()=>{
            metadataValidator.validateMetadata(metadataWrapper);
       });

       it('should throw an error on missing name', ()=>{
           delete metadataWrapper.name;
           expect(()=>{metadataValidator.validateMetadata(metadataWrapper)}).to.throw(HttpError);
       });

       it('should throw an error on missing mimeType', ()=>{
           delete metadataWrapper.mimeType;
           expect(()=>{metadataValidator.validateMetadata(metadataWrapper)}).to.throw(HttpError);
       });

       it('should throw an error on missing size', ()=>{
           delete metadataWrapper.size;
           expect(()=>{metadataValidator.validateMetadata(metadataWrapper)}).to.throw(HttpError);
       });

       it('should throw an error on missing status', ()=>{
           delete metadataWrapper.status;
           expect(()=>{metadataValidator.validateMetadata(metadataWrapper)}).to.throw(HttpError);
       });

       it('should throw an error on missing expiry', ()=>{
           delete metadataWrapper.expiry;
           expect(()=>{metadataValidator.validateMetadata(metadataWrapper)}).to.throw(HttpError);
       });

       it('should throw an error on missing creationTime', ()=>{
           delete metadataWrapper.creationTime;
           expect(()=>{metadataValidator.validateMetadata(metadataWrapper)}).to.throw(HttpError);
       });
   })
});