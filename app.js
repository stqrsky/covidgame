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
            this.monsterHealth = 100;
        }
    }
});