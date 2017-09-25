export default function categoryToRecord(category) {
  const record = { fields: {} };
  if (category.id) record.id = category.id;
  if (category.category) record.fields.category = category.category;
  if (category.limit) record.fields.limit = category.limit;
  return record;
}
