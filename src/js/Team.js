// eslint-disable-next-line import/prefer-default-export
export class Team {
  constructor() {
    this.members = new Set();
  }

  add(name) {
    if (!this.members.has(name)) {
      this.members.add(name);
    } else {
      throw (`Объект ${name} уже существует!`);
    }
  }

  addAll(...names) {
    names.forEach(name => this.add(name));
  }

  delete(name) {
    if (this.members.has(name)) {
      this.members.delete(name);
    }
  }

  toArray() {
    return Array.from(this.members);
  }
}
