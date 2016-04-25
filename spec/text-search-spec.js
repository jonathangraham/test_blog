describe('Text Search', function() {
  jasmine.getFixtures().fixturesPath = 'spec/fixtures';
  beforeEach(function() {
    loadFixtures('bloglist.html');
    spyOn($.fn, 'fadeOut').and.callFake(function() {
      $(this).hide();
    });
  });
  it('has blog-posts', function() {
    expect($('.blog-post', 'li').length).toBe(3);
  });
  it('filters the posts based on a search term', function() {
    var hiddenBlogPost = $('.blog-post', 'li')[0];
    var visibleBlogPost = $('.blog-post', 'li')[1];
    $('#filter').val('Stephen');
    $('#filter').keyup();
    expect($(hiddenBlogPost).css('display')).toBe('none');
    expect($(visibleBlogPost).css('display')).toBe('block');
  });
});
