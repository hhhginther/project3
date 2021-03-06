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
  var wrenFrames = [];
  var woodpeckerFrames = [];
  var owlFrames = [];
  var hawkFrames =[];
  var roadrunnerFrames = [];
  for(var i=1;i<=2;i++){
    sparrowFrames.push(PIXI.Texture.fromFrame('sparrow'+i+'.png'));
    quailFrames.push(PIXI.Texture.fromFrame('quail'+i+'.png'));
    wrenFrames.push(PIXI.Texture.fromFrame('cactusWren' +i+'.png'));
    woodpeckerFrames.push(PIXI.Texture.fromFrame('woodpecker' +i+'.png'));
    owlFrames.push(PIXI.Texture.fromFrame('owl'+i+'.png'));
    hawkFrames.push(PIXI.Texture.fromFrame('hawk'+i+'.png'));
    roadrunnerFrames.push(PIXI.Texture.fromFrame('roadrunner'+i+'.png'));
  }
  //extra frames of animation...
  hawkFrames.push(PIXI.Texture.fromFrame('hawk3.png'));
  roadrunnerFrames.push(PIXI.Texture.fromFrame('roadrunner3.png'));
  roadrunnerFrames.push(PIXI.Texture.fromFrame('roadrunner4.png'));

//1st owl
  var owl = new PIXI.extras.MovieClip(owlFrames);
  owl.position.set(452,102);
  owl.animationSpeed = 0.08;
//2nd owl
  var owl2 = new PIXI.extras.MovieClip(owlFrames);
  owl2.position.set(1008,0);
  owl2.animationSpeed = 0.08;
//3rd owl
  var owl3 = new PIXI.extras.MovieClip(owlFrames);
  owl3.position.set(2150,80);
  owl3.animationSpeed = 0.08;
//4th owl
  var owl4 = new PIXI.extras.MovieClip(owlFrames);
  owl4.position.set(2130,50);
  owl4.animationSpeed = 0.08;
//1st roadrunner
  var roadrunner = new PIXI.extras.MovieClip(roadrunnerFrames);
  roadrunner.position.set(1290,323);
  roadrunner.animationSpeed = 0.2;
//2nd roadrunner
  var roadrunner2 = new PIXI.extras.MovieClip(roadrunnerFrames);
  roadrunner2.position.set(1750,370);
  roadrunner2.animationSpeed = 0.2;
//3rd roadrunner
  var roadrunner3 = new PIXI.extras.MovieClip(roadrunnerFrames);
  roadrunner3.position.set(2090,350);
  roadrunner3.animationSpeed = 0.2;
//1st hawk
  var hawk = new PIXI.extras.MovieClip(hawkFrames);
  hawk.position.set(1290,70);
  hawk.animationSpeed = 0.1;
//2nd hawk
  var hawk2 = new PIXI.extras.MovieClip(hawkFrames);
  hawk2.position.set(1830,110);
  hawk2.animationSpeed = 0.1;
//3rd hawk
  var hawk3 = new PIXI.extras.MovieClip(hawkFrames);
  hawk3.position.set(2235,95);
  hawk3.animationSpeed = 0.1;
//1st woodpeckerFrames
  var woodpecker = new PIXI.extras.MovieClip(woodpeckerFrames);
  woodpecker.position.set(452,200);
  woodpecker.animationSpeed = 0.1;
//2nd woodpeckerFrames
  var woodpecker2 = new PIXI.extras.MovieClip(woodpeckerFrames);
  woodpecker2.position.set(1990,150);
  woodpecker2.animationSpeed = 0.1;
//3rd woodpeckerFrames
  var woodpecker3 = new PIXI.extras.MovieClip(woodpeckerFrames);
  woodpecker3.position.set(1630,300);
  woodpecker3.animationSpeed = 0.1;
//1st cactus wren
  var wren = new PIXI.extras.MovieClip(wrenFrames);
  wren.position.set(242,283);
  wren.animationSpeed = 0.1;
//2nd cactus wren
  var wren2 = new PIXI.extras.MovieClip(wrenFrames);
  wren2.position.set(944,215);
  wren2.animationSpeed = 0.1;
