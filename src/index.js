class Sorter {
  constructor() {
    // your implementation
    this.array = [];
    this.comparator = (a,b) => a-b;
  }

  add(element) {
    // your implementation
    // this.element = element;
    this.array.push(element);
  }

  at(index) {
    // your implementation
    return this.array[index];
  }

  get length() {
    // your implementation
    return this.array.lenth;
  }

  toArray() {
    // your implementation
    return this.array;
  }

  sort(indices) {
    // your implementation
    let selectedArr = indices.sort().map(index => this.array[index]);
    selectedArr.sort(this.comparator);
    
    for (let i = 0; i < indices.length; i++) {
      this.array[indices[i]] = selectedArr[i];
    }

    return this.array;
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;