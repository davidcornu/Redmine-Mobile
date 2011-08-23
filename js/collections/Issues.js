window.Issues = Backbone.Collection.extend({
  model: Issue,
  populate: function(callback){
    var issues = this;
    var results = [];
    var project = this.project;
    $.getJSON("/issues.json?key=" + user.get("key") + "&project_id=" + project.id, function(data){
      $.each(data.issues, function(index, issue){
        var model = new Issue(issue);
        results.push(model);
      });
      issues.reset(results);
      if(typeof(callback)=='function'){ callback(); }
    });
  }
});