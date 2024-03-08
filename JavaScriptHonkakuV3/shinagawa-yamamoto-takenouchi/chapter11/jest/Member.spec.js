import { Member } from './inherit_basic.js';

describe('Jestの基本', () => {
    const NAME = '佐藤理央';
    let m;
    beforeEach(() => {
        m = new Member(NAME);
    });

    afterEach(() => {
        console.log('Test is done.')
    });

    it('greetメソッドの確認', () => {
        let result = m.greet();
        expect(m.name).toBe(NAME);
        expect(result).toContain(NAME)
    });
})