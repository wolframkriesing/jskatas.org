import {describe, it} from 'kavun';
import assert from 'assert';
import RawMetadata from '../rawmetadata.js';

const toKataBundle = (name, metadataJson) => {
  return RawMetadata.toKataBundle(name, metadataJson);
};

class Kata {
  static withId(id) {
    return {id};
  }
}

describe('Create KataBundle', () => {
  const group = {items: [Kata.withId(1)]};
  const anotherGroup = {items: [Kata.withId(2)]};

  it('for one group only one KataGroup is created', () => {
    const groupedMetadataJson = {
      groups: {'group name': group},
    };

    const bundle = toKataBundle('ES6', groupedMetadataJson);
    assert.strictEqual(bundle.name, 'ES6');
    assert.strictEqual(bundle.length, 1);
  });

  it('two groups two KataGroups are created', () => {
    const groupedMetadataJson = {
      groups: {
        'group name': group,
        'group name1': anotherGroup,
      },
    };

    const kataGroups = toKataBundle('ES10', groupedMetadataJson);
    assert.equal(kataGroups.length, 2);
  });
});
