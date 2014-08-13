var sitesApp = angular.module('sitesApp', []);

sitesApp.controller('siteListCtrl', function ($scope) {   
  $scope.textbox = "";
  $scope.siteName="http://www.korotkin.co.il";
  $scope.addSite = function(){
      var IFelement = document.getElementById("myIFrame"); 
      var urlElement=document.getElementById("url");
      IFelement.setAttribute("src", urlElement.value); 
      var isExsist = false;
       for (i = 0; i < $scope.sites.length; i++) 
      {
          if($scope.sites[i].name==$scope.siteName)
              isExsist = true;
       }
        if(!isExsist)
        {
             var o = {
            'name': $scope.siteName,
            'Reply': []     
             };  
             $scope.sites.push(o);
        }
      
      $scope.textbox='';    
  };
          
 $scope.addReply = function(){
       var o = {
        'rep' : $scope.textbox    
      };
     var index = $scope.siteName;
     for (i = 0; i < $scope.sites.length; i++) 
      {
          if($scope.sites[i].name==index){
              $scope.sites[i].Reply.push(o);
          }
      }
     $scope.textbox='';            
  };
                           
                                                 
   
$scope.sites = [
      {'name': 'http://www.korotkin.co.il',
       'Reply': [] }
  ];
});

