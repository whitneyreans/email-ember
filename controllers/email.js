EmailClone.EmailController = Ember.ObjectController.extend({
	actions: {
      delete: function() {
            this.get('model').destroyRecord();
            this.transitiontoRoute('emails');
      }
    }

});