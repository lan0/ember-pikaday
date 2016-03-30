import Ember from 'ember';

export default Ember.Controller.extend({
  startDate: new Date(),
  selectedDate: null,
  actions: {
    clearStartDate: function() {
      this.set('startDate', null);
    },
    dateChanged: function(date) {
      this.set('selectedDate', date);
    },
  }
});