//3rd cactus wren
  var wren3 = new PIXI.extras.MovieClip(wrenFrames);
  wren3.position.set(1400,280);
  wren3.animationSpeed = 0.1;
//4th cactus wren
  var wren4 = new PIXI.extras.MovieClip(wrenFrames);
  wren4.position.set(1590,310);
  wren4.animationSpeed = 0.1;
//5th cactus wren
  var wren5 = new PIXI.extras.MovieClip(wrenFrames);
  wren5.position.set(2250,300);
  wren5.animationSpeed = 0.1;
//1st sparrow
  var sparrow = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow.position.set(125,175);
  sparrow.animationSpeed =0.1;
//2nd sparrow
  var sparrow2 = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow2.position.set(2000,245);
  sparrow2.animationSpeed =0.1;
//3rd sparrow
  var sparrow3 = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow3.position.set(700,183);
  sparrow3.animationSpeed =0.1;
//4th sparrow
  var sparrow4 = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow4.position.set(720,170);
  sparrow4.animationSpeed =0.1;
//5th sparrow
  var sparrow5 = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow5.position.set(1100,25);
  sparrow5.animationSpeed =0.1;
//6th sparrow
  var sparrow6 = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow6.position.set(1035,100);
  sparrow6.animationSpeed =0.1;
//7th sparrow
  var sparrow7 = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow7.position.set(1200,125);
  sparrow7.animationSpeed =0.1;
//8th sparrow
  var sparrow8 = new PIXI.extras.MovieClip(sparrowFrames);
  sparrow8.position.set(2145,150);
  sparrow8.animationSpeed =0.1;
//1st quail
  var quail = new PIXI.extras.MovieClip(quailFrames);
  quail.position.set(940,355);
  quail.animationSpeed =0.1;
//2nd quail
  var quail2 = new PIXI.extras.MovieClip(quailFrames);
  quail2.position.set(226,355);
  quail2.animationSpeed =0.1;
//3rd quail
  var quail3 = new PIXI.extras.MovieClip(quailFrames);
  quail3.position.set(1500,400);
  quail3.animationSpeed =0.1;
//4th quail
  var quail4 = new PIXI.extras.MovieClip(quailFrames);
  quail4.position.set(1445,310);
  quail4.animationSpeed =0.1;
//5th quail
  var quail5 = new PIXI.extras.MovieClip(quailFrames);
  quail5.position.set(1815,335);
  quail5.animationSpeed =0.1;
//1st hummingbird
  var hummingbird = new PIXI.Sprite(PIXI.Texture.fromFrame('hummingbird.png'));
  hummingbird.position.set(628,145);
//2nd hummingbird
  var hummingbird2 = new PIXI.Sprite(PIXI.Texture.fromFrame('hummingbird.png'));
  hummingbird2.position.set(-10,25);
//3rd hummingbird
  var hummingbird3 = new PIXI.Sprite(PIXI.Texture.fromFrame('hummingbird.png'));
  hummingbird3.position.set(990,245);
//4th hummingbird
  var hummingbird4 = new PIXI.Sprite(PIXI.Texture.fromFrame('hummingbird.png'));
  hummingbird4.position.set(1100,0);
//5th hummingbird
  var hummingbird5 = new PIXI.Sprite(PIXI.Texture.fromFrame('hummingbird.png'));
  hummingbird5.position.set(1710,0);
//1st grackle
  var grackle = new PIXI.Sprite(PIXI.Texture.fromFrame('grackle.png'));
  grackle.position.set(538,159);
//2nd grackle
  var grackle2 = new PIXI.Sprite(PIXI.Texture.fromFrame('grackle.png'));
  grackle2.position.set(732,65);
//3rd grackle
  var grackle3 = new PIXI.Sprite(PIXI.Texture.fromFrame('grackle.png'));
  grackle3.position.set(1145,325);
//4th grackle
  var grackle4 = new PIXI.Sprite(PIXI.Texture.fromFrame('grackle.png'));
  grackle4.position.set(1780,150);
//5th grackle
  var grackle5 = new PIXI.Sprite(PIXI.Texture.fromFrame('grackle.png'));
  grackle5.position.set(1610,130);
//1st dove
  var dove = new PIXI.Sprite(PIXI.Texture.fromFrame('dove.png'));
  dove.position.set(350,70);
