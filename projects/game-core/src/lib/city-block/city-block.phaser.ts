import * as Phaser from 'phaser';

export default class CityBlock extends Phaser.Scene {
    constructor() {
        super('City Block');
    }

    preload() {

    }

    create() {

    }
}

export function createPhaserGame({ width = 0, height = 0 }): Phaser.Game {
    const config = {
        type: Phaser.AUTO,
        width,
        height,
        physics: {
            default: 'arcade',
            arcade: { gravity: { y: 500 } }
        },
        scene: [new CityBlock()],
        parent: 'gameTarget'
    };

    return new Phaser.Game(config);

}