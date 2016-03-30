import Ember from 'ember';
import PikadayMixin from 'ember-pikaday/mixins/pikaday';
import layout from '../templates/components/pikaday-inputless';

export default Ember.Component.extend(PikadayMixin, {
  layout,

  setupElement: Ember.on('didInsertElement', function() {
    this.set('pikadayContainer', this.$('.ember-pikaday-container')[0]);
    this.set('field', this.$('.ember-pikaday-input')[0]);
  }),

  onPikadaySelect(date) {
    this.sendAction('dateChanged', date);
  },
});
