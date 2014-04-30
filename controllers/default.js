exports.install = function(framework) {
	framework.route('/', view_homepage);
};

// Read all users
function view_homepage() {
	var self = this;
	self.view('homepage');
}