import Ember from 'ember';

export default Ember.Component.extend({
  editCommentForm: false,
  actions: {
    editCommentForm() {
      this.set('editCommentForm', true);
    },
    update(comment) {
      var params = {
        user:this.get('user'),
        body:this.get('body'),
        post:this.get('post')
      };
      this.set('editCommentForm', false);
      this.sendAction('edit', comment, params);
    }
  }
});
