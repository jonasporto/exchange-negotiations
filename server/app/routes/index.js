/* ad-hoc code to supply a web service to the front end application */

var api = require('../api');

module.exports  = function(app) {
    
    app.route('/negotiations/week')
        .get(api.weekList);
        
    app.route('/negotiations/previous')
        .get(api.previousList);
        
    app.route('/negotiations/before-last')
        .get(api.beforeLastList);  
        
    app.route('/negotiations')
        .post(api.addNegotiation);          
};