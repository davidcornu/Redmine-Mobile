window.Projects = Backbone.Collection.extend({ 
  model: Project,
  populate: function(callback){
    var projects = this;
    var results = [];
    $.getJSON("/projects.json?key=" + user.get("key"), function(data){
      $.each(data.projects, function(index, project){
        var model = new Project(project);
        results.push(model);
      });
      projects.reset(results);
      if(typeof(callback)=='function'){ callback(); }
    });
  }
});