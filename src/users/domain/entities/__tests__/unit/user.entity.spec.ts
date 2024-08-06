import { faker } from '@faker-js/faker';
import { UserEntity } from '../../user.entity';
import e from 'express';

describe('User entity unit tests', () => {
  it('Constructor method', () => {
    const props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    const sut = new UserEntity(props);

    expect(sut.props.email).toEqual(props.name);
  });
});
