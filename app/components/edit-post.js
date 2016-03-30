import Ember from 'ember';

export default Ember.Component.extend({
  editPostForm: false,
  actions: {
    editPostForm() {
      this.set('editPostForm', true);
    },
    update(post) {
      var params = {
        title:this.get('title'),
        body:this.get('body'),
        image:this.get('image'),
      };
      this.set('editPostForm', false);
      this.sendAction('edit', post, params);
    }
  }
});
