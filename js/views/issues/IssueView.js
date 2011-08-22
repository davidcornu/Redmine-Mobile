window.IssueView = Backbone.View.extend({
  tagName: "li",
  className: "issue",
  initialize: function(){
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
    this.template = _.template($("#issue-template").html());
  },
  render: function(){
    var renderedContent = this.template(this.model.toJSON());
    $(this.el).html(renderedContent);
    return this;
  }
});