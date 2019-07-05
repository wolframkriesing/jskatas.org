import {describe, it} from 'kavun';
import assert from 'assert';
import Kata from '../kata.js';

describe('kata', () => {
  describe('provides all values passed to it as properties', () => {
    
    const name = 'moi';
    const desc = 'description';
    const id = '123';
    const kata = () => Kata.fromRawItem({name, desc, id});
    it('property `name`', () => assert.strictEqual(kata().name, name));
    it('property `desc`', () => assert.strictEqual(kata().desc, desc));
    it('ensures the `id` is an int', () => assert.strictEqual(kata().id, Number(id)));
  });

  it('generate the kata link from a path', () => {
    const path = 'template-strings/multiline';
    const kata = Kata.fromRawItem({path});

    const expectedUrl = 'http://tddbin.com/#?kata=es6/language/template-strings/multiline';
    
    assert.deepEqual(kata.url, expectedUrl);
  });

});
