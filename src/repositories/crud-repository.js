class CrudRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    console.log(`inside repository`)
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      console.log(`Something ewnt wrong in the Crud Repo : Create`);
      throw error;
    }
    ("");
  }

  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      console.log(`Something went wrong in the Crud Repo : destroy`);
      throw error;
    }
  }

  async getAll(data) {
    try {
      const response = await this.model.findAll();
      return response;
    } catch (error) {
      console.log("Something went wrong in the crud Repo : get");
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
      return response;
    } catch (error) {
      console.log("Something went wrong in the crud Repo : update");
      throw error;
    }
  }
}

module.exports = CrudRepository;
