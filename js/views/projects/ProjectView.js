window.ProjectView = Backbone.View.extend({
  tagName: "li",
  className: "project",
  events: {
    'touchstart': 'activate'
  },
  initialize: function(){
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
    this.template = _.template($("#project-template").html());
  },
  render: function(){
    var renderedContent = this.template(this.model.toJSON());
    $(this.el).html(renderedContent);
    return this;
  },
  activate: function(){
    $(this.el).addClass("selected");
    window.current_project = this.model;
    redirect_to("issues");
  }
});