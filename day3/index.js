// Code Vuejs

new Vue({
    el : '#app',
    data : {
       dem : 0,
       x: 0,
       y: 0,
       toancuc:'',
    },
    methods :{
        tangGiaTri: function() {
            this.dem++;
        },
        checkToaDo: function(event){
            this.x = event.clientX;
            this.y = event.clientY;
        }
    }
});