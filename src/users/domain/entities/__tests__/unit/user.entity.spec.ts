import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';
import { UserEntity, UserProps } from '../../user.entity';

describe('User entity unit tests', () => {
  let props: UserProps;
  let sut: UserEntity;

  beforeEach(() => {
    UserEntity.validate = jest.fn();
    props = UserDataBuilder({});
    sut = new UserEntity(props);
  });

  it('Constructor method', () => {
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.name).toEqual(props.name);
    expect(sut.props.email).toEqual(props.email);
    expect(sut.props.password).toEqual(props.password);
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Name getter', () => {
    expect(sut.props.name).toBeDefined();
    expect(sut.props.name).toEqual(props.name);
    expect(typeof sut.props.name).toBe('string');
  });

  it('Name setter', () => {
    sut['name'] = 'New name';
    expect(sut.props.name).toEqual('New name');
    expect(typeof sut.props.name).toBe('string');
  });

  it('Email getter', () => {
    expect(sut.props.email).toBeDefined();
    expect(sut.props.email).toEqual(props.email);
    expect(typeof sut.props.email).toBe('string');
  });

  it('Password getter', () => {
    sut['password'] = 'new password';
    expect(sut.props.password).toEqual('new password');
    expect(typeof sut.props.password).toBe('string');
  });

  it('Password setter', () => {
    const value = 'New password';
    sut.updatePassword(value);
    expect(sut.props.password).toEqual(value);
  });

  it('CreatedAt getter', () => {
    expect(sut.props.createdAt).toBeDefined();
    expect(sut.props.createdAt).toBeInstanceOf(Date);
  });

  it('Should update name field', () => {
    sut.update('New name');
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.name).toEqual('New name');
  });

  it('Should update password field', () => {
    sut.update('New password');
    expect(UserEntity.validate).toHaveBeenCalled();
    expect(sut.props.name).toEqual('New password');
  });
});
