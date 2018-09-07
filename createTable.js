function createTable(tableName, extendsTable, tableFields) {
	var columnAttrs = new Packages.java.util.HashMap();

	for (var i = 0; i < tableFields.length; i++) {
		var fieldName = tableFields[i].fieldName,
			fieldType = tableFields[i].fieldType,
			fieldUsePrefix = tableFields[i].fieldUsePrefix;

		var columnAttr = new GlideColumnAttributes(fieldName);
		columnAttr.setType(fieldType);
		columnAttr.setUsePrefix(fieldUsePrefix);

		columnAttrs.put(fieldName, columnAttr)
	}

	var tc = new GlideTableCreator(tableName, tableName);
	tc.setColumnAttributes(columnAttrs);

	if (extendsTable != null) {
		tc.setExtends(extendsTable);
	} 

	tc.update();
}

var tableName = "extends2";
var extendsTable = "base2";
var tableFields = [
	{
		fieldName: "field1",
		fieldType: "integer",
		fieldUsePrefix: false
	},
];

createTable(tableName, extendsTable, tableFields);