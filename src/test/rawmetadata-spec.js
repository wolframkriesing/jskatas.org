import {describe, it} from 'kavun';
import assert from 'assert';
import RawMetadata from '../rawmetadata.js';

class Kata {
  static withId(id) {
    return {id, path: 'path'};
  }
}

describe('Create KataBundle', () => {
  const group = {items: [Kata.withId(1)]};
  const anotherGroup = {items: [Kata.withId(2)]};

  it('for one group only one KataGroup is created', () => {
    const groupedMetadataJson = {
      name: 'ES6 Stuff',
      nameSlug: 'es6-stuff',
      groups: {'group name': group},
    };
    const bundle = RawMetadata.toKataBundle({
      metadata: groupedMetadataJson,
      url: 'http://URL',
    });
    assert.strictEqual(bundle.name, 'ES6 Stuff');
    assert.strictEqual(bundle.nameSlug, 'es6-stuff');
    assert.strictEqual(bundle.length, 1);

    const firstKata = bundle.groups[0].katas[0];
    assert.strictEqual(firstKata.url, 'http://URL' + 'path');
  });

  it('two groups two KataGroups are created', () => {
    const groupedMetadataJson = {
      groups: {
        'group name': group,
        'group name1': anotherGroup,
      },
    };
    const kataGroups = RawMetadata.toKataBundle({
      metadata: groupedMetadataJson,
      url: '',
    });
    assert.strictEqual(kataGroups.length, 2);
  });
});
