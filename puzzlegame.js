//方向指定
var DIR_LEFT = 0;
var DIR_RIGHT = 1;
var DIR_UP   = 2;
var DIR_DOWN = 3;
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
		map.x = 91;
		map.y = -2;
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
    	[5,5,5,5,5,5],
    	[5,5,5,5,5,5],
    	[5,1,2,5,4,5],
    	[1,2,3,5,3,4],
    	[1,2,3,5,3,4],
    	[1,2,3,5,3,4]
    ]);
    map.collisionData = [
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[0,0,0,0,0,0],
    	[1,1,1,1,1,1],
    	[1,1,1,1,1,1],
    	[1,1,1,1,1,1],
    	[1,1,1,1,1,1],
    	[1,1,1,1,1,1],
    	[1,1,1,1,1,1],
    	[1,1,1,1,1,1],
    	[1,1,1,1,1,1],
    	[1,1,1,1,1,1],
    	[0,0,1,1,0,0]
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
    out._element.style.zIndex = 300;
    
    game.addentity = function(){
    	var entity = new Entity();
    	entity.widht = 320;
    	entity.height= 320;
    	entity.x     = 160;
    	entity.y     = 160;
    	entity.backgroundColor = "red";
    	entity._element.style.zIndex = 10000;
    	game.rootScene.addChild(entity);
    	}
      
		//
		game.addmaterial = function(){
			var material = new Sprite(23, 23);
			material.image = game.assets['material.png'];
			material.x = 160 ;
			material.y = 0;
			material.frame = Math.floor(Math.random() *5);
			material.speed = 3;
			material.DIR_DOWN;
			material._element.style.zIndex = 900;
			game.rootScene.addChild(material);
			
			
			//定期処理
			
			material.addEventListener(Event.ENTER_FRAME, function(){
				material.y += material.speed;
				if (game.input.right){
					material.x += 23;
					};
				if (game.input.left){
					material.x -= 23;
					}
				if (game.input.up){
					material.y =  0
					}
				if (game.input.down){
					material.y +=  23
					}
					material._element.style.zIndex = 350
				  
			});
		};
    
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
  	if(material_flag == false){
  		game.addmaterial();
  		
  		
  		}
  	}
  });
	game.start();
	
};