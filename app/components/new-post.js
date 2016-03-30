import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        title:this.get('title') ? this.get('title') : "",
        body:this.get('body') ? this.get('body') : "",
        image:this.get('image') ? this.get('image') : "",
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
