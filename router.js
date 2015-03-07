EmailClone.Router.map(function() {
	this.resource('emails', {path: '/'});
    this.resource('compose');
	this.resource('email', {path: ':email_id'});
});