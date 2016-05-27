var gameWidth = 480;
var gameHeight = 480;

var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(gameWidth, gameHeight, {backgroundColor: 0xA1DBB2});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var world, player;

var movNone = 0;
var movLeft = 1;
var movRight = 2;

var gameStarted = false;

function move() {
  if(!gameStarted) return;
  if(player.direction == movNone) {
    player.moving = false;
    return;
  }
  player.moving = true;

  if(player.direction == movLeft && player.position.x >0) {
    createjs.Tween.get(player).to({x: player.x - 64}, 300).call(move);
  }
  if(player.direction == movRight){
    createjs.Tween.get(player).to({x: player.x + 64}, 300).call(move);
  }
}

document.addEventListener('keydown', keydownEventHandler);

function keydownEventHandler(e) {
  e.preventDefault();
  if (!player) return;
  if(player.moving) return;
  if(e.repeat == true) return;

  player.direction = movNone;

  if(e.keyCode == 65) player.direction = movLeft;
  else if(e.keyCode == 68) player.direction = movRight;

  move();
}

document.addEventListener("keyup", keyupEventHandler);

function keyupEventHandler(e){
  e.preventDefault();
  if(!player) return;
  player.direction = movNone;
}

PIXI.loader
  .add('map_json', 'map.json')
  .add('tileset', 'tileset.png')
  .add('bird', 'bird.png')
  .add('assets.json')
  .add('tweet.mp3')
  .add('Blip_Select4.mp3')
  .load(ready);

var birdsFoundAmount=0;

