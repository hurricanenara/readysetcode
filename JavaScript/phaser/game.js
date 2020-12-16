function create() {
    this.add.text(50, 100, "Nara's Game World", { font: "40px Times New Roman", fill: "#ffa0d0" });

    this.add.text(130, 300, "by Nara Inc.", { font: "20px Times New Roman", fill: "#ffa0d0" });
}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 600,
    backgroundColor: "#5f2a55",
    scene: {
        create
    }
};

// draw circles

// function create() {
//     let circle1 = this.add.circle(50, 100, 90, 0xFFF070);
//     let circle2 = this.add.circle(95, 300, 80, 0xFF0000);
//     let circle3 = this.add.circle(200, 200, 100, 0x9F00D0);
//     let circle4 = this.add.circle(300, 400, 10, 0x00E030);

//     // Add in a circle here!
//     let circle5 = this.add.circle(400, 200, 20, 0xbe7987);
// }

// const config = {
//     type: Phaser.AUTO,
//     width: 450,
//     height: 600,
//     scene: {
//         create
//     }
// };

//add sprite

// function preload() {
//     // Load in the sprite here!
//     this.load.image('codey', "https://content.codecademy.com/courses/learn-phaser/codey.png");
// }

// function create() {
//     // Create a sprite game object here!
//     this.add.sprite(40, 40, 'codey');
// }

// const config = {
//     type: Phaser.AUTO,
//     width: 450,
//     height: 600,
//     backgroundColor: "#5f2a55",
//     scene: {
//         create,
//         preload
//     }
// }

// add image

// function preload() {
//     // Load in the background image here!
//     this.load.image('sky', 'https://content.codecademy.com/courses/learn-phaser/sky.jpg');
// }

// function create() {
//     // Put the background image in the scene here!
//     this.add.image(-100, 300, 'sky');
// }

// const config = {
//     type: Phaser.AUTO,
//     width: 450,
//     height: 600,
//     backgroundColor: "#5f2a55",
//     scene: {
//         create,
//         preload
//     }
// }

// constructing config and initiaing game

/*
const config = {
    width: 300,
    height: 500,
    backgroundColor: "#125a69",
};

const game = new Phaser.Game(config);
*/

// moving codey with update function

/*
let codey;

function preload() {
    this.load.image('codey', 'https://content.codecademy.com/courses/learn-phaser/codey.png');
}

function create() {
    codey = this.add.sprite(30, 200, 'codey')
}

// Create your update() function here
function update() {
    codey.x += 1;
}

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 400,
    backgroundColor: "#5f2a55",
    scene: {
        preload,
        create,
        // Include update here!
        update,
    }
}
*/

// defining and using gameState

/*
const gameState = {};

function create() {
    // Create a circle and assign it to gameState.circle here
    gameState.circle = this.add.circle(100, 100, 10, 0x2213fb);
}

function update() {
    // Update the circle in gameState.circle here
    gameState.circle.y += 1;
}

const config = {
    type: Phaser.AUTO,
    width: 450,
    height: 600,
    backgroundColor: "#99ff99",
    scene: {
        create,
        update
    }
}
*/

// adding event listener to change rect color on pointerup

/*
const gameState = {
    onColor: 0xaaffaa,
    offColor: 0xffaaaa
}

function create() {
    gameState.rect1 = this.add.rectangle(200, 100, 100, 100, gameState.onColor);
    gameState.rect2 = this.add.rectangle(200, 300, 100, 100, gameState.offColor);

    // add the switchedOn state here

    // set gameState.rect2 as interactive here
    gameState.rect2.setInteractive();

    // create the pointerup listener for rect2 here
    gameState.rect2.on("pointerup", function () {
        if (gameState.rect2.fillColor === gameState.offColor) {
            gameState.rect2.fillColor = gameState.onColor;
            gameState.rect1.fillColor = gameState.offColor;
        } else {
            gameState.rect2.fillColor = gameState.offColor;
            gameState.rect1.fillColor = gameState.onColor;
        }
    })
}

const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 450,
    backgroundColor: 0x333333,
    scene: {
        create
    }
}
*/

const game = new Phaser.Game(config);
