import { Entity } from '@/shared/domain/entities/entity';
import { InMemoryRepository } from '../../in-memory.repository';
import { NotFoundError } from '@/shared/domain/errors/not-found-error';

type StubEntityProps = {
  name: string;
  price: number;
};

class StubEntity extends Entity<StubEntityProps> {}

class StubInMemoryRepository extends InMemoryRepository<StubEntity> {}

describe('InMemoryRepository unit tests', () => {
  let sut: StubInMemoryRepository;

  beforeEach(() => {
    sut = new StubInMemoryRepository();
  });

  it('Should insert a new entity', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 });
    await sut.insert(entity);
    expect(entity.toJSON()).toStrictEqual(sut.items[0].toJSON());
  });

  it('Should throw error when entity not found', async () => {
    await expect(sut.findById('fakeId')).rejects.toThrow(
      new NotFoundError('Entity not found'),
    );
  });

  it('Should find an entity by id', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 });
    await sut.insert(entity);
    const result = await sut.findById(entity._id);
    expect(entity.toJSON()).toStrictEqual(result.toJSON());
  });

  it('Should find all entities', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 });
    await sut.insert(entity);
    const result = await sut.findAll();
    expect([entity]).toStrictEqual(result);
  });

  it('Should throw error while updating an entity not found', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 });
    await expect(sut.update(entity)).rejects.toThrow(
      new NotFoundError('Entity not found'),
    );
  });

  it('Should update an entity', async () => {
    const entity = new StubEntity({ name: 'test', price: 10 });
    await sut.insert(entity);
    const updatedEntity = new StubEntity(
      {
        name: 'updated',
        price: 20,
      },
      entity._id,
    );
    await sut.update(updatedEntity);
    expect(updatedEntity.toJSON()).toStrictEqual(sut.items[0].toJSON());
  });

  it('Should throw error while deleting an entity not found', async () => {
    await expect(sut.findById('fakeId')).rejects.toThrow(
      new NotFoundError('Entity not found'),
    );
  });
});
