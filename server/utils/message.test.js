const expect = require('expect');
const {generateMessage} = require('./message');

describe('generageMessage', () => {
    it('shoutld generate correct message object', () => {
        const from = ' Jen';
        const text = 'Some message';
        const message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
    });
});