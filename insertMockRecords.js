function getRandomStringValue() {
  return Math.random().toString(36).substring(7);
}

function getRandomIntegerValue() {
  return Math.floor(Math.random() * 9999)
}

function getRandomColumnValue(type) {
  if (type === "STRING")
    return getRandomStringValue();
  if (type === "INTEGER")
    return getRandomIntegerValue();
  return null;
}

function insertMockRecords(schema) {
  var gr = new GlideRecord(schema.tableName);

  if (!gr.isValid()) {
    gs.log("Invalid table name")
    return;
  }

  for (var i=0; i<schema.count; i++) {
    gr.newRecord();
    for (column in schema.columns)
      gr.setValue(column, getRandomColumnValue(schema.columns[column]))
    gr.insert();
  }
}


insertMockRecords({
  tableName: "some_table",
  columns: {
    some_column1: "STRING",
    some_column2: "INTEGER",
    some_column3: "STRING"
  },
  count: 3000
});