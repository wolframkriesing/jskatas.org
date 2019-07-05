import {describe, it} from 'kavun';
import assert from 'assert';
import KataBundle from '../katabundle.js';
import KataGroup from '../katagroup';

class Kata {
  static withId(id) {
    return {id};
  }
}

describe('KataBundle', () => {
  it('must provide the `name` as property', () => {
    const bundle = KataBundle.withGroups('ES11', {});
    assert.strictEqual(bundle.name, 'ES11')
  });
});
describe('sort kata groups', () => {
  const kataGroups = new KataBundle();
  kataGroups.addGroup(KataGroup.withRawKataItems('group with 1 kata', [Kata.withId(0)]));
  kataGroups.addGroup(KataGroup.withRawKataItems('group with 2 katas', [Kata.withId(1), Kata.withId('21')]));
  kataGroups.addGroup(KataGroup.withRawKataItems('group with newest kata', [Kata.withId('111')]));
  kataGroups.sortByNumberOfLinks();
  kataGroups.moveGroupWithNewestKataToBeginning();
  const allKataGroups = () => kataGroups.all();
  it('first is the one with the newest kata inside', () => {
    assert.equal(allKataGroups()[0].name, 'group with newest kata');
  });
  it('second is the one with most katas', () => {
    assert.equal(allKataGroups()[1].name, 'group with 2 katas');
  });
  it('third is the one with less katas', () => {
    assert.equal(allKataGroups()[2].name, 'group with 1 kata');
  });

  it('by name when number of files is the same', () => {
    const kataGroups = new KataBundle();
    kataGroups.addGroup(KataGroup.withRawKataItems('group b', [Kata.withId(0)]));
    kataGroups.addGroup(KataGroup.withRawKataItems('group a', [Kata.withId(1)]));
    kataGroups.sortByNumberOfLinks();
    kataGroups.moveGroupWithNewestKataToBeginning();
  
    assert.equal(kataGroups.all()[0].name, 'group a');
  });
});

describe('find newest kata', () => {

  it('the newest kata is the one with the highest ID', () => {
    const kataGroups = new KataBundle();
    kataGroups.addGroup(KataGroup.withRawKataItems('group with 1 kata', [Kata.withId(2)]));
    kataGroups.addGroup(KataGroup.withRawKataItems('group with 2 katas', [Kata.withId(4), Kata.withId(13)]));
    assert.equal(kataGroups.isNewestKata(Kata.withId(13)), true);
  });
  
});
