function getQuery(gr) {
	try {
		gs.trace(true);
		gr.query();
		while (gr.next()) {}
	} finally {
		gs.trace(false);
	}
}

var ga = GlideAggregate("sc_cat_item");
ga.groupBy("name");
ga.addEncodedQuery("^RLQUERYsc_req_item.cat_item,>=1^ENDRLQUERY");

getQuery(ga);