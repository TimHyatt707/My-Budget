import getCategories from './../api/getCategories';
let data = [
  {
    id: 1,
    category: 'Food',
    amountSpent: 100,
    limit: 200
  },
  {
    id: 2,
    category: 'Entertainment',
    amountSpent: 12,
    limit: 50
  }
];

describe('getCategories', () => {
  it('Calls fetch and returns notes', () => {
    fetch.mockResponse();
    return getCategories({
      AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
      AIRTABLE_TOKEN: 'SOME_TOKEN'
    }).then(categories => {
      expect(categories).toEqual([...data]);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
