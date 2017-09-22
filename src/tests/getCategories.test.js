import getCategories from './../api/getCategories';
import categoryToRecord from './../api/utils/categoryToRecord';
let data = {
  categories: [
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
  ]
};

describe('getCategories', () => {
  it('Calls fetch and returns notes', () => {
    fetch.mockResponse(
      JSON.stringify({ records: data.categories.map(categoryToRecord) })
    );
    return getCategories({
      AIRTABLE_DATABASE_ID:
        'https://api.airtable.com/v0/app4N49jXo9XVuKeq/Categories?',
      AIRTABLE_TOKEN: 'keyZjFgCqHqPR1F8o'
    }).then(categories => {
      expect(categories).toEqual(data.categories);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
