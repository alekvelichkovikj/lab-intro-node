class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => a - b)
    this.length++
  }

  get(pos) {
    for (let i = 0; i < this.length; i++) {
      if (pos === i) {
        return i
      }
    }
    throw new Error('OutOfBounds')
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.max(...this.items)
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.min(...this.items)
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((acc, val) => acc + val)
    }
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return Math.floor(
        this.items.reduce((acc, val) => acc + val / this.length)
      )
    }
  }
}

module.exports = SortedList
