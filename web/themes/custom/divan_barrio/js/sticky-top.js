(function ($, Drupal, settings) {

  "use strict";

  Drupal.behaviors.StickyNav = {
    attach: function (context) {
          window.addEventListener("scroll", function(){
              let menuArea = this.document.getElementById('navbar-main');

              if(window.pageYOffset > 80){
                  menuArea.classList.add("sticky");
              }else{
                  menuArea.classList.remove("sticky");
              }
          });
    }
  }
  Drupal.behaviors.StickyBlockSearch = {
      attach: function (context) {
            window.addEventListener("scroll", function(){
                let menuArea = this.document.getElementById('block-test-barrio-search');

                if(window.pageYOffset > 150){
                    menuArea.classList.add("sticky-block-search");
                }else{
                    menuArea.classList.remove("sticky-block-search");
                }
            });
      }
    }
})(jQuery, Drupal, drupalSettings);