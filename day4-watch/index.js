// Code Vuejs

let app = new Vue({
    el : '#app',
    data : {
       diem: '0'
    },
    methods :{
      
    },
    watch: {
        diem: function(newValue){
            alert('Gia tri da bi thay doi');
        }
    }
    // 
    
});
app.diem =  '10';