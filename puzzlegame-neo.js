enchant();
window.onload = function(){
	var game = new Game(320,320);
	game.fps = 16;
	game.preload('material.png','BG.png','fire.png','OUT.png','foolmaterial.png');
	var num;
	game.score = 0;
	var material;
	game.onload = function(){
		//マップの生成
		var map = new Map(24, 24);
		map.x = 89;
		map.y = 5;
	  map.image = game.assets['material.png'];//5=空白
    map.loadData([
    		[1,2,0,0,5,1],
    		[1,2,3,4,5,0],
    		[0,0,0,0,3,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,1,1,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		[0,0,0,0,0,0],
    		]);
    map._element.style.zIndex = 350;
    game.rootScene.addChild(map);
    
    //ラベルの作成
    var label = new Label("");
    game.rootScene.addChild(label);
    //危険マーク
    out = new Sprite(48,24);
    out.image = game.assets['OUT.png'];
    out.x     = 136;
    game.rootScene.addChild(out);
    out._element.style.zIndex = 400;
    //materialの生成
    material = new Sprite(24,24);
    material.image = game.assets['foolmaterial.png'];
    material.x     = 160
    material.y     = 90;
    material.frame = num = Math.floor(Math.random() *5);
    ;//※foolmaterialは0が赤material
    material._element.style.zIndex = 900;
    game.rootScene.addChild(material);
    //背景画像の生成
    var BG = new Sprite(320,320);
    BG.image = game.assets['BG.png'];
    BG.x     = 0;
    BG.y     = 0;
    BG.frame = 0;
    game.rootScene.addChild(BG);
    BG._element.style.zIndex = 0;
    
    //ゲーム開始
    
    
  };
game.start();
};