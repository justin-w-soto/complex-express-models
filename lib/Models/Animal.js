const pool = require ('../utils/pool.js');

module.exports = class Animal {
    constructor(row) {
        this.id = row.id;
        this.animal_id = row.animal_id;
        this.animal = row.animal;
    }

    static async insert(animalObj) {
        const { animal_id, animal } = animalObj;

        const { rows } = await pool.query(
            'INSERT INTO table (animal_id, animal) VALUES ($1, $2) RETURNING *',
            [animal_id, animal]
        );

        return new Animal(rows[0]);
    }
}