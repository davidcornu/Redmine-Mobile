window.User = Backbone.Model.extend({
  populate: function(callback){
    var model = this;
    $.getJSON("/users/current.json?key=" + model.get("key"), function(data){
      model.set(data.user);
      if(typeof(callback)=='function'){ callback(); }
    });
  },
  save: function(){
    window.localStorage.user = JSON.stringify(this);
  },
  fetch: function(){
    this.set(JSON.parse(window.localStorage.user));
  },
  gravatar: function(){
    return $.gravatar(this.get("mail"), {size: 40});
  }
});