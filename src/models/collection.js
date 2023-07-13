'use strict';

class Collection {
  constructor(model) {
    this.model = model;
  }
  async create(jsonObj) {
    try {
      let record = await this.model.create(jsonObj);
      return record;
    } catch (error) {
      console.error(error);
    }
  }

  async read(id, options = {}) {
    try {
      let record = null;
      if (id) {
        options.where = { id: id };
        record = await this.model.findOne(options);
      } else {
        record = await this.model.findAll(options);
      }
      return record;
    } catch (error) {
      console.error(error);
    }
  }

  async update(id, jsonObj) {
    try {
      if (!id) throw new Error('No ID provided');
      let record = await this.model.findOne({ where: { id: id } });
      let updatedRecord = await record.update(jsonObj);
      return updatedRecord;
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id) {
    try {
      if (!id) throw new Error('No ID provided');
      let deletedRecord = await this.model.destroy({ where: { id: id } });
      return deletedRecord;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = Collection;
