window.IssueDetailView = Backbone.View.extend({
  tagName: "div",
  className: "issue_detail",
  initialize: function(){
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
    this.template = _.template($("#issue-detail-template").html());
  },
  render: function(){
    var renderedContent = this.template(this.model.toJSON());
    $(this.el).html(renderedContent);
    return this;
  }
});