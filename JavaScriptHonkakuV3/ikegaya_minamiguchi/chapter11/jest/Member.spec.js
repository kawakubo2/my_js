import Member from './Member.js';

describe('Jestの基本', () => {
    const NAME = '佐藤理央';
    const AGE = 28;
    let m;
    beforeEach(() => {
        m = new Member(NAME, AGE);
    });
    afterEach(() => {
        console.log('Test is done.');
    });
    it('greetメソッドの確認', () => {
        let result = m.greet();
        expect(m.name).toBe(NAME);
        expect(m.age).toBe(AGE);
        expect(result).toContain(NAME);
    });
    it('toStringメソッドの確認', () => {
        let result = m.toString();
        expect(result).toBe(`Member class[name=${NAME} age=${AGE}]`);
    })
});