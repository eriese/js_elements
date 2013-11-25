make$Element = function(options) {
  var $tag;
  if (options) {
    $tag = $("<" + options.tagName + ">").addClass(options.className).attr("id", options.id);
  }
  else {$tag = $("<div>")};
  return $tag;
}

Model = function(options) {
  this.options = {};
  this.set(options)
}

Model.prototype.get = function(arg) {
  return this.options[arg]
}

Model.prototype.set = function(args) {
  for(var key in args) {
    this.options[key] = args[key];
  };
}
