
var header= document.getElementById("header");
            var ms= document.getElementById("FORD");
            var m3= document.getElementById("AUDI");
            var mx= document.getElementById("MAHINDRA");
            var my= document.getElementById("FERRARI");
            var model= document.getElementById("model");
            var mph= document.getElementById("mph");
            var speed= document.getElementById("speed");
            var range= document.getElementById("range");

            ms.onclick=function(){
                header.style.backgroundImage="url(https://images.alphacoders.com/111/thumb-1920-1111051.jpg)";
                model.innerHTML="MUSTANG";
                mph.innerHTML="1.5s";
                speed.innerHTML="300 mph";
                range.innerHTML="400 mi";
            }
            m3.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)";
                model.innerHTML="AUDI";
                mph.innerHTML="1.7s";
                speed.innerHTML="350 mph";
                range.innerHTML="500 mi";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://wallpapercave.com/wp/wp7539049.jpg)";
                model.innerHTML="THAR";
                mph.innerHTML="2.5s";
                speed.innerHTML="420 mph";
                range.innerHTML="450 mi";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://i.pinimg.com/originals/44/1e/9e/441e9e60e6f12b35a9f13c3c3237d2b6.jpg)";
                model.innerHTML="FERRARI";
                mph.innerHTML="3.5s";
                speed.innerHTML="450 mph";
                range.innerHTML="350 mi";
            }