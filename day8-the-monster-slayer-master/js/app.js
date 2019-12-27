new Vue({
  el: '#app',
  data:{
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
    turns: []
  },
  methods: {
    startGame: function(){
       this.gameIsRunning = true;
       this.playerHealth = 100;
       this.monsterHealth = 100;
       this.turns = [];
       this.turns.unshift({
        isPlayer: true,
        message: "Player start new game",
      })
    },
    attack: function () {
        // if(this.checkGame()) return; 
         // Monster Health
        let pTrueDame = this.dmg(1,10);
        this.monsterHealth -= pTrueDame;
        
        this.turns.unshift({
          isPlayer: true,
          message: "Player hit monster for " + pTrueDame + "dmg",
        })
        // Player Health
        this.monsterAttack();
        

    },
    monsterAttack: function(){
      
      let mTrueDame = this.dmg(1,10);
      this.playerHealth -= mTrueDame;  
      this.turns.unshift({
        isPlayer: false,
        message: "Monster hit player for " + mTrueDame + "dmg",
      })
      this.checkGame();
    },
    dmg: function(minDmg = 1, maxDmg = 10){
      return Math.max(Math.floor(Math.random() * maxDmg)+ 1, minDmg);
    },
    
    specialAttack: function () {
          if(this.checkGame()) return; 
          // Monster Health
          let pTrueDame = this.dmg(2,12);
          this.monsterHealth -= pTrueDame;
          this.turns.unshift({
            isPlayer: true,
            message: "Special  = Player hit monster for " + pTrueDame + "dmg",
          })
          // Player Health
          this.monsterAttack();
    },
    heal: function () {
        if(this.playerHealth >= 100 ){
          this.playerHealth = 100;
          return false;
        } 
        this.playerHealth += 10;

        this.turns.unshift({
          isPlayer: true,
          message: "Player Health for 10hp",
        })

        this.monsterAttack();
    },
    giveUp: function () {
        alert('You lost');
        this.gameIsRunning = false;
    },
    checkGame: function(){
        if(this.monsterHealth <= 0){
            if(confirm('You won ! Start new game ??')){
              this.startGame();
              // this.gameIsRunning = true;
            }else{
              this.gameIsRunning = false;
            }
            return true;
        }
        else if(this.playerHealth <= 0){
          if(confirm('You lose ! Start new game ??')){
            this.startGame();
            // this.gameIsRunning = true;
          }else{
            this.gameIsRunning = false;
          }
          return true;
        }
        return;
    }
  }
});