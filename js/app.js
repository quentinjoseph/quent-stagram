
var vueApp = new Vue({
  el:'#vue-app',
  data:{
    hello: 'hi'
  }
})
   var feed = new Instafeed({
          get: 'user',
          userId: '18952707',
          accessToken: '18952707.f5f7a48.9990621ae4c84099994ead1973e0342f',
          filter:function(image){
            if (image.type == 'image'){
            return image;
             }
          },
          resolution:'low_resolution',
          template:
            '<div class=" thumbs"><a class="instagram_thumbnails" href="{{model.images.standard_resolution.url}}" data-featherlight="image"><img src="{{image}}" height="270" width="270"/></a></div>'

      });
      feed.run();
