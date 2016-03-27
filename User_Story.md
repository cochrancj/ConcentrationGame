------Concentration Game User Story------

As a user, I want to click on tiles and pick matches to win the game. I expect the cards to flip like they do in real life, and I would like hints if I take too long in between guesses. I also want to see the matches at the beginning of each round briefly so I have somewhere to start. It would also be nice if I could pick the cards I'm looking for. I want to use a finished-feeling project and want to interact with a site that moves smoothly and looks slick and finished.







=====================================================
=====================================================
SCRATCH
=====================================================
=====================================================

var owls1 = [
  <img src="https://s-media-cache-ak0.pinimg.com/736x/c0/32/38/c03238eb743c9ae69e9ee46186bb0a9c.jpg">,
  <img src="https://i.ytimg.com/vi/_RBNpALibqo/maxresdefault.jpg">,
  <img src="http://cdn.earthporm.com/wp-content/uploads/2014/11/rescued-blind-owl-zeus-6.jpg">,
  <img src="http://devpress.com/demo/quiescent/files/2012/08/owl-50267-1200x900.jpg">,
  <img src="https://i.ytimg.com/vi/wHEIo9BA2xk/hqdefault.jpg">,
  <img src="http://images4.fanpop.com/image/photos/24100000/Owls-by-K-Chin-owls-24143387-1040-780.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/236x/f1/d5/89/f1d589af7d4a826d4bba335dcca53bdd.jpg">,
  <img src="http://images.freecreatives.com/wp-content/uploads/2016/03/White-Owl-Wallpaper.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/236x/09/21/30/0921305f1e77e2cf5cc0fe9bef14a3c7.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/736x/41/ee/b0/41eeb028e4e2d0de3b9491a85fe6a18e.jpg">,
  <img src="http://img03.deviantart.net/d934/i/2015/113/6/a/hipster_owl___design_by_pinkplaidrobot-d5sziv6.png">,
  <img src="https://img1.etsystatic.com/119/0/6777245/il_214x170.866544037_rsg2.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/736x/64/d8/f3/64d8f379797be684956b2bbeb9f70c53.jpg">,
  <img src="https://01.img.society6.com/society6/img/ZNhOjP8Tc9B0re-oLYqEV3ATZj0/w_700/artwork/~artwork/s6-0015/a/5309406_10519178/~~/hipster-owl-qv4-prints.jpg">,
  <img src="http://buffawhat.com/wp-content/uploads/2009/10/owlplainLG.jpg">,
  <img src="http://1.bp.blogspot.com/-9dDDzBIiJJY/UwFI6wbKToI/AAAAAAAAA6E/jsmtYQH0yuE/s1600/hipster+owl.png">,
  <img src="https://img0.etsystatic.com/000/1/6108708/il_fullxfull.332381716.jpg">,
  <img src="https://image.spreadshirtmedia.com/image-server/v1/designs/12385989,width=178,height=178,version=1370380347/Owl---Cosmic---Triangle---Hipster---Cool---Space.png">,
  <img src="http://25.media.tumblr.com/tumblr_ljgc6jW5h11qfvobbo1_400.jpg">,
  <img src="http://img.memecdn.com/hipster-owl_o_388926.jpg">,
  <img src="http://www.birdsandblooms.com/wp-content/uploads/2011/11/Archimedes_SwordintheStone-300x300.jpg">,
  <img src="http://17rg073sukbm1lmjk9jrehb643.wpengine.netdna-cdn.com/wp-content/uploads/2014/11/OwlSleeping.png">,
  <img src="http://www.bibliotekawszkole.pl/inne/gazetki/gazetki020_r25.gif">,
  <img src="https://s-media-cache-ak0.pinimg.com/736x/df/b7/ef/dfb7ef6d5a67980a6f9a99e9b71d721a.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/236x/f6/e6/6b/f6e66b9d2bff79bd3198da96fe912714.jpg">
]

var heroes1 = [
  <img src="http://www.writeups.org/img/inset/Magneto_AA_h1.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/236x/72/ea/2f/72ea2f544ec20608a3b77cd06840d707.jpg">,
  <img src="http://www.adherents.com/lit/comics/img/s/Sage.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/736x/52/1d/5e/521d5e88e7336e95d19b681be8c35583.jpg">,
  <img src="http://www.popculturemonster.com/wp-content/uploads/2011/11/X-Men-Jubilee.jpg">,
  <img src="http://www.craveonline.com/images/stories/2011/comics/xmengambit658.jpg">,
  <img src="http://images-cdn.moviepilot.com/images/c_fill,h_566,w_395/t_mp_quality/xt7u6tvu0bkwdcth41cj/the-x-files-1-storm-510612.jpg">,
  <img src="http://static.comicvine.com/uploads/original/11/117763/3024871-avengers+vs.+x-men+%2311+-+page+6.jpg">,
  <img src="http://www.sohood.com/ps/xmenstill.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/236x/50/af/60/50af600c5b032af910a614d00ffa997d.jpg">,
  <img src="http://images.vcpost.com/data/images/full/45699/deadpool.jpeg">,
  <img src="http://unisci24.com/data_images/wlls/54/356609-venom.jpg">,
  <img src="http://www.disneyclips.com/imagesnewb6/images/nov22.gif">,
  <img src="https://gothamnewsstand.files.wordpress.com/2014/07/hobgoblin.jpg">,
  <img src="http://screenrant.com/wp-content/uploads/punisher.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/236x/78/30/1e/78301e48c8c6a958a892c356cc335406.jpg">,
  <img src="http://static.comicvine.com/uploads/original/11114/111144314/3634877-beastly-men-x-men-beast-35356573-260-295.jpg">,
  <img src="http://www.logoeps.com/wp-content/uploads/2013/05/thor-cartoon-vector.png">,
  <img src="http://weknowyourdreamz.com/images/captain-america/captain-america-01.jpg">,
  <img src="http://static.comicvine.com/uploads/original/2/23732/1537840-iron_man_color_by_patokali.jpg">,
  <img src="https://upload.wikimedia.org/wikipedia/en/6/6a/Hulk_(comics)_Character_Image.jpg">,
  <img src="https://s-media-cache-ak0.pinimg.com/736x/e9/1f/a7/e91fa769b8b415666c53acdc05a31a72.jpg">,
  <img src="http://static.comicvine.com/uploads/original/12/128686/2631637-1351928_93251_43434_blade_super.jpg">,
  <img src="http://images-cdn.moviepilot.com/images/c_fill,h_1099,w_727/t_mp_quality/edajbulzffmvjn4jqtva/who-do-you-think-would-make-the-best-ghost-rider-442710.jpg">,
  <img src="http://www.fightersgeneration.com/np5/more/doom-mvc3.jpg">
]
