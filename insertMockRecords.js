function getRandomString() {
  return Math.random().toString(36).substring(7);
}

function getRandomInteger() {
  return Math.floor(Math.random() * 9999)
}

function insertMockRecords(schema) {
  var gr = new GlideRecord(schema.tableName);

  if (!gr.isValid()) {
    gs.log("Invalid table name")
    return;
  }

  for (var i=0; i<schema.count; i++) {
    gr.newRecord();
    for (column in schema.columns) {
      if (typeof schema.columns[column] === "function")
        gr.setValue(column, schema.columns[column]())
      else
        gr.setValue(column, schema.columns[column])
    }
    gr.insert();
  }
}

insertMockRecords({
  tableName: "mb_demo_drone",
  columns: {
    camera_model: "Imesity G3",
    model: getRandomString
  },
  count: 90000
});