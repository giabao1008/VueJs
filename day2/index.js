// Code Vuejs

new Vue({
    // All Data bind from Html is core data 
    el : '#app',
    data : {
        content : "Hello world",
        seen: true,
        link : "https://facebook.com/bao1081997",
        testHtml: '<a href="#"> test hmtl </a>'
    },
    methods :{
        changeValue: function(event){
            this.content = event.target.value;
        },
        testFunction: function(){
            return this.content;
        },
        updatePost: () => {
            this.content = "New content";
            return this.content;
        }
    }
});