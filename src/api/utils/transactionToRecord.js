export default function transactionToRecord(transaction) {
  const record = { fields: {} };
  if (transaction.id) record.id = transaction.id;
  if (transaction.amountSpent)
    record.fields.amountSpent = transaction.amountSpent;
  if (transaction.category) record.fields.category = transaction.category;
  if (transaction.name) record.fields.name = transaction.name;
  if (transaction.timestamp) record.fields.timestamp = transaction.timestamp;
  return record;
}
