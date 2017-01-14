angular.module('app.controllers', [])
  
.controller('page2Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;

    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_date || $scope.params.favorite_moment){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
 

}])
   
.controller('page3Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_sentence || $scope.params.favorite_all){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    


}])
   
.controller('page4Ctrl', ['$scope', '$stateParams', 'Children', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Children) {
    
    $scope.params = $stateParams;
    
    $scope.children = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.lista_completa || $scope.params.titoli_completi || $scope.params.complete_sentenze){
            Children.query($scope.params).then(function(res){
                $scope.children = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Children.all().then(function(res){
                $scope.children = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
      
.controller('side-menu21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('page5Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_date || $scope.params.favorite_moment){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
 

}])
   
.controller('page50Ctrl', ['$scope', '$stateParams', 'Messages', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Messages, $ionicPopup) {

    $scope.data = {
        nome_cond: '',
        condivisione: ''
     
        
    
    }
    
    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        Messages.add($scope.data).then(function(){
            $scope.data = {
                nome_cond: '',
                condivisione: ''
            
               
            }
            $scope.submitting = false;
            
            $ionicPopup.alert({
                title: '謝謝您!',
                template: '我們收到了您的資料.'
            });
            
        })
    }


}])
   
.controller('page31Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {


    $scope.params = $stateParams;

    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_date || $scope.params.favorite_moment){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();

}])
   
.controller('page6Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    
    
    $scope.params = $stateParams;

    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.come_pregare0 || $scope.params.latest_news || $scope.params.news || $scope.params.time || $scope.params.year){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    


}])
   
