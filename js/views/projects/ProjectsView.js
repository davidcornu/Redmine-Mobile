window.ProjectsView = Backbone.View.extend({
  tagName: "div",
  className: "projects",
  initialize: function(){
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render);
    this.collection.bind('add', this.render);
    this.template = _.template($("#projects-template").html());
  },
  render: function(){
    var renderedContent = this.template();
    $(this.el).html(renderedContent);
    var $projects = this.$("ul");
    var collection = this.collection;
    collection.each(function(project){
      var view = new ProjectView({model: project});
      $projects.prepend(view.render().el);
    });
    return this; 
  }
});