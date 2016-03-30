import Ember from 'ember';
import PikadayMixin from 'ember-pikaday/mixins/pikaday';

export default Ember.Component.extend(PikadayMixin, {
  tagName: 'input',
  attributeBindings: ['readonly', 'disabled', 'placeholder', 'type', 'name', 'size', 'required'],
  type: 'text',

  setupElement: Ember.on('didInsertElement', function() {
    this.set('field', this.$()[0]);
  }),

  onPikadaySelect: function() {
    this.set('value', this.getSelectedDate());
  },

  autoHideOnDisabled: Ember.observer('disabled', 'pikaday', function () {
    if (this.get('disabled') && this.get('pikaday')) {
      this.get('pikaday').hide();
    }
  })
});
