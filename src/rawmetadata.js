import KataGroup from './katagroup.js';
import KataBundle from './katabundle.js';

const fromMetadataToKataGroups = (groupedMetadataJson, url) => {
  const groups = groupedMetadataJson.groups;
  const groupNames = Object.keys(groups);
  return groupNames.map(groupName => {
    const rawKataItems = groups[groupName].items;
    rawKataItems.forEach(item => (item.url = url + item.path));
    return KataGroup.fromRawKataItems(groupName, rawKataItems);
  });
};

export default class RawMetadata {
  static toKataBundle({metadata, url}) {
    const groups = fromMetadataToKataGroups(metadata, url);
    const {name, nameSlug} = metadata;
    return KataBundle.withGroups({name, nameSlug, groups});
  }
}
