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
    it('ensures the `id` is an int', () =>
      assert.strictEqual(kata().id, Number(id)));
  });
});
