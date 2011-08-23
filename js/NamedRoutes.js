function root_path(){
  return "";
}

function new_user_path(){
  return "new_user";
}

function projects_path(){
  return "projects";
}

function issues_path(options){
  return "project/" + options.id + "/issues";
}

function issue_path(options){
  return "issue/" + options.id;
}