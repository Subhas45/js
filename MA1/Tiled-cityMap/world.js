class world extends Phaser.Scene {
  constructor() {
    super({
      key: "world",
    });
  }

  // incoming data from scene below
  init(data) {}

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("map","assets/worldmap.json");

    // Step 2 : Preload any images here, nickname, filename
    this.load.image("building", "assets/basemap.png");

  }

  create() {
    console.log("*** world scene");

    //Step 3 - Create the map from main
    let map = this.make.tilemap({key:"map"});

    // Step 4 Load the game tiles
    // 1st parameter is name in Tiled,
    // 2nd parameter is key in Preload
    let buildingTiles = map.addTilesetImage("basemap", "building");

    // Step 5  Load in layers by layers
    this.groundLayer = map.createLayer("groundLayer", [buildingTiles], 0, 0);
    this.streetLayer = map.createLayer("streetLayer", [buildingTiles], 0, 0);
    this.buildingLayer = map.createLayer("buildingLayer", [buildingTiles], 0, 0);

    // Add main player here with physics.add.sprite

    // Add time event / movement here

    // get the tileIndex number in json, +1
    //mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool

    // What will collider witg what layers
    //this.physics.add.collider(mapLayer, this.player);

    // create the arrow keys
    //this.cursors = this.input.keyboard.createCursorKeys();

    // camera follow player
    //this.cameras.main.startFollow(this.player);
  } /////////////////// end of create //////////////////////////////

  update() {} /////////////////// end of update //////////////////////////////

  // Function to jump to room1
  room1(player, tile) {
    console.log("room1 function");
  }
} //////////// end of class world ////////////////////////
