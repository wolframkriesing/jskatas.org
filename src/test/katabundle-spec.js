import {describe, it} from 'kavun';
import assert from 'assert';
import KataBundle from '../katabundle.js';
import KataGroup from '../katagroup';

class Kata {
  static withId(id) {
    return {id, publishDateUTC: new Date()};
  }
  static withPublishDate(publishDateUTC) {
    return {id: 42, publishDateUTC};
  }
  static withoutPublishDate() {
    return Kata.withId(42);
  }
}

describe('KataBundle', () => {
  it('must provide the `name` as property', () => {
    const bundle = KataBundle.withGroups({name: 'ES11', groups: []});
    assert.strictEqual(bundle.name, 'ES11');
  });
  it('must provide the `nameSlug` as property', () => {
    const bundle = KataBundle.withGroups({nameSlug: 'es11', groups: []});
    assert.strictEqual(bundle.nameSlug, 'es11');
  });
  it('must provide the kata groups given', () => {
    const kataGroup = KataGroup.fromRawKataItems('kata group', [{id: 1}]);
    const bundle = KataBundle.withGroups({nameSlug: 'es11', groups: [kataGroup]});
    assert.strictEqual(bundle.groups.length, 1);
    assert.strictEqual(bundle.groups[0].name, 'kata group');
  });
});
describe('sort kata groups', () => {
  const kataBundle = new KataBundle();
  kataBundle.addGroup(
    KataGroup.fromRawKataItems('group with 1 kata', [Kata.withId(0)]),
  );
  kataBundle.addGroup(
    KataGroup.fromRawKataItems('group with 2 katas', [
      Kata.withId(1),
      Kata.withId('21'),
    ]),
  );
  kataBundle.addGroup(
    KataGroup.fromRawKataItems('group with newest kata', [
      Kata.withoutPublishDate(),
      Kata.withPublishDate('2015-03-13T07:55:00.000Z'),
    ]),
  );
  kataBundle.sortByNumberOfLinks();
  kataBundle.moveGroupWithNewestKataToBeginning();
  const allKataGroups = () => kataBundle.allGroups();
  it('first is the one with the newest kata inside', () => {
    assert.strictEqual(allKataGroups()[0].name, 'group with newest kata');
  });
  it('second is the one with most katas', () => {
    assert.strictEqual(allKataGroups()[1].name, 'group with 2 katas');
  });
  it('third is the one with less katas', () => {
    assert.strictEqual(allKataGroups()[2].name, 'group with 1 kata');
  });

  it('by name when number of files is the same', () => {
    const kataBundle = new KataBundle();
    kataBundle.addGroup(
      KataGroup.fromRawKataItems('group b', [Kata.withId(0)]),
    );
    kataBundle.addGroup(
      KataGroup.fromRawKataItems('group a', [Kata.withId(1)]),
    );
    kataBundle.sortByNumberOfLinks();
    kataBundle.moveGroupWithNewestKataToBeginning();

    assert.strictEqual(kataBundle.allGroups()[0].name, 'group a');
  });
});

describe('find newest kata', () => {
  it('the newest kata is the one with the highest ID', () => {
    const kataBundle = new KataBundle();
    kataBundle.addGroup(
      KataGroup.fromRawKataItems('group with 1 kata', [Kata.withId(2)]),
    );
    kataBundle.addGroup(
      KataGroup.fromRawKataItems('group with 2 katas', [
        Kata.withId(4),
        Kata.withId(13),
      ]),
    );
    assert.strictEqual(kataBundle.isNewestKata(Kata.withId(13)), true);
  });
});
