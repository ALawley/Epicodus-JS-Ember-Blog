import Ember from 'ember';

export default Ember.Component.extend({
  addNewComment: false,
  actions: {
    commentFormShow() {
      this.set('addNewComment', true);
    },

    commentSave1() {
      var params = {
        user:this.get('user') ? this.get('user') : "",
        body:this.get('body') ? this.get('body') : "",
        post:this.get('post')
      };
      this.set('addNewComment', false);
      this.sendAction('commentSave2', params);
    }
  }
});