.controller('30Ctrl', ['$scope', '$stateParams', 'Atutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Atutorials) {
  
  $scope.narrowed_atutorials = Atutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_atutorials = Atutorials.list;
          return;
      }
      
      $scope.narrowed_atutorials = Atutorials.list.filter(function(atutorial){
        if (atutorial.name.toLowerCase().indexOf(s) > -1 || atutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('ohMyGodCtrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('page30Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('page26Ctrl', ['$scope', '$stateParams', 'Bambino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Bambino) {
    
    $scope.params = $stateParams;
    
    $scope.bambinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Bambino.query($scope.params).then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Bambino.all().then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('page27Ctrl', ['$scope', '$stateParams', 'Bambino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Bambino) {
    
    $scope.params = $stateParams;
    
    $scope.bambinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Bambino.query($scope.params).then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Bambino.all().then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('page28Ctrl', ['$scope', '$stateParams', 'Bambino', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Bambino) {
    
    $scope.params = $stateParams;
    
    $scope.bambinos = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Bambino.query($scope.params).then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Bambino.all().then(function(res){
                $scope.bambinos = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('page48Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.favorite_name || $scope.params.latest_video){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();


}])
   
.controller('302Ctrl', ['$scope', '$stateParams', 'Messages', '$ionicPopup', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Messages, $ionicPopup) {

    $scope.data = {
        
        nome_voto: '',
        voto: ''
        
    
    }
    
    $scope.submitting = false;
    
    $scope.submit = function(){
        $scope.submitting = true;
        Messages.add($scope.data).then(function(){
            $scope.data = {
                nome_voto: '',
                voto: ''
               
            }
            $scope.submitting = false;
            
            $ionicPopup.alert({
                title: '謝謝您!',
                template: '我們收到了您的資料.'
            });
            
        })
    }

}])
   
.controller('page49Ctrl', ['$scope', '$stateParams', 'Survey', 'Children', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey, Children) {
    
    $scope.params = $stateParams;
    
    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.news || $scope.params.time){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
 

}])
   
.controller('ohMyGod2Ctrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {
  
  $scope.narrowed_tutorials = Tutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_tutorials = Tutorials.list;
          return;
      }
      
      $scope.narrowed_tutorials = Tutorials.list.filter(function(tutorial){
        if (tutorial.name.toLowerCase().indexOf(s) > -1 || tutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page23Ctrl', ['$scope', '$stateParams', 'Etutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Etutorials) {
  
  $scope.narrowed_etutorials = Etutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_etutorials = Etutorials.list;
          return;
      }
      
      $scope.narrowed_etutorials = Etutorials.list.filter(function(etutorial){
        if (etutorial.name.toLowerCase().indexOf(s) > -1 || etutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page11Ctrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {
  
  $scope.narrowed_btutorials = Btutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_btutorials = Btutorials.list;
          return;
      }
      
      $scope.narrowed_btutorials = Btutorials.list.filter(function(btutorial){
        if (btutorial.name.toLowerCase().indexOf(s) > -1 || btutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page22Ctrl', ['$scope', '$stateParams', 'Dtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dtutorials) {
  
  $scope.narrowed_dtutorials = Dtutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_dtutorials = Dtutorials.list;
          return;
      }
      
      $scope.narrowed_dtutorials = Dtutorials.list.filter(function(dtutorial){
        if (dtutorial.name.toLowerCase().indexOf(s) > -1 || dtutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page15Ctrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {
  
  $scope.narrowed_ctutorials = Ctutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_ctutorials = Ctutorials.list;
          return;
      }
      
      $scope.narrowed_ctutorials = Ctutorials.list.filter(function(ctutorial){
        if (ctutorial.name.toLowerCase().indexOf(s) > -1 || ctutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page17Ctrl', ['$scope', '$stateParams', 'Ntutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ntutorials) {
  
  $scope.narrowed_ntutorials = Ntutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_ntutorials = Ntutorials.list;
          return;
      }
      
      $scope.narrowed_ntutorials = Ntutorials.list.filter(function(ntutorial){
        if (ntutorial.name.toLowerCase().indexOf(s) > -1 || ntutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('ohMyGod3Ctrl', ['$scope', '$stateParams', 'Tutoriales', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutoriales) {
  
  $scope.narrowed_tutoriales = Tutoriales.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_tutoriales = Tutoriales.list;
          return;
      }
      
      $scope.narrowed_tutoriales = Tutoriales.list.filter(function(tutoriale){
        if (tutoriale.name.toLowerCase().indexOf(s) > -1 || tutoriale.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('page16Ctrl', ['$scope', '$stateParams', 'Stutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Stutorials) {
  
  $scope.narrowed_stutorials = Stutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_stutorials = Stutorials.list;
          return;
      }
      
      $scope.narrowed_stutorials = Stutorials.list.filter(function(stutorial){
        if (stutorial.name.toLowerCase().indexOf(s) > -1 || stutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }

}])
   
.controller('tutorialCtrl', ['$scope', '$stateParams', 'Tutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutorials) {

    $scope.video = Tutorials.keys[$stateParams.videokey];

}])
   
.controller('btutorialCtrl', ['$scope', '$stateParams', 'Btutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Btutorials) {

    $scope.video = Btutorials.keys[$stateParams.videokey];

}])
   
.controller('ntutorialCtrl', ['$scope', '$stateParams', 'Ntutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ntutorials) {

    $scope.video = Ntutorials.keys[$stateParams.videokey];

}])
   
.controller('stutorialCtrl', ['$scope', '$stateParams', 'Stutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Stutorials) {

    $scope.video = Stutorials.keys[$stateParams.videokey];

}])
   
.controller('tutorialeCtrl', ['$scope', '$stateParams', 'Tutoriales', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Tutoriales) {

    $scope.video = Tutoriales.keys[$stateParams.videokey];

}])
   
.controller('atutorialCtrl', ['$scope', '$stateParams', 'Atutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Atutorials) {

    $scope.foto = Atutorials.keys[$stateParams.fotokey];

}])
   
.controller('ctutorialCtrl', ['$scope', '$stateParams', 'Ctutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ctutorials) {

    $scope.video = Ctutorials.keys[$stateParams.videokey];

}])
   
.controller('dtutorialCtrl', ['$scope', '$stateParams', 'Dtutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Dtutorials) {

    $scope.video = Dtutorials.keys[$stateParams.videokey];

}])
   
.controller('etutorialCtrl', ['$scope', '$stateParams', 'Etutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Etutorials) {

    $scope.video = Etutorials.keys[$stateParams.videokey];

}])
   
.controller('page21Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

$scope.showContent = false;

}])
   
.controller('page18Ctrl', ['$scope', '$stateParams', 'Survey', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Survey) {
    
    $scope.params = $stateParams;

    $scope.surveys = [];
    
    $scope.loadData = function(){
        
        if ($scope.params.name || $scope.params.favorite_date || $scope.params.favorite_moment){
            Survey.query($scope.params).then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }else{
            Survey.all().then(function(res){
                $scope.surveys = res;
                $scope.$broadcast('scroll.refreshComplete');
            })
        }
        
    }

    $scope.loadData();
    
 

}])
   
.controller('page14Ctrl', ['$scope', '$stateParams', 'Ftutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ftutorials) {
  
  
  
  
  $scope.narrowed_ftutorials = Ftutorials.list;
  $scope.data = {
      search: ''
  }
  
  $scope.search = function(){
      
      var s = $scope.data.search.toLowerCase();
      
      if (s == ''){
          $scope.narrowed_ftutorials = Ftutorials.list;
          return;
      }
      
      $scope.narrowed_ftutorials = Ftutorials.list.filter(function(ftutorial){
        if (ftutorial.name.toLowerCase().indexOf(s) > -1 || ftutorial.description.toLowerCase().indexOf(s) > -1){
            return true;
        } 
        return false;
      });
  }
  
  
  
   $scope.pictures = [
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData4.png?alt=media&token=68834e84-6e03-4a51-87da-d4e8742cec89',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData1.png?alt=media&token=da8d92c5-7959-425e-ac42-91bb7b49eb9c',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData2.png?alt=media&token=2c039395-ffd2-4157-99a2-6e4f5278f3fd',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData3.png?alt=media&token=3844f640-1736-48d7-ab6e-0ef9338f5b77'
        
        
        ];
  

}])
   
.controller('ftutorialCtrl', ['$scope', '$stateParams', 'Ftutorials', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, Ftutorials) {

    $scope.video = Ftutorials.keys[$stateParams.videokey];

}])
   
.controller('page29Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
  
  
  
  
  
  
  
   $scope.pictures = [
       'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData4.png?alt=media&token=68834e84-6e03-4a51-87da-d4e8742cec89',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData1.png?alt=media&token=da8d92c5-7959-425e-ac42-91bb7b49eb9c',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData2.png?alt=media&token=2c039395-ffd2-4157-99a2-6e4f5278f3fd',
        'https://firebasestorage.googleapis.com/v0/b/defino-7d09f.appspot.com/o/RicciCastiglione%2FData3.png?alt=media&token=3844f640-1736-48d7-ab6e-0ef9338f5b77'
        
         
        ];
  

}])
 