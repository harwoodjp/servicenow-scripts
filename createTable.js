function createTable(tableObj) {
	var tableName = tableObj.tableName,
		extendsTable = tableObj.extendsTable;

	var columnAttrs = new Packages.java.util.HashMap();

	for (var i = 0; i < tableObj.tableFields.length; i++) {
		var fieldName = tableObj.tableFields[i].fieldName,
			fieldType = tableObj.tableFields[i].fieldType,
			fieldUsePrefix = tableObj.tableFields[i].fieldUsePrefix;

		var columnAttr = new GlideColumnAttributes(fieldName);
		columnAttr.setType(fieldType);
		columnAttr.setUsePrefix(fieldUsePrefix);

		columnAttrs.put(fieldName, columnAttr)
	}

	var tableCreator = new GlideTableCreator(tableName, tableName);
	tableCreator.setColumnAttributes(columnAttrs);

	if (extendsTable != null) {
		tableCreator.setExtends(extendsTable);
	} 

	tableCreator.update();
}

var tableObj = {
	tableName: "",
	extendsTable: null, // set to name of table
	tableFields: [
		{
			fieldName: "",
			fieldType: "", // string, integer, etc.
			fieldUsePrefix: false
		},
		{
			fieldName: "",
			fieldType: "",
			fieldUsePrefix: false
		},
	]
}

createTable(tableObj);