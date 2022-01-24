
(function() {
  var jasmineRequire = window.jasmineRequire || require('./jasmine.js');

  var jasmine = jasmineRequire.core(jasmineRequire),
    global = jasmine.getGlobal();
  global.jasmine = jasmine;

  
  jasmineRequire.html(jasmine);

  
  var env = jasmine.getEnv();

  
  var jasmineInterface = jasmineRequire.interface(jasmine, env);

  for (var property in jasmineInterface) {
    global[property] = jasmineInterface[property];
  }
})();
