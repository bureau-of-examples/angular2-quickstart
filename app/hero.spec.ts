import {Hero} from './hero';

describe('Hero', () => {

    it('can get property value', () => {
        let hero:Hero = {id: 1, name: 'Super Cat'};
        expect(hero.id).toEqual(1);
        expect(hero.name).toEqual('Super Cat');
    });

});