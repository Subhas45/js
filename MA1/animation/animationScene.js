
class animationScene extends Phaser.Scene {
    constructor ()
    {
        super({ key: 'animationScene' });
    }

    preload() {

        this.load.spritesheet('coin', 'assets/coin.png',{ frameWidth:32, frameHeight:32 });

    } // end of preload //

    create (){

    console.log("animationScene")

    this.anims.create({
        key:'spin',
        frames:this.anims.generateFrameNumbers('coin',
        { start:0, end:5 }),
        frameRate:10,
        repeat:-1
    });

    this.add.sprite(100, 100, 'coin')
    this.add.sprite(200, 100, 'coin').setScale(2)
    this.add.sprite(300, 100, 'coin').setScale(4)

    this.add.sprite(100, 300, 'coin').play('spin')
    this.add.sprite(200, 300, 'coin').setScale(2).play('spin')
    this.add.sprite(300, 300, 'coin').setScale(4).play('spin')


    } // end of create //

    update () {

    } // end of update // 
}