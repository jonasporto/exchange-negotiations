/* Código simplório, apenas para fornecer o serviço para a aplicação */
var api = {}

var currentDate = new Date();
var previousDate = new Date();
previousDate.setDate(currentDate.getDate() - 7);
var beforeLastDate = new Date();
beforeLastDate.setDate(currentDate.getDate() - 14);

var negotiations = [
      { date : currentDate, amount : 1, value : 150},
      { date : currentDate, amount : 2, value : 250},
      { date : currentDate, amount : 3, value : 350},
      { date : previousDate, amount : 1, value : 450},
      { date : previousDate, amount : 2, value : 550},
      { date : previousDate, amount : 3, value : 650},
      { date : beforeLastDate, amount : 1, value : 750},
      { date : beforeLastDate, amount : 2, value : 950},
      { date : beforeLastDate, amount : 3, value : 950}
    ];


api.weekList = function(req, res) {
    var currentNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date > previousDate;
    });
    res.json(currentNegotiations);
};

api.previousList = function(req, res) {
   
   var previousNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date < currentDate && negotiation.date > beforeLastDate;
    });
	setTimeout(function() {
		res.json(previousNegotiations);	
	}, 500);
    
};

api.beforeLastList = function(req, res) {

   var beforeLastNegotiations = negotiations.filter(function(negotiation) {
        return negotiation.date < previousDate;
    });
    res.json(beforeLastNegotiations);
    
};

api.addNegotiation = function(req, res) {

   console.log(req.body);
   req.body.data = new Date(req.body.data.replace(/-/g,'/'));
   negotiations.push(req.body);
   res.status(200).json("Negociação recebida");
};



module.exports = api;