var path = require('path');

exports.install = function(framework) {
	framework.route('/document/', connexion,['post']);
	framework.route('/document/',view_homepage,['authorize']);
    framework.route('/document/{voyage}/{link}', view_detail,['authorize']);    
    framework.file('*.pdf', file_download,['authorize']);
};
 
// document list ( after connexion )
function view_homepage() {
    var self = this;
    self.model('document').find(function(err,docs){
	    self.view('index',docs);
    });
}

// document list first connexion 
function connexion() {
    var self = this;
    if (self.post.Identifiant=='ident' && self.post.MotDePasse=='mdp' ){
    	self.res.cookie('cookie-user', self.framework.encrypt({ id: '1' }, 'cle-pour-decrypt'), new Date().add('m', 5));	
	    self.model('document').find(function(err,docs){
			self.view('index',docs);
		});
    } else { self.redirect('/'); }
}

// show the detail of a document
function view_detail(voyage,link) {
	var self = this;
	self.model('document').find({'link' : link, 'voyage' : voyage },function(err,result) {
		  self.view('detail', result[0]);
	});
}

// download pdf file 
function file_download(req, res, isValidation) {      
    var filename = path.basename(req.url);
    this.responseFile(req, res, this.path.public(filename),filename);
}