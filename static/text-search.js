function Filter(form, element) {
    this.form = form
    this.element = element
};
Filter.prototype.bindSearch = function() {
    this.form.submit( function(e) {
        e.preventDefault();
    });
    this.element.keyup(function(){
      var filter = $(this).val();
      $(".blog-post", "li").each(function(){
       if ($(this).text().search(new RegExp(filter, "i")) < 0) {
         $(this).fadeOut();
       } else {
         $(this).show();
       }
     });
   });
};