//2nd dove
  var dove2 = new PIXI.Sprite(PIXI.Texture.fromFrame('dove.png'));
  dove2.position.set(890,134);
//3rd dove
  var dove3 = new PIXI.Sprite(PIXI.Texture.fromFrame('dove.png'));
  dove3.position.set(850,70);
//4th dove
  var dove4 = new PIXI.Sprite(PIXI.Texture.fromFrame('dove.png'));
  dove4.position.set(2000,70);
//1st cardinal
  var cardinal = new PIXI.Sprite(PIXI.Texture.fromFrame('cardinal.png'));
  cardinal.position.set(528,395);
//2nd cardinal
  var cardinal2 = new PIXI.Sprite(PIXI.Texture.fromFrame('cardinal.png'));
  cardinal2.position.set(912,373);
//3rd cardinal
  var cardinal3 = new PIXI.Sprite(PIXI.Texture.fromFrame('cardinal.png'));
  cardinal3.position.set(1425,368);
//6th hummingbird
  var hummingbird6 = new PIXI.Sprite(PIXI.Texture.fromFrame('hummingbird.png'));
  hummingbird6.position.set(2350,0);

//secret bird
  cardinal4 = new PIXI.Sprite(PIXI.Texture.fromFrame('cardinal.png'));
  cardinal4.position.set(0,420);
  cardinal4.visible = false;


  //array to store all birds to spot
  var birdsTotalArray=[roadrunner,hawk,owl,owl2, sparrow, sparrow2, sparrow3,
      sparrow4, quail,quail2,wren,wren2,woodpecker,sparrow5,sparrow6,sparrow7,
      wren3,wren4,quail3,quail4,quail5,roadrunner2,hawk2,woodpecker2,roadrunner3,
      hawk3,sparrow8,wren5,owl3,woodpecker3,owl4,
      hummingbird,hummingbird2,hummingbird3,grackle3,hummingbird4,hummingbird5,
      grackle,grackle2,dove,dove2,dove3,cardinal,cardinal2,cardinal3,grackle4,
      grackle5,cardinal4,hummingbird6,dove4,];
  for(var i=0;i<birdsTotalArray.length;i++){
      birdsTotalArray[i].interactive = true;
      birdsTotalArray[i].on('mousedown',onButtonDown3);
    }

//creates the player's sprite, birdman, and his animation, + player friends..
  var bird = world.getObject("bird");
  var birdManframes = [];//you...
  var birdFriendFrames = [];//a friend...
  var birdDudeFrames = [];//another friend...
  for (var i=1;i<=4;i++){
    birdManframes.push(PIXI.Texture.fromFrame('birdman'+i+'.png'));
    birdFriendFrames.push(PIXI.Texture.fromImage('birdFriend1.png'));
  }
  birdFriendFrames.push(PIXI.Texture.fromImage('birdFriend2.png'));
  birdMan = new PIXI.extras.MovieClip(birdManframes);//this is you
  birdFriend = new PIXI.extras.MovieClip(birdFriendFrames);//this is the friend
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

//game simple start screen bg
var titlebg = new PIXI.Sprite(PIXI.Texture.fromImage('titlescreen.png'));
titlebg.position.set(0,0);

//game title, to be shown very first!
  var title = new PIXI.Text("Yes, More Birds",{font: '25px Calibri',
            fill: 0xe4f1e8, strokeThickness : 2} );
  title.position.set(160,50);

//game sub-header
  var titleSub = new PIXI.Text("Click to begin",{font: '18px Calibri',
            fill: 0x222034} );
  titleSub.position.set(300,400);

//button to confirm instructions read and start game
  var titleContinue = new PIXI.Text("Continue",{font: '18px Calibri',
            fill: 0x222034} );
  titleContinue.position.set(300,400);
  titleContinue.visible=false;

//text fot button to display credits
  var titleCredits = new PIXI.Text("Credits",{font: '18px Calibri',
            fill: 0x222034} );
  titleCredits.position.set(300,425);

//text of credits button changed to 'back' if credits already displayed
  var creditsBack = new PIXI.Text("Back",{font: '18px Calibri',
            fill: 0x222034} );
  creditsBack.position.set(300,425);
  creditsBack.visible=false;

