import { SearchParams } from '../../searchable-repository-contracts';

describe('Searchable Repository unit tests', () => {
  describe('SearchParams tests', () => {
    it('page prop', () => {
      const sut = new SearchParams();
      expect(sut.page).toEqual(1);

      const params = [
        { page: null as any, expected: 1 },
        { page: undefined as any, expected: 1 },
        { page: '' as any, expected: 1 },
        { page: 'test' as any, expected: 1 },
        { page: 0, expected: 1 },
        { page: -1, expected: 1 },
        { page: 5.5, expected: 1 },
        { page: true, expected: 1 },
        { page: false, expected: 1 },
        { page: {}, expected: 1 },
        { page: 1, expected: 1 },
        { page: 2, expected: 2 },
      ];

      params.forEach((i) => {
        expect(new SearchParams({ page: i.page }).page).toBe(i.expected);
      });
    });

    it('perPage prop', () => {
      const sut = new SearchParams();
      expect(sut.perPage).toEqual(15);

      const params = [
        { perPage: null as any, expected: 15 },
        { perPage: undefined as any, expected: 15 },
        { perPage: '' as any, expected: 15 },
        { perPage: 'test' as any, expected: 15 },
        { perPage: 0, expected: 15 },
        { perPage: -1, expected: 15 },
        { perPage: 5.5, expected: 15 },
        { perPage: true, expected: 15 },
        { perPage: false, expected: 15 },
        { perPage: {}, expected: 15 },
        { perPage: 1, expected: 1 },
        { perPage: 2, expected: 2 },
        { perPage: 25, expected: 25 },
      ];

      params.forEach((i) => {
        expect(new SearchParams({ perPage: i.perPage }).perPage).toBe(
          i.expected,
        );
      });
    });
    it('sort prop', () => {
      const sut = new SearchParams();
      expect(sut.sort).toBeNull();

      const params = [
        { sort: null as any, expected: null },
        { sort: undefined as any, expected: null },
        { sort: '' as any, expected: null },
        { sort: 'test', expected: 'test' },
        { sort: 0, expected: '0' },
        { sort: -1, expected: '-1' },
        { sort: 5.5, expected: '5.5' },
        { sort: true, expected: 'true' },
        { sort: false, expected: 'false' },
        { sort: {}, expected: '[object Object]' },
        { sort: 1, expected: '1' },
        { sort: 2, expected: '2' },
        { sort: 25, expected: '25' },
      ];

      params.forEach((i) => {
        expect(new SearchParams({ sort: i.sort }).sort).toBe(i.expected);
      });
    });
  });
});
