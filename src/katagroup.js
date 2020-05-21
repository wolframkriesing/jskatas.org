export default class KataGroup {
  static fromRawKataItems(groupName, katas) {
    const group = new KataGroup();
    group.name = groupName;
    group.katas = katas;
    group.sortByName();
    return group;
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