//credits text
  var creditsText = new PIXI.Text("Game by\nHailey Ginther",{font: '18px Calibri',
            fill: 0x222034, align: 'center'} );
  creditsText.position.set(200,200);
  creditsText.visible=false;

//how to play text
  var instruction = new PIXI.Text("Instructions\n\n\
  You are a bird birdwatcher on a mission:\n\
  find all your friends.\n\
  Spot a bird? Click that sucker\n\
  Think your eyes are sharp enough to find them all?\n\n\
  Use 'a' & 'd' to traverse the map\n\n\
  When you are done, let your friend in the red shirt\n\
  at the end of the map know!",{font: '18px Calibri',
            fill: 0x222034, align: 'center'} );
  instruction.position.set(50,100);
  instruction.visible=false;

//dialouge for 'birdFriend'
  var friendText = new PIXI.Text("Done Lookin'?",{font: '20px Calibri',
          fill: 0xe4f1e8, align: 'center', strokeThickness: 2});
  friendText.position.set(2260,300);
  friendText.visible=false;

//a text option to end the game and see score
  var friendYes = new PIXI.Text("Ya",{font: '20px Calibri',
          fill: 0xe4f1e8, align: 'center',strokeThickness: 2});
  friendYes.position.set(2280,320);
  friendYes.visible=false;
  friendYes.interactive=true;
  friendYes.on('mousedown',onButtonDown5);

//a text option to decline option to end game
  var friendNo = new PIXI.Text("No",{font: '20px Calibri',
          fill: 0xe4f1e8, align: 'center',strokeThickness: 2});
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

  //adding title parts to stage
  var entity_layer = world.getObject("Entities");

  //adds birds to spot
  for(var i=0;i<birdsTotalArray.length;i++){
    entity_layer.addChild(birdsTotalArray[i]);
  }
  //adds foliage
  for(var i=0;i<plantArray.length;i++){
    entity_layer.addChild(plantArray[i]);
  }
  //adds title parts
  entity_layer.addChild(titlebg);
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

  entity_layer.addChild(friendYes);
  entity_layer.addChild(friendNo);
  entity_layer.addChild(friendText);
  entity_layer.addChild(birdFriend);
  entity_layer.addChild(birdMan);

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
      titlebg.visible = false;
      birdMan.play();
      entity_layer.addChild(player);
      gameStarted = true;
      instruction.visible=false;
      titleButton1.visible=false;
      titleContinue.visible=false;
      for(var i =0;i<birdsTotalArray.length;i++){
      birdsTotalArray[i].play();
      }
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

cardinalSecret = true;
  function onButtonDown3() {
    if(gameStarted){
      tweet.play();
      birdsFoundAmount= birdsFoundAmount+1;
      if(this == cardinal4){
        cardinalSecret = false;
      }
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
    if(birdsFoundAmount>30){
      var gameEndText = new PIXI.Text("You spotted " + getBirdAmount()+
      " out of " + birdsTotalArray.length + " birds!\n What a champ",
          {font: '22px Calibri', fill: 0xe4f1e8, align: 'center',
          strokeThickness: 3});
        }
    else if(birdsFoundAmount==0){
      gameEndText = new PIXI.Text("You didn't find a single bird..\n"+
      "what the heck man this\nisn't even a hard game",{font: '22px Calibri',
       fill: 0xe4f1e8, align: 'center',
        strokeThickness: 3});
    }
    else{
      gameEndText = new PIXI.Text("You spotted " + getBirdAmount()+
      " out of " + birdsTotalArray.length + " birds!\n c'mon...\n"+
      "you're better than this.",
          {font: '22px Calibri', fill: 0xe4f1e8, align: 'center',
          strokeThickness: 3});
    }
    gameEndText.position.set(2070,220);
    entity_layer.addChild(gameEndText);
    birdMan.stop();
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
  if(birdsFoundAmount >10 && cardinalSecret){
    cardinal4.visible=true;
  }

}

animate();

function update_camera() {
  stage.x = -player.x + gameWidth/2 - player.width/2;
  stage.x = -Math.max(0, Math.min(world.worldWidth - gameWidth, -stage.x));
}
