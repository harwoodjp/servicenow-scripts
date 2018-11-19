var ga = GlideAggregate("sc_cat_item");

ga.groupBy("name");
ga.addEncodedQuery("^RLQUERYsc_req_item.cat_item,>=1^ENDRLQUERY");

try {
	gs.trace(true);	
  ga.query();
  while (ga.next()) {}
} finally {
  gs.trace(false);
}
