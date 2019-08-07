export default class Kata {
  static fromRawItem(rawItem) {
    const kata = new Kata();
    kata.initializePropertiesFromRawItem(rawItem);
    kata.id = Number.parseInt(kata.id);
    kata.isPublished = 'publishDateUTC' in kata;
    return kata;
  }

  initializePropertiesFromRawItem(rawItem) {
    const allRawKeys = Object.keys(rawItem);
    allRawKeys.forEach(key => (this[key] = rawItem[key]));
  }
}
