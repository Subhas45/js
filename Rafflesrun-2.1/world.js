class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });
  }

  // incoming data from scene below
  init(data) {
    
    this.playerPos = data.playerPos;

  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("worldmap","assets/worldmap.json");

    this.load.image("building", "assets/basemap.png");
    
    this.load.atlas( 'left', 'assets/left.png', 'assets/left.json'); 
    this.load.atlas( 'right', 'assets/right.png', 'assets/right.json');
    this.load.atlas( 'up', 'assets/up.png', 'assets/up.json');
    this.load.atlas( 'down', 'assets/down.png', 'assets/down.json');
   
  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({key:'worldmap'}); 

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
   
    let buildingTiles = map.addTilesetImage("basemap", "building");

    let tilesArray = [ buildingTiles ] 

    // Step 5  Load in layers by layers 
    this.groundLayer = map.createLayer("groundLayer", [buildingTiles], 0, 0);
    this.streetLayer = map.createLayer("streetLayer", [buildingTiles], 0, 0);
    this.buildingLayer = map.createLayer("buildingLayer", [buildingTiles], 0, 0);
      
    

    this.physics.world.bounds.width = this.groundLayer.width; 
    this.physics.world.bounds.height = this.groundLayer.height;

    this.player = this.physics.add.sprite(200, 200, 'down');
  

    this.player.setCollideWorldBounds(true); // don't go out of the this.map

    // // create the arrow keys
     this.cursors = this.input.keyboard.createCursorKeys();

    // // camera follow player
    this.cameras.main.startFollow(this.player);


    this.streetLayer.setCollisionByExclusion(-1, true)
    this.buildingLayer.setCollisionByExclusion(-1, true)

    this.physics.add.collider(this.player, this.streetLayer);
    this.physics.add.collider(this.player, this.buildingLayer);
  } 
  /////////////////// end of create //////////////////////////////

  update() {


    if (this.cursors.left.isDown) {
      this.player.body.setVelocityX(-200);
      this.player.anims.play("left", true); 
    } 
    else if (this.cursors.right.isDown) {
      this.player.body.setVelocityX(200);
      this.player.anims.play("right", true);
    } 
    else if (this.cursors.up.isDown) {
      this.player.body.setVelocityY(-200);
      this.player.anims.play("up", true);
      //console.log('up');
    } 
    else if (this.cursors.down.isDown) {
      this.player.body.setVelocityY(200);
      this.player.anims.play("down", true);
      //console.log('down');
    } 
    else {
      this.player.anims.stop(); 
      this.player.body.setVelocity(0, 0);
    }
  } /////////////////// end of update //////////////////////////////

  // Function to jump to room1
  room1(player, tile) {
    console.log("room1 function");
    this.scene.start("room1");
  }


} //////////// end of class world ////////////////////////
