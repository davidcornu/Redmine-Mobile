window.NewUserView = Backbone.View.extend({
  tagName: "div",
  className: "new_user",
  events: {
    'touchstart button': 'create_user_from_form'
  },
  initialize: function(){
    this.template = _.template($("#new-user-template").html());
  },
  render: function(){
    var renderedContent = this.template();
    $(this.el).html(renderedContent);
    return this; 
  },
  create_user_from_form: function(){
    var api_key = this.$("textarea").val(); 
    window.user.set({key: api_key});
    window.user.populate(function(){
      window.user.save();
      redirect_to("");
    });
  }
});