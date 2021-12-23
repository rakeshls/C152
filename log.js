
AFRAME.registerComponent('log',{
    schema:{
        msg:{type:"string",default:"Hello Niyati!! Welcome to the of components"}
    },
    init:function(){
        console.log(this.data.msg)
    }
})