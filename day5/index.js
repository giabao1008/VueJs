// Code Vuejs

new Vue({
    el : '#app',
    data : {
       qlDo: false,
       qlXanhBien: false,
       qlXanhLa: false,
       cal : '10 + 12',
       check: false,
    },
    methods:{
        checkInput : function(event){
            let result = event.target.value;
            this.check = result == eval(this.cal);
            return this.check;
        }
    },
    computed:{
        changeColor : function(){
           return !this.qlXanhBien;
        },
       
       
    }
});