new Vue({
    el: '#app',
    data: {
        humanHealth: 100,
        covidHealth: 100,
        gameIsRunning: false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.humanHealth = 100;
            this.covidHealth = 100;
        },
        socialdistancing: function() {
            this.covidHealth -= this.calculateDamage(3, 10);
            if (this.checkWin()) {
                return;
            }

            this.covidAttacks();
        },
        lockdown: function() {
            this.covidHealth -= this.calculateDamage(10, 20);
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
            this.covidAttacks();
        },
        giveup: function() {
            this.gameIsRunning = false;
        },
        covidAttacks: function() {
            this.humanHealth -= this.calculateDamage(5, 12);
            this.checkWin();
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