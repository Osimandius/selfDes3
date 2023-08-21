AFRAME.registerComponent("spawnEnemy",{
    init:function(){
        var posx= -20;
        var posz= -20
        for(var i=0; i<4; i++){
            var ene=document.createElement("a-entity")
            ene.setAttribute("id","enemy"+i)
            posx+=5
            posz+=5
            ene.setAttribute("position",{x:posx, y:3.6, z:posz})
            ene.setAttribute("scale",{x:1,y:1,z:1})
            ene.setAttribute("gltf-model","./models/tubaEnemy/scene.gltf")
            ene.setAttribute("rotation",{x:0,y:90,z:0})
            ene.setAttribute("static-body",{})
            ene.setAttribute("animation-mixer",{clip:"HoldTubaWalk"})
            ene.setAttribute("class","enemy")
            var sceneEl=document.querySelector("#scene")
            sceneEl.appendChild(ene)
        }
    }
})