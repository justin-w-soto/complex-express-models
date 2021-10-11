DROP TABLE IF EXISTS species CASCADE;
DROP TABLE IF EXISTS animals;

CREATE TABLE species (
    id BIGINT GENERATED ALWAYS AS IDENTITY UNIQUE,
    type TEXT NOT NULL UNIQUE
);

CREATE TABLE animals (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL,
    species_id BIGINT NOT NULL,
    FOREIGN KEY(species_id) REFERENCES species(id) ON DELETE CASCADE
);
