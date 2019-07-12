export default class Kata {
  static fromRawItem(rawItem) {
    const kata = new Kata();
    kata.initializePropertiesFromRawItem(rawItem);
    kata.id = Number.parseInt(kata.id);
    return kata;
  }

  initializePropertiesFromRawItem(rawItem) {
    const allRawKeys = Object.keys(rawItem);
    allRawKeys.forEach(key => (this[key] = rawItem[key]));
  }
}
