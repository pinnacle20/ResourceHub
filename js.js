$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".test");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().height < pageBottom) {
        $(tag).addClass("tag");
      } else {
        $(tag).removeClass("tag");
      }
    }
  }
);

// const observer = new IntersectionObserver(entries=> {
//     entries.forEach(entry=>{
//         if(entry.isIntersecting){
//             document.querySelector(".animated")[0].classlist.add("fadeUp");
//         }
//     })
// })
// observer.observe(document.querySelector(".image"));