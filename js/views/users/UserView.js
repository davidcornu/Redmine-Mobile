window.UserView = Backbone.View.extend({
  tagName: "li",
  className: "user",
  events: {
    'touchstart': 'activate'
  },
  initialize: function(){
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
    this.template = _.template($("#user-template").html());
  },
  render: function(){
    var renderedContent = this.template(this.model.toJSON());
    $(this.el).html(renderedContent);
    $(this.el).prepend(this.model.gravatar());
    return this;
  },
  activate: function(){
    $(this.el).addClass("selected");
    redirect_to(projects_path());
  }
});