enchant();
window.onload = function(){
	var game = new Game(320,320);
	game.fps = 16;
	game.preload('material.png','BG.png','fire.png','OUT.png');
	game.score = 0;
	var material;
	game.onload = function(){
		//マップの生成
		var map = new Map(23, 23);
		map.x = 92;
		map.y = 19;
	  map.image = game.assets['material.png'];//6=空白
    map.loadData([
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[1,2,3,4,0,1],
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,5,4,5,5,5]
    ]);
    map.collisionData = [
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[1,2,3,4,0,1],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,1,0,0,0]
    ];
    map._element.style.zIndex = 350;
    game.rootScene.addChild(map);
    
    //ラベルの作成
    var label = new Label("");
    game.rootScene.addChild(label);
    //危険マーク
    out = new Sprite(46,23);
    out.image = game.assets['OUT.png'];
    out.x     = 136;
    game.rootScene.addChild(out);
    out._element.style.zIndex = 400;

		//
		game.addmaterial = function(){
			var material = new Sprite(23, 23);
			material.image = game.assets['material.png'];
			material.x = 160 ;
			material.y = 30;
			material.frame = Math.floor(Math.random() *5);
			material.speed = 2;
			material._element.style.zIndex = 900;
			game.rootScene.addChild(material);
			//定期処理
			material.addEventListener(Event.ENTER_FRAME, function(){
				material.y += material.speed;
				
				
			});
		};


    /*materialの生成
    material = new Sprite(23,23);
    material.image = game.assets['material.png'];
    material.x     = 160;
    material.y     = 30;
    material.frame = num = Math.floor(Math.random() *5);
        
    //※foolmaterialは0が赤material
		//material._element.style.zIndex = 900;
    //game.rootScene.addChild(material);*/
		
    
    
    //背景画像の生成
    var BG = new Sprite(320,320);
    BG.image = game.assets['BG.png'];
    BG.x     = 0;
    BG.y     = 0;
    BG.frame = 0;
    game.rootScene.addChild(BG);
    BG._element.style.zIndex = 0;
	};
	var material_flag = true;
  game.rootScene.addEventListener(Event.ENTER_FRAME, function(){
  	if(material_flag == true){
  		game.addmaterial();
  		material_flag = false;
  	}
  });
	game.start();
};