function ready() {
  var tu = new TileUtilities(PIXI);
  world = tu.makeTiledWorld("map_json", "tileset.png");
  stage.addChild(world);

  tweet = PIXI.audioManager.getAudio("tweet.mp3");
  blip = PIXI.audioManager.getAudio("Blip_Select4.mp3");

//adding foliage in set locations..
  var tree = new PIXI.Sprite(PIXI.Texture.fromFrame("tree1.png"));
  tree.position.set(0,0);
  tree.scale.set(1.3);

  var cactus = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus.position.set(0,250);

  var cactus2 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus2.png"));
  cactus2.position.set(660,240);

  var cactus3 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus3.position.set(130,225);

  var cactus4 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus2.png"));
  cactus4.position.set(330,240);

  var tree2 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree2.position.set(800,-50);

  var tree3 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree3.position.set(430,-80);

  var tree4 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree4.position.set(470,-30);

  var tree5 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree5.position.set(550,-50);

  var tree6 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree6.position.set(0,-50);

  var cactus5 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus2.png"));
  cactus5.position.set(450,240);

  var tree7 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree1.png"));
  tree7.position.set(500,0);
  tree7.scale.set(1.3);

  var cactus6 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus6.position.set(820,240);

  var cactus7 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus7.position.set(930,230);

  var tree8 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree1.png"));
  tree8.position.set(945,0);
  tree8.scale.set(1.3);

  var tree9 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree9.position.set(1025,375);
  tree9.rotation = -1.4;

  var tree10 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree1.png"));
  tree10.position.set(1020,0);
  tree10.scale.set(1.3);

  var tree11 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree11.position.set(1000,-20);

  var tree12 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree12.position.set(1100,-50);

  var tree13 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree13.position.set(1300,-50);

  var cactus8 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus8.position.set(1400,275);

  var cactus9 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus9.position.set(1310,235);

  var cactus10 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus10.position.set(1480,245);

  var tree10 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree1.png"));
  tree10.position.set(1520,0);
  tree10.scale.set(1.3);

  var cactus11 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus2.png"));
  cactus11.position.set(1520,275);

  var cactus12 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus2.png"));
  cactus12.position.set(1700,245);
  cactus12.scale.set(1.1);

  var cactus13 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus13.position.set(1950,235);

  var cactus14 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus2.png"));
  cactus14.position.set(2100,290);
  cactus14.scale.set(0.8);

  var tree11 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree1.png"));
  tree11.position.set(2250,0);
  tree11.scale.set(1.3);

  var tree12 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree12.position.set(2000,0);

  var tree13 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree13.position.set(2100,-50);

  var tree14 = new PIXI.Sprite(PIXI.Texture.fromFrame("tree2.png"));
  tree14.position.set(2250,-50);

  var cactus15 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus1.png"));
  cactus15.position.set(2250,300);
  cactus15.scale.set(0.8);

  var cactus16 = new PIXI.Sprite(PIXI.Texture.fromFrame("cactus2.png"));
  cactus16.position.set(2250,260);
  cactus16.scale.set(0.8);

  var plantArray = [tree6,cactus3,tree,tree2,cactus,tree7,cactus2,cactus5,tree3,
                    tree4,tree5,cactus4,tree8,cactus9,tree9,cactus6,cactus7,tree10,
                    tree11,tree12,tree13,cactus10,cactus16,cactus8,tree10,tree13,cactus11,cactus12,
                    cactus13,cactus14,tree11,tree12,tree14,cactus15];

//creates a sparrow
  var sparrowFrames =[];
  var quailFrames= [];
  for(var i=1;i<=2;i++){
    sparrowFrames.push(PIXI.Texture.fromFrame('sparrow'+i+'.png'));
    quailFrames.push(PIXI.Texture.fromFrame('quail'+i+'.png'));
  }
  sparrow = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow.position.set(125,175);
  sparrow.animationSpeed =0.1;
  sparrow.interactive = true;
  sparrow.on('mousedown', onButtonDown3);

//creates another sparrow
  sparrow2 = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow2.position.set(2000,275);
  sparrow2.animationSpeed =0.1;
  sparrow2.interactive = true;
  sparrow2.on('mousedown', onButtonDown3);

//creates a quail
  quail = new PIXI.extras.MovieClip(quailFrames);
  quail.position.set(940,355);
  quail.animationSpeed =0.1;
  quail.interactive = true;
  quail.on('mousedown', onButtonDown3);

//creates the player's sprite, birdman, and his animation
  var bird = world.getObject("bird");
  var birdManframes = [];//you...
  var birdFriendFrames = [];//a friend...
  var birdDudeFrames = [];//another friend...
  for (var i=1;i<=4;i++){
    birdManframes.push(PIXI.Texture.fromFrame('birdman'+i+'.png'));
    birdFriendFrames.push(PIXI.Texture.fromImage('birdFriend1.png'));
  }
  birdFriendFrames.push(PIXI.Texture.fromImage('birdFriend2.png'));
  birdMan = new PIXI.extras.MovieClip(birdManframes);
  birdFriend = new PIXI.extras.MovieClip(birdFriendFrames);
  birdMan.animationSpeed = 0.1;
  birdFriend.animationSpeed = 0.05;
  birdFriend.position.set(2350,420);
  birdFriend.play();
  birdFriend.interactive=true;
  birdFriend.on('mousedown',onButtonDown4);

//PIXI.loader.resources.bird.texture
  player = birdMan;
  player.x = bird.x;
  player.y = bird.y
  player.anchor.x = 0.0;
  player.anchor.y= 1.0;

//game title, to be shown very first!
  var title = new PIXI.Text("FOR THE BIRDS 3",{font: '25px Calibri',
            fill: 0x222034, strokeThickness : 2} );
  title.position.set(175,50);

  var titleSub = new PIXI.Text("Click to begin",{font: '18px Calibri',
            fill: 0x222034} );
  titleSub.position.set(300,400);

  var titleContinue = new PIXI.Text("Continue",{font: '18px Calibri',
            fill: 0x222034} );
  titleContinue.position.set(300,400);
  titleContinue.visible=false;

  var titleCredits = new PIXI.Text("Credits",{font: '18px Calibri',
            fill: 0x222034} );
  titleCredits.position.set(300,425);

  var creditsBack = new PIXI.Text("Back",{font: '18px Calibri',
            fill: 0x222034} );
  creditsBack.position.set(300,425);
  creditsBack.visible=false;

  var creditsText = new PIXI.Text("Game by\nHailey Ginther",{font: '18px Calibri',
            fill: 0x222034, align: 'center'} );
  creditsText.position.set(200,200);
  creditsText.visible=false;

  var instruction = new PIXI.Text("Instructions\n\
    use 'a' & 'd' to traverse the map",{font: '18px Calibri',
            fill: 0x222034, align: 'center'} );
  instruction.position.set(200,200);
  instruction.visible=false;

  var friendText = new PIXI.Text("Done?",{font: '18px Calibri',
          fill: 0x222034, align: 'center'});
  friendText.position.set(2300,300);
  friendText.visible=false;

  var friendYes = new PIXI.Text("Ya",{font: '18px Calibri',
          fill: 0x222034, align: 'center'});
  friendYes.position.set(2280,320);
  friendYes.visible=false;
  friendYes.interactive=true;
  friendYes.on('mousedown',onButtonDown5);

  var friendNo = new PIXI.Text("No",{font: '18px Calibri',
          fill: 0x222034, align: 'center'});
  friendNo.position.set(2340,320);
  friendNo.visible=false;
  friendNo.interactive=true;
  friendNo.on('mousedown',onButtonDown5);

  //start game button
  var titleButton1 = new PIXI.Graphics();
  titleButton1.beginFill(0xf7a541);
  titleButton1.drawRoundedRect(295,400,110,20);
  titleButton1.interactive = true;
  titleButton1.on('mousedown', onButtonDown);

  //credits button
  var titleButton2 = new PIXI.Graphics();
  titleButton2.beginFill(0xf7a541);
  titleButton2.drawRoundedRect(295,425,110,20);
  titleButton2.interactive = true;
  titleButton2.on('mousedown', onButtonDown2);

  //array to store graphics shown on start screen
  var titleObjArray = [title,titleSub,titleCredits];

  //array to store all birds to spot
  var birdsTotalArray=[sparrow, sparrow2, quail];

  //adding title parts to stage
  var entity_layer = world.getObject("Entities");
  entity_layer.addChild(friendYes);
  entity_layer.addChild(friendNo);
  entity_layer.addChild(friendText);
  entity_layer.addChild(birdFriend);
  entity_layer.addChild(birdMan);
  //adds birds to spot
  for(var i=0;i<birdsTotalArray.length;i++){
    entity_layer.addChild(birdsTotalArray[i]);
  }
  //adds foliage
  for(var i=0;i<plantArray.length;i++){
    entity_layer.addChild(plantArray[i]);
  }
  //adds title parts
  entity_layer.addChild(titleButton1);
  entity_layer.addChild(titleButton2);
  for(var i=0;i<titleObjArray.length;i++){
    entity_layer.addChild(titleObjArray[i]);
  }
  //adding parts of post-title game parts
  entity_layer.addChild(titleContinue);
  entity_layer.addChild(instruction);
  entity_layer.addChild(creditsText);
  entity_layer.addChild(creditsBack);

  player.direction = movNone;
  player.moving = false;

  //starts game...
  function onButtonDown(){
    blip.play();
    if(instruction.visible ==false){
      instruction.visible = true;
      for(var i=0;i<titleObjArray.length;i++){
        titleObjArray[i].visible=false;
      }
      titleContinue.visible=true;
      titleButton2.visible=false;
    }
    else{
    entity_layer.addChild(player);
    gameStarted = true;
    instruction.visible=false;
    titleButton1.visible=false;
    titleContinue.visible=false;
    birdMan.play();
    sparrow.play();
    sparrow2.play();
    quail.play();
    }
  }

  //toggles credits view
  function onButtonDown2() {
    blip.play();
    if(creditsText.visible==false){
      for(var i=0;i<titleObjArray.length;i++){
        titleObjArray[i].visible = false;
      }
      titleButton1.visible=false;
      creditsText.visible=true;
      creditsBack.visible=true;
    }
    else{
      for(var i=0;i<titleObjArray.length;i++){
        titleObjArray[i].visible = true;
      }
      titleButton1.visible=true;
      creditsText.visible=false;
      creditsBack.visible=false;
    }
  }

  function onButtonDown3() {
    if(gameStarted){
      tweet.play();
      birdsFoundAmount= birdsFoundAmount+1;
      this.visible=false;
    }
  }

  function onButtonDown4 () {
    if(friendText.visible){
      friendNo.visible=false;
      friendText.visible=false;
      friendYes.visible=false;
    }
    else{
      friendNo.visible=true;
      friendYes.visible=true;
      friendText.visible = true;
    }
  }

 function onButtonDown5 () {
    if(this == friendYes){
      gameEnd();
    }
    else if(this ==friendNo){
      friendNo.visible=false;
      friendText.visible=false;
      friendYes.visible=false;
    }
  }

  function gameEnd(){
    gameStarted = false;
    friendNo.visible=false;
    friendText.visible=false;
    friendYes.visible=false;
    var gameEndText = new PIXI.Text("You Spotted " + getBirdAmount()+
    " out of " + birdsTotalArray.length,
        {font: '18px Calibri', fill: 0x222034, align: 'center'});
    gameEndText.position.set(2100,300);
    entity_layer.addChild(gameEndText);
  }

  function getBirdAmount(){
    return birdsFoundAmount;
  }

}

createjs.Ticker.setFPS(60);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(stage);
  update_camera();
}

animate();

function update_camera() {
  stage.x = -player.x + gameWidth/2 - player.width/2;
  stage.x = -Math.max(0, Math.min(world.worldWidth - gameWidth, -stage.x));
}
