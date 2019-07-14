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
  describe('AND some calculated values', () => {
    it('a missing `publishDateUTC` sets `isPublished=false`', () => {
      const kata = Kata.fromRawItem({});
      assert.equal(kata.isPublished, false);
    });
    it('an existing `publishDateUTC` sets `isPublished=true`', () => {
      const kata = Kata.fromRawItem({publishDateUTC: "2015-03-13T07:55:00.000Z"});
      assert.equal(kata.isPublished, true);
    });
  });
});
