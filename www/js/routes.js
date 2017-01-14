angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.page2', {
    url: '/page2',
    views: {
      'tab1': {
        templateUrl: 'templates/page2.html',
        controller: 'page2Ctrl'
      }
    }
  })

  .state('tabsController.page3', {
    url: '/page3',
	params: {
		name: "",
		favorite_sentence: "",
		favorite_all: ""		
},
    views: {
      'tab2': {
        templateUrl: 'templates/page3.html',
        controller: 'page3Ctrl'
      }
    }
  })

  .state('tabsController.page4', {
    url: '/page4',
	params: {
		date: "",
		intentions: "",
		favorite_part: ""		
},
    views: {
      'tab3': {
        templateUrl: 'templates/page4.html',
        controller: 'page4Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.page5', {
    url: '/page5',
    views: {
      'tab4': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('page50', {
    url: '/page50',
    templateUrl: 'templates/page50.html',
    controller: 'page50Ctrl'
  })

  .state('page31', {
    url: '/page31',
    templateUrl: 'templates/page31.html',
    controller: 'page31Ctrl'
  })

  .state('tabsController.page6', {
    url: '/page6',
    views: {
      'tab5': {
        templateUrl: 'templates/page6.html',
        controller: 'page6Ctrl'
      }
    }
  })

  .state('30', {
    url: '/page9',
    templateUrl: 'templates/30.html',
    controller: '30Ctrl'
  })

  .state('ohMyGod', {
    url: '/page10',
    templateUrl: 'templates/ohMyGod.html',
    controller: 'ohMyGodCtrl'
  })

  .state('page30', {
    url: '/page30',
    templateUrl: 'templates/page30.html',
    controller: 'page30Ctrl'
  })

  .state('page26', {
    url: '/page26',
    templateUrl: 'templates/page26.html',
    controller: 'page26Ctrl'
  })

  .state('page27', {
    url: '/page27',
    templateUrl: 'templates/page27.html',
    controller: 'page27Ctrl'
  })

  .state('page28', {
    url: '/page28',
    templateUrl: 'templates/page28.html',
    controller: 'page28Ctrl'
  })

  .state('page48', {
    url: '/page48',
    templateUrl: 'templates/page48.html',
    controller: 'page48Ctrl'
  })

  .state('302', {
    url: '/page12',
    templateUrl: 'templates/302.html',
    controller: '302Ctrl'
  })

  .state('page49', {
    url: '/page49',
    templateUrl: 'templates/page49.html',
    controller: 'page49Ctrl'
  })

  .state('ohMyGod2', {
    url: '/page52',
    templateUrl: 'templates/ohMyGod2.html',
    controller: 'ohMyGod2Ctrl'
  })

  .state('page23', {
    url: '/page23',
    templateUrl: 'templates/page23.html',
    controller: 'page23Ctrl'
  })

  .state('page11', {
    url: '/page11',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page22', {
    url: '/page22',
    templateUrl: 'templates/page22.html',
    controller: 'page22Ctrl'
  })

  .state('page15', {
    url: '/page15',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page17', {
    url: '/page17',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('ohMyGod3', {
    url: '/page54',
    templateUrl: 'templates/ohMyGod3.html',
    controller: 'ohMyGod3Ctrl'
  })

  .state('page16', {
    url: '/page16',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

  .state('tutorial', {
    url: '/page53',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/tutorial.html',
    controller: 'tutorialCtrl'
  })

  .state('btutorial', {
    url: '/page13',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/btutorial.html',
    controller: 'btutorialCtrl'
  })

  .state('ntutorial', {
    url: '/page57',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/ntutorial.html',
    controller: 'ntutorialCtrl'
  })

  .state('stutorial', {
    url: '/page56',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/stutorial.html',
    controller: 'stutorialCtrl'
  })

  .state('tutoriale', {
    url: '/page55',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/tutoriale.html',
    controller: 'tutorialeCtrl'
  })

  .state('atutorial', {
    url: '/page58',
	params: {
		fotokey: ""		
},
    templateUrl: 'templates/atutorial.html',
    controller: 'atutorialCtrl'
  })

  .state('ctutorial', {
    url: '/page19',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/ctutorial.html',
    controller: 'ctutorialCtrl'
  })

  .state('dtutorial', {
    url: '/page24',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/dtutorial.html',
    controller: 'dtutorialCtrl'
  })

  .state('etutorial', {
    url: '/page25',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/etutorial.html',
    controller: 'etutorialCtrl'
  })

  .state('page21', {
    url: '/page21',
    templateUrl: 'templates/page21.html',
    controller: 'page21Ctrl'
  })

  .state('tabsController.page18', {
    url: '/page18',
    views: {
      'tab6': {
        templateUrl: 'templates/page18.html',
        controller: 'page18Ctrl'
      }
    }
  })

  .state('tabsController.page14', {
    url: '/page14',
    views: {
      'tab7': {
        templateUrl: 'templates/page14.html',
        controller: 'page14Ctrl'
      }
    }
  })

  .state('ftutorial', {
    url: '/page20',
	params: {
		videokey: ""		
},
    templateUrl: 'templates/ftutorial.html',
    controller: 'ftutorialCtrl'
  })

  .state('page29', {
    url: '/page29',
    templateUrl: 'templates/page29.html',
    controller: 'page29Ctrl'
  })

$urlRouterProvider.otherwise('/page1/page18')

  

});