function redirect_to(address){
  window.app.navigate(address, true);
}

function user_missing(){
  return _(window.current_user).isUndefined
}

function project_missung(){
  return _(window.current_project).isUndefined
}

function opposite_of(direction){
  if(direction == 'forward'){
    return 'back';
  } else {
    return 'forward';
  }
}

function transition_to(element){
  $("#holder").css("height", window.innerHeight).addClass("fixed");
  
  var direction = window.nav_direction;
  
  $("<div class='container " + direction + "'></div>").append(element).appendTo("#holder");
  
  setTimeout(function(){
    $(".container.current").removeClass("current").addClass(opposite_of(direction)).bind("webkitTransitionEnd", function(){
      $("#holder").css("height", "auto").removeClass("fixed");
      $(this).remove();
    });
    $(".container." + direction).removeClass(direction).addClass("current");
  }, 100);
  
  window.nav_direction = 'forward'
}

function truncate(string, length){
  var truncated_string = string.substring(0, Math.min(length, string.length));
  if(string.length > length){ truncated_string += "..."; }
  return truncated_string;
}