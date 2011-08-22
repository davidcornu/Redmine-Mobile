window.Controller = Backbone.Router.extend({
  routes: {
    ''        : 'root',
    'new_user': 'new_user',
    'projects': 'projects',
    'issues'  : 'issues'
  },
  initialize: function(){
    window.user = new User();
    if(typeof(localStorage.user) == 'string'){ window.user.set(JSON.parse(localStorage.user)); }
    window.projects = new Projects();
    window.issues = new Issues();
    window.nav_direction = 'forward';
    
    $("a.back").live('touchstart', function(){ 
      window.nav_direction = 'back';
      history.back(); 
    });
  },
  root: function(){
    var view = new UserMenuView();
    transition_to(view.render().el);
  },
  new_user: function(){
    var view = new NewUserView();
    transition_to(view.render().el);
  },
  projects: function(){
    var view = new ProjectsView({collection: window.projects});
    transition_to(view.render().el);
    if(window.projects.length == 0){ window.projects.populate(); }
  },
  issues: function(){
    var view = new IssuesView({collection: window.issues});
    transition_to(view.render().el);
    window.issues.reset().populate();
  }
});

$(function(){
  // Start Controller
  window.app = new Controller();
  Backbone.history.start();
  
  // Handle Click Events
  if(_(window.Touch).isUndefined()){ 
    $(window).click(function(event){
      $(event.target).trigger("touchstart");
    });
  }
  
  // Show Loading
  $.ajaxSettings.beforeSend = function(){ $('.loading').show(); }
  $.ajaxSettings.complete = function(){ $('loading').hide(); }
});

