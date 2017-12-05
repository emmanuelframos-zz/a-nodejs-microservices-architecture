const uploadValidator = require('../../../src/validators/upload-validator');
const HttpError = require('../../../src/errors/http-error');

describe('Validators: Upload Validator', ()=>{
    describe('validateUpload()', ()=>{

        let request = {};

        beforeEach(()=>{
            request.files = [{originalname:"default name", mimetype: "default mime", buffer:[0,1,1,0,0,1,0,1]}];
            request.body = {expiry: "default date"};
        });

        it('should validate without throw an error', ()=>{
            expect(()=>{uploadValidator.validateUpload(request)}).to.not.throw();
        });

        it('should throw an error on missing files in request', ()=>{
            delete request.files;
            expect(()=>{uploadValidator.validateUpload(request)}).to.throw(HttpError);
        });

        it('should throw an error having empty file list in request', ()=>{
            request.files = [];
            expect(()=>{uploadValidator.validateUpload(request)}).to.throw(HttpError);
        });

        it('should throw an error on missing file name', ()=>{
            delete request.files[0].originalname;
            expect(()=>{uploadValidator.validateUpload(request)}).to.throw(HttpError);
        });

        it('should throw an error on missing file buffer', ()=>{
            delete request.files[0].buffer;
            expect(()=>{uploadValidator.validateUpload(request)}).to.throw(HttpError);
        });

        it('should throw an error on missing file mime type', ()=>{
            delete request.files[0].mimetype;
            expect(()=>{uploadValidator.validateUpload(request)}).to.throw(HttpError);
        });
    });

    describe('validateUploadB64()', ()=>{
        let request = {};

        beforeEach(()=>{
            request.body = {files: [{name:"default name", data: "data:image/jpeg;base64:/ykgioguJNFefey7gvm", expiry: "default date"}]};
        });

        it('should validate without throw an error', ()=>{
            expect(()=>{uploadValidator.validateUploadB64(request)}).to.not.throw();
        });

        it('should throw an error on missing files in request', ()=>{
            delete request.body.files;
            expect(()=>{uploadValidator.validateUpload(request)}).to.throw(HttpError);
        });
        it('should throw an error having empty file list in request', ()=>{
            request.body.files = [];
            expect(()=>{uploadValidator.validateUploadB64(request)}).to.throw(HttpError);
        });

        it('should throw an error missing file name', ()=>{
            delete request.body.files[0].name;
            expect(()=>{uploadValidator.validateUploadB64(request)}).to.throw(HttpError);
        });

        it('should throw an error missing file data', ()=>{
            delete request.body.files[0].data;
            expect(()=>{uploadValidator.validateUploadB64(request)}).to.throw(HttpError);
        });

        it('should throw an error missing expiry', ()=>{
            delete request.body.files[0].expiry;
            expect(()=>{uploadValidator.validateUploadB64(request)}).to.throw(HttpError);
        });
    });
})