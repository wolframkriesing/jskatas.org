import Kata from './kata.js';

export default class KataGroup {
  static fromRawKataItems(groupName, rawKataItems) {
    const group = new KataGroup();
    group.name = groupName;
    group.createKatas(rawKataItems);
    group.sortByName();
    return group;
  }

  get count() {
    return this.katas.length;
  }

  get publishedCount() {
    return this.katas.filter(k => k.isPublished).length;
  }

  createKatas(rawKataItems) {
    this.katas = rawKataItems.map(Kata.fromRawItem);
  }

  sortByName() {
    this.katas.sort(byId);
  }

  get highestId() {
    // Since katas are ALWAYS added to the end, which means the last is the
    // one with the highest ID, we just get the last one.
    return this.lastId;
  }

  get lastId() {
    return this.katas[this.katas.length - 1].id;
  }
}

const byId = (kata1, kata2) => (kata1.id < kata2.id ? -1 : 1);
