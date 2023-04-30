describe('Jasmineの基本', () => {
    let area;
    beforeEach(() => {
        area = new MyArea(10, 5);
    });
    afterEach(() => {
        // 終了処理
    });
    it('getTriangleメソッドのテスト', () => {
        expect(area.getTriangle()).toEqual(25);
    });
    it('getSquareメソッドのテスト', () => {
        expect(area.getSquare() == 50).toBeTruthy();
    });
});