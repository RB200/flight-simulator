AFRAME.registerComponent('rotate',{
    schema:{
        speedOfRotation:{type:'number',default:0}
    },
    init: function(){
        window.addEventListener('keydown',(e)=>{
            if(e.key === 'ArrowRight'){
                if(this.data.speedOfRotation < 0.1){
                    this.data.speedOfRotation = this.data.speedOfRotation + 0.01
                }
            }

            if(e.key === 'ArrowLeft'){
                if(this.data.speedOfRotation > -0.1){
                    this.data.speedOfRotation = this.data.speedOfRotation - 0.01
                }
            }
        })
    },

    tick: function(){
        var groundRotation = this.el.getAttribute('rotation')
        groundRotation.y = groundRotation.y + this.data.speedOfRotation
        this.el.setAttribute('rotation',{x:groundRotation.x,y:groundRotation.y,z:groundRotation.z})
    }
})

// for plane rotation
AFRAME.registerComponent('flightRotate',{
    schema:{
        speedOfRotation:{type:'number',default:0},
        speedOfAscent:{type:'number',default:0}
    },
    init: function(){
        window.addEventListener('keydown',(e)=>{
            this.data.speedOfRotation = this.el.getAttribute('rotation')
            this.data.speedOfAscent = this.el.getAttribute('position')
            var planeRotation = this.data.speedOfRotation
            var planeAscent = this.data.speedOfAscent
            if(e.key === 'ArrowRight'){
                if(planeRotation.x < 10){
                    planeRotation.x = planeRotation.x+0.5
                    this.el.setAttribute('rotation',planeRotation)
                }
            }
            if(e.key === 'ArrowLeft'){
                if(planeRotation.x > -10){
                    planeRotation.x = planeRotation.x - 0.5
                    this.el.setAttribute('rotation',planeRotation)
                }
            }
            if(e.key === 'ArrowUp'){
                if(planeRotation.z < 20){
                    planeRotation.z = planeRotation.z+0.5
                    this.el.setAttribute('rotation',planeRotation)
                }
                if(planeAscent.y < 2){
                    planeAscent.y = planeAscent.y + 0.01
                    this.el.setAttribute('position',planeAscent)
                }
            }
            if(e.key === 'ArrowDown'){
                if(planeRotation.z > -10){
                    planeRotation.z = planeRotation.z - 0.5
                    this.el.setAttribute('rotation',planeRotation)
                }
                if(planeAscent.y > -2){
                    planeAscent.y = planeAscent.y - 0.01
                    this.el.setAttribute('position',planeAscent)
                }
            }
        })
    }
})