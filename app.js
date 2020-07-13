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
            var max = 10;
            var min = 3;
            var damage= Math.max(Math.floor(Math.random() * max) + 1, min);
            this.covidHealth -= damage;

            if (this.covidHealth <= 0) {
                alert('Human Race is saved!');
                this.gameIsRunning = false;
                return;
            }

            max = 12;
            min = 5;
            damage= Math.max(Math.floor(Math.random() * max) + 1, min);
            this.humanHealth -= damage;

            if (this.humanHealth <= 0) {
                alert('Humanity wiped out!');
                this.gameIsRunning = false;
                return;
            }
        },
        lockdown: function() {

        },
        vaccination: function() {

        },
        giveup: function() {

        }
    }
});