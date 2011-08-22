window.IssuesView = Backbone.View.extend({
  tagName: "div",
  className: "issues",
  events: {
    'touchstart ul.nav li.my': 'show_my_issues',
    'touchstart ul.nav li.all': 'show_all_issues',
  },
  initialize: function(){
    _.bindAll(this, 'render');
    this.collection.bind('reset', this.render);
    this.collection.bind('add', this.render);
    this.template = _.template($("#issues-template").html());
  },
  render: function(){
    var renderedContent = this.template();
    $(this.el).html(renderedContent);
    var $issues = this.$("ul").eq(1);
    var collection = this.collection;
    collection.each(function(issue){
      var view = new IssueView({model: issue});
      $issues.prepend(view.render().el);
    });
    return this; 
  },
  show_all_issues: function(){
    this.collection.populate();
    this.$("ul.nav li.current").removeClass("current");
    this.$("ul.nav li.all").addClass("current");
  },
  show_my_issues: function(){
    var filtered = this.collection.select(function(issue){
      var id = window.user.get("id");
      var is_author = (issue.get("author").id == id);
      var is_assigned = false;
      if(typeof(issue.get("assigned_to")) == 'object'){
        is_assigned = (issue.get("assigned_to") == id);
      }
      return (is_author || is_assigned);
    });
    this.collection.reset(filtered);
    this.$("ul.nav li.current").removeClass("current");
    this.$("ul.nav li.my").addClass("current");
  }
});