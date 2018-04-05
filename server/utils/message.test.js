const expect = require('expect');
const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('shoutld generate correct message object', () => {
        const from = ' Jen';
        const text = 'Some message';
        const message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        const from = 'Admin';
        const lat = 20;
        const long = -25;
        const locMessage = generateLocationMessage(from, lat, long);
        expect(typeof locMessage.createdAt).toBe('number');
        expect(locMessage.from).toBe(from);
        expect(locMessage.url).toBe(`https://www.google.com/maps?q=${lat},${long}`);
    });
});