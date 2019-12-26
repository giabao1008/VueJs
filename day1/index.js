// Code Vuejs

new Vue({
    el : '#app',
    data : {
        content : "Hello world",
        seen: false
    },
    methods :{
        changeValue: function(event){
            this.content = event.target.value;
        }
    }
});