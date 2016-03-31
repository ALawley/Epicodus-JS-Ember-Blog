import Ember from 'ember';

export default Ember.Component.extend({
  filteredList: Ember.computed.filter('sortedPosts', function(post, index, array) {
    return index < 5;
  }),
  sortedPosts: Ember.computed.sort('posts','sorting'),
  sorting: ['id:desc']
});
