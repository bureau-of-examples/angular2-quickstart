import {AllCapsPipe} from './all-caps.pipe';

describe('AllCapsPipe', () => {
    let pipe:AllCapsPipe;
    beforeEach(() => {
        pipe = new AllCapsPipe();
    });
    it('transforms "abc" to "ABC"', () => {
        expect(pipe.transform('abc')).toEqual('ABC');
    });
    it('transforms "abc def" to "ABC DEF"', () => {
        expect(pipe.transform('abc def')).toEqual('ABC DEF');
    });
    it('leaves "ABC DEF" unchanged', () => {
        expect(pipe.transform('Abc Def')).toEqual('ABC DEF');
    });
});