/* 
 * spa.shell.js
 */

/*jslint         browser : true, continue : true,
  devel  : true, indent  : 2,    maxerr   : 50,
  newcap : true, nomen   : true, plusplus : true,
  regexp : true, sloppy  : true, vars     : false,
  white  : true
 */

  spa.shell = (function () {
  //------------------BEGIN MODULE SCOPE VAR--------------
  
  var
    configMap = {
      main_html : String()
	//+ '<p>Welcome to SPA</p>'
  + '<nav class="navbar navbar-inverse navbar-fixed-top">'                              
    + '<div class="container">'
      + '<div class="navbar-header">'
        + '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">'
          + '<span class="sr-only">Toggle navigation</span>'
          + '<span class="icon-bar"></span>'
          + '<span class="icon-bar"></span>'
          + '<span class="icon-bar"></span>'
        + '</button>'
        + '<a class="navbar-brand" href="#">Quiz App</a>'
      + '</div>'
      + '<div id="navbar" class="collapse navbar-collapse">'
        + '<ul class="nav navbar-nav">'
          + '<li class="active"><a href="#">Home</a></li>'
          + '<li><a href="#about">About</a></li>'
          + '<li><a href="#contact">Contact</a></li>'
        + '</ul>'
      + '</div>' //<!--/.nav-collapse -->
    + '</div>'
  + '</nav>'

  + '<div class="container">'
    
    + '<div class="starter-template">'

        //<!-- Test Button -->
      + '<button type="button" class="btn btn-lg btn-primary startbtn">Click Here to Start Quiz</button>'

      + '<h1>Fill in the Blank</h1>'

          //<!-- Question with user answer box -->
      + '<div><br>'

        + 'Variable for question goes here <input type="text" name="answer">'        


        //


      + '</div>'

    + '</div>'
  + '</div>'

    },
    stateMap = { $container : null },
    jqueryMap = {},
    setJqueryMap, initModule;
  //------------------END MODULE SCOPE VAR----------------

  //------------------BEGIN UTILITY METHODS---------------
  //------------------END UTILITY METHODS-----------------

  //------------------BEGIN DOM METHODS-------------------

  setJqueryMap = function () {
    var $container = stateMap.$container;
    jqueryMap = {
      $container     : $container 
    }
  };  // end setJqueryMap

  //------------------END DOM METHODS---------------------
  
  //------------------BEGIN EVENT HANDLERS----------------
  //------------------END EVENT HANDLERS------------------
  
  //------------------BEGIN PUBLIC METHODS----------------
  
  initModule = function ( $container ) {
    stateMap.$container = $container;
    $container.html( configMap.main_html );
    setJqueryMap();
  };
  

  return { initModule : initModule };
  //------------------END PUBLIC METHODS------------------

}());