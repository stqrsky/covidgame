new Vue({
    el: '#app',
    data: {
        humanHealth: 100,
        covidHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.humanHealth = 100;
            this.covidHealth = 100;
            this.turns = [];        // to reset the log
        },
        socialdistancing: function() {
            var damage = this.calculateDamage(3, 10);
            this.covidHealth -= damage;
            this.turns.unshift({
                isHuman: true,
                text: 'Human fights Covid-19 for ' + damage
            });            // opposite of push / add it at the beginning of array
            if (this.checkWin()) {
                return;
            }

            this.covidAttacks();
        },
        lockdown: function() {
            var damage = this.calculateDamage(10, 20);
            this.covidHealth -= damage;
            this.turns.unshift({
                isHuman: true,
                text: 'Human fights Covid-19 better for ' + damage
            });            // opposite of push / add it at the beginning of array
            if (this.checkWin()) {
                return;
            }
            this.covidAttacks();
        },
        vaccination: function() {
            if (this.humanHealth <= 90) {
                this.humanHealth += 10;
            } else {
                this.humanHealth = 100;
            }
            this.turns.unshift({
                isHuman: true,
                text: 'Human population stabilizing'
            });            // opposite of push / add it at the beginning of array
            this.covidAttacks();
        },
        giveup: function() {
            this.gameIsRunning = false;
        },
        covidAttacks: function() {
            var damage = this.calculateDamage(5, 12);
            this.humanHealth -= damage;
            this.checkWin();
            this.turns.unshift({
                isHuman: false,
                text: 'Covid-19 harms human population ' + damage
            });            // opposite of push / add it at the beginning of array
        },
        calculateDamage: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function() {
            if (this.covidHealth <= 0) {
                if (confirm('Human Race is saved!! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.humanHealth <= 0) {
                if (confirm('Humanity wiped out!! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});