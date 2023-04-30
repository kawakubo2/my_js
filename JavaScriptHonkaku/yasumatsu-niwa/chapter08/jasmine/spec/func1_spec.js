describe('関数のテスト', () => {
    beforeEach(() => {

    });
    afterEach(() => {

    });
    it('0の場合の階乗(factorial)テスト', () => {
        expect(factorial(0)).toEqual(1);
    });
    it('10の場合の階乗(factorial)テスト', () => {
        expect(factorial(5)).toEqual(120);
    });
})