import { Plant } from '../../app/model/plant.model';
import { faker } from '@faker-js/faker';

export function generateMockPlant(): Plant {
  return new Plant(
    faker.number.int({ min: 1, max: 1000 }),
    faker.word.words(2),
    faker.word.words(2) + 'us',
    faker.helpers.arrayElement(['Exterior', 'Interior']),
    faker.number.float({ min: 0.2, max: 5.0 }),
    faker.helpers.arrayElement(['Frío', 'Templado', 'cálido', 'Todos']),
    faker.word.words(3)
  );
}

export const mockPlants: Plant[] = Array.from({ length: 3 },generateMockPlant);
