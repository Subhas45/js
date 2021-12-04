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

   
    // // Step 2 : Preload any images here, nickname, filename

    this.load.image("building", "assets/basemap.png");
    
    this.load.spritesheet('hero', 'assets/peter.png', { frameWidth: 32, frameHeight: 32 });
    

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
      
    this.anims.create({
      key: 'up',
      frames: this.anims.generateFrameNumbers('hero', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('hero', { start: 4, end: 7 }),
      frameRate: 10,
      repeat: -1
  });

  this.anims.create({
      key: 'down',
      frames: this.anims.generateFrameNumbers('hero', { start: 8, end: 11 }),
      frameRate: 10,
      repeat: -1
  });

    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('hero', { start: 12, end: 15 }),
      frameRate: 10,
      repeat: -1
  });
  
   
    this.physics.world.bounds.width = this.groundLayer.width; 
    this.physics.world.bounds.height = this.groundLayer.height;

  // load player into phytsics
  this.player = this.physics.add.sprite(100, 300, 'hero').setScale(1)

   
    //enable debug
    window.player = this.player;

    this.player.setCollideWorldBounds(true);

  //  Input Events
  this.cursors = this.input.keyboard.createCursorKeys();

  // make the camera follow the player
  this.cameras.main.startFollow(this.player);

  this.streetLayer.setCollisionByExclusion(-1, true) 
  this.buildingLayer.setCollisionByExclusion(-1, true)

  this.physics.add.collider(this.player, this.streetLayer); 
  this.physics.add.collider(this.player, this.buildingLayer);


  } // end of create //

  update () {

  if (this.cursors.left.isDown) 
  {
      this.player.setVelocityX(-200);
      this.player.anims.play('left', true);
  } 
  else if (this.cursors.right.isDown)
  {
      this.player.setVelocityX(200);
      this.player.anims.play('right', true);
  }
  else if (this.cursors.up.isDown)
  {
      this.player.setVelocityY(-200);
      this.player.anims.play('up', true);
  }
  else if (this.cursors.down.isDown)
  {
      this.player.setVelocityY(200);
      this.player.anims.play('down', true);
  } else {
      this.player.setVelocity(0);
  }


  } // end of update // 
}