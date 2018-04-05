const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string values', () => {
        var res = isRealString(123);
        expect(res).toBeFalsy();
    });
    it('should reject string of only spaces', () => {
        var res = isRealString('    ');
        expect(res).toBeFalsy();
    });
    it('should allow string with non space chars', () => {
        var res = isRealString('a b c');
        expect(res).toBeTruthy();
    });
});