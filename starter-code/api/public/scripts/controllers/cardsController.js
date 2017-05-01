angular.module('CardsAgainstAssembly')
  .controller('CardsController', CardsController);


CardsController.inject = ['$http'];
function CardsController($http){
  var context = this;
  context.all = [];
  context.getCards = getCards;
  context.addCard = addCard;
  context.newCard = {};
  context.deleteCard = deleteCard;


    getCards();
    function getCards(){
      $http
      .get('http://localhost:3000/cards')
      .then(function(response){
        context.all = response.data;
        console.log(context.all);
      });
    }


    function addCard(){
      $http
      .post('http://localhost:3000/cards', context.newCard)
      .then(function(response){
        getCards();
      });
    context.newCard = {};
    }


    function deleteCard(id){
      $http
      .delete('http://localhost:3000/cards/' + id)
      .then(function(response){
        getCards();
      });
    }



}
