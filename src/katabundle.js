export default class KataBundle {
  constructor() {
    this.name = '';
    this.groups = [];
  }

  allGroups() {
    return this.groups;
  }

  get length() {
    return this.allGroups().length;
  }

  static withGroups(name, obj) {
    const bundle = new KataBundle();
    bundle.name = name;
    bundle.initializePropertiesFromRawObject(obj);
    bundle.sortByNumberOfLinks();
    bundle.moveGroupWithNewestKataToBeginning();
    return bundle;
  }

  isNewestKata(kata) {
    return Number.parseInt(kata.id) === this.highestKataId();
  }

  addGroup(kataGroup) {
    this.groups.push(kataGroup);
  }

  // private

  initializePropertiesFromRawObject(obj) {
    const allKeys = Object.keys(obj);
    allKeys.forEach(key => this.addGroup(obj[key]));
  }

  sortByNumberOfLinks() {
    const sortFunction = (group, anotherGroup) => {
      const katasCount = group.katas.length;
      const anotherKatasCount = anotherGroup.katas.length;
      if (katasCount === anotherKatasCount) {
        return anotherGroup.name < group.name ? 1 : -1;
      }
      return anotherKatasCount - katasCount;
    };
    this.groups.sort(sortFunction);
  }

  highestKataId() {
    const sortReverseNumerically = (a, b) => b - a;
    return this.eachGroupsHighestKataId().sort(sortReverseNumerically)[0];
  }

  eachGroupsHighestKataId() {
    return this.groups.map(group => group.highestId);
  }

  groupWithNewestKata() {
    const groupWithHighestId = (prev, cur) =>
      prev.highestId > cur.highestId ? prev : cur;
    return this.groups.reduce(groupWithHighestId, {highestId: 0});
  }

  moveGroupWithNewestKataToBeginning() {
    this.moveToBeginning(this.groupWithNewestKata());
  }

  moveToBeginning(itemToMove) {
    const isNotItemToMove = item => !Object.is(item, itemToMove);
    this.groups = [itemToMove, ...this.groups.filter(isNotItemToMove)];
  }
}
