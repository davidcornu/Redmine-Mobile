window.Issue = Backbone.Model.extend({
  populate_by_id: function(id,callback){
    var url = "/issues/" + id + ".json?key=" + user.get("key");
    var model = this;
    $.getJSON(url, function(data){
      model.set(data.issue);
      if(typeof(callback)=='function'){ callback(); }
    });
  }
});