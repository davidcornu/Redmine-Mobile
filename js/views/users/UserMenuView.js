window.UserMenuView = Backbone.View.extend({
  tagName: "div",
  className: "users",
  events: {
    'touchstart li.new': 'show_new_user_form'
  },
  initialize: function(){
    _.bindAll(this, 'render');
    this.template = _.template($("#user-menu-template").html());
  },
  render: function(){
    var renderedContent = this.template();
    $(this.el).html(renderedContent);
    $list = this.$("ul");
    if(!_(user.get("key")).isUndefined()){
      var view = new UserView({model: window.user});
      $list.prepend(view.render().el);
    }
    return this; 
  },
  show_new_user_form: function(){
    this.$("li.new").addClass("selected");
    redirect_to("new_user");
  }
});