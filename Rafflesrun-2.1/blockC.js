class room1 extends Phaser.Scene {

    constructor() {
        super({ key: 'blockC' });
        
        // Put global variable here
    }


    init(data) {
        this.player = data.player
        this.inventory = data.inventory
    }

    preload() {

    }

    create() {
        console.log('*** room1 scene');
        
    }

    update() {

    }

    

}
