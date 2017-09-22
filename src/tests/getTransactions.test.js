import getTransactions from './../api/getTransactions';
import transactionToRecord from './../api/utils/transactionToRecord';
let data = {
  transactions: [
    {
      id: 1,
      category: 'Food',
      name: 'Hot Dog',
      amountSpent: 3,
      timestamp: '2017-08-07'
    },
    {
      id: 2,
      category: 'Entertainment',
      name: 'Movie Ticket',
      amountSpent: 12,
      timestamp: '2017-08-07'
    }
  ]
};

describe('getTransactions', () => {
  it('Calls fetch and returns notes', () => {
    fetch.mockResponse(
      JSON.stringify({ records: data.transactions.map(transactionToRecord) })
    );
    return getTransactions({
      AIRTABLE_DATABASE_ID: 'something',
      AIRTABLE_TOKEN: 'something'
    }).then(transactions => {
      expect(transactions).toEqual(data.transactions);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
