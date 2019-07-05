import KataGroup from './katagroup.js';
import KataBundle from './katabundle.js';

const fromMetadataJsonToKataBundle = groupedMetadataJson => {
  const groups = groupedMetadataJson.groups;
  const groupNames = Object.keys(groups);
  return groupNames.map((groupName) => {
    const rawKataItems = groups[groupName].items;
    return KataGroup.fromRawKataItems(groupName, rawKataItems);
  });
};

export default class RawMetadata {
  static toKataBundle(name, groupedMetadataJson) {
    return KataBundle.withGroups(name, fromMetadataJsonToKataBundle(groupedMetadataJson));
  }
}
