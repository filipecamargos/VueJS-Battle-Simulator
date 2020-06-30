//Set it up the pleayers heatlth
new Vue({
    //The target element
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false, //Check if the game will be running
        turns: [] //Store teh turns
    },
    methods: {
        //Set the start of the game and display the playable games
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        //Cause damage to the monster
        attack: function() {
            //Cause damager to the monster
            this.monsterHealth -= 2;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster battle back and causes 5 of damage'
            });

            //Check if over 
            if (this.checkWin()) {
                return;
            }

            //Get damage in battle
            this.playerHealth -= 5

            //add a new turn
            this.turns.unshift({
                isPlayer: true,
                text: 'Player attacks and causes 2 of damage'
            });

            //Check, but this is the last line so no code return needed
            this.checkWin();

        },
        //Cause a special attack
        specialAttack: function() {
            //Cause damager to the monster
            this.monsterHealth -= 10;
            //Get damage in battle
            this.playerHealth -= 10
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster battle back and causes 10 of damage'
            });

            //Check if over 
            if (this.checkWin()) {
                return;
            }

            //add a new turn
            this.turns.unshift({
                isPlayer: true,
                text: 'Player attacks with a special attack and causes 10 of damage'
            });
            //Check, but this is the last line so no code return needed
            this.checkWin();

        },
        //Increase health
        heal: function() {
            if (this.playerHealth <= 85) {
                this.playerHealth += 15;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Player take portion to increas health'
                });
            } else {
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Portion had no effect!'
                });
            }

        },
        //give up on the game
        giveUp: function() {
            this.gameIsRunning = false;
        },
        //Check for winner
        checkWin: function() {
            //check to see if the monster is dead
            if (this.monsterHealth <= 0) {
                if (confirm('YOU won! Do YOU want to start a new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('YOU Lost! Do YOU want to start a new game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    },


});