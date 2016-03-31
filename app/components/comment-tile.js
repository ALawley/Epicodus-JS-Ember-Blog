import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    edit(comment, params) {
      this.sendAction('edit', comment, params);
    },
    delete(comment) {
      this.sendAction('deleteComment', comment);
    }
  }
});
