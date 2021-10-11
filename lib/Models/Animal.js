const pool = require ('../utils/pool.js');

module.exports = class Animal {
    constructor(row) {
        this.id = row.id;
        this.name = row.name;
        this.speciesId = row.species_id;
      }

      static async insert({ name, speciesId }) {

        const { rows } = await pool.query(

          'INSERT INTO animals (name, species_id) VALUES ($1, $2) RETURNING *;',
          [name, speciesId]
        );

        return new Animal(rows[0]);
      }

      static async get(id) {
        const { rows } = await pool.query('SELECT * FROM animals WHERE id=$1;', [
          id,
        ]);
        return new Animal(rows[0]);
      }
    
}