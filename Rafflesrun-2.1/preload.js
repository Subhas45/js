class preload extends Phaser.Scene {
  constructor() {
    super({
      key: "preload",
    });

    // Put global variable here
  }

  preload() {

    this.load.image("cover","assets/cover.png");
    
  }

    create () {

      console.log("preload")
      this.add.text(10,500, 'Animation labs, press spacebar to continue', 
          { font: '24px Courier', fill: '#ffffff' });
          
       this.add.image(0, 0, 'cover').setOrigin(0, 0);    

      var spaceDown = this.input.keyboard.addKey('SPACE');

      spaceDown.on('down', function(){
          this.scene.start("world");
          }, this );

  }

}
