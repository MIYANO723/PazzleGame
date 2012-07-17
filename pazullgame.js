enchant();
window.onload = function(){
	  var game = new Game(320,320);
	  game.fps = 16;
	  game.preload('puzzle.png','fire.png');
	  game.score = 0;
	  var label;
	  var material;
    game.onload = function(){
     //背景の生成
     var bg = new Sprite(320, 320);
     bg.backgroundColor = "#87CEEB";
     var image = new Surface(320,320);
     for (var i = 0;i<320; i += 16) {
        image.draw(game.assets["fire.png"], 7 * 16, 0, 16, 16, i, 320 - 16, 16, 16);
     };
   //パッドの生成
   var pad = new Pad();
   pad.x   = 220;
   pad.y   = 220;
   game.rootScene.addChild(pad);
   //ブロックの生成
   var fall_flage = true;
	 game.addBlock = function(x){
		 var material = new Sprite(24, 24)
		 material.image = game.assets['puzzle.png'];
		 material.x = x;
		 material.y = -16;
		 material.frame = 8;
		 material.speed = 5;
  	 game.rootScene.addChild(material);	   
			material.tick =0;
   		material.addEventListener(Event.ENTER_FRAME,function(){
      //左
	   if (game.input.left){
	       material.x = 3;
	       material.scaleX = -53;
	   	}
	    //右
	   else if (game.input.right){
	       material.x += 3;
	       material.scaleX = 53;
	   }
		   //フレームの指定
		   material.tick++;
		   if (!game.input.left && !game.input.right) {
		        material.frame = material.anim[0];
		   } else {
		       material.frame = material.anim[material.tick % 4];
		   }
	   });
  
   };
  };
     //ゲーム開始
   game.start();
};

}