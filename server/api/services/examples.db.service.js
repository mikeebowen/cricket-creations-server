class ExamplesDatabase {
  constructor() {
    this.data = [];
    this.counter = 0;

    this.insert('example 0');
    this.insert('example 1');
  }

  all() {
    return Promise.resolve(this.data);
  }

  byId(id) {
    return Promise.resolve(this.data[id]);
  }

  insert(name) {
    const record = {
      id: this.counter,
      name,
    };

    this.counter += 1;
    this.data.push(record);

    return Promise.resolve(record);
  }
}

export default new ExamplesDatabase();
