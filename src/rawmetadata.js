import KataGroup from './katagroup.js';
import Katabundle from './katabundle.js';

const fromMetadataJsonToKataBundle = groupedMetadataJson => {
  const groups = groupedMetadataJson.groups;
  const groupNames = Object.keys(groups);
  return groupNames.map((groupName) => {
    const rawKataItems = groups[groupName].items;
    return KataGroup.withRawKataItems(groupName, rawKataItems);
  });
};

export default class RawMetadata {
  
  static toKataBundle(groupedMetadataJson) {
    return Katabundle.fromObject(fromMetadataJsonToKataBundle(groupedMetadataJson));
  }
}
