// convert list tp X and reverce
let fa=document.querySelector(".fa-bars")
let list=document.querySelector(".list")
fa.addEventListener("click",function(){
    if(fa.classList.contains("fa-bars")){
        fa.classList.remove("fa-bars");
        fa.classList.add("fa-xmark")
        list.style.display="block"
    }else{
        fa.classList.remove("fa-xmark")
        fa.classList.add("fa-bars");
        list.style.display="none"
    }
})


// class active in links normal screen
let links=document.querySelectorAll("ul li a")

links.forEach((el)=>{
    el.addEventListener("click",function(){
        links.forEach((el)=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
    })
})
// class active in links in small screen
let links2=document.querySelectorAll(".list a")

links2.forEach((el)=>{
    el.addEventListener("click",function(){
        links2.forEach((el)=>{
            el.classList.remove("active")
        })
        el.classList.add("active")
    })
})


    // open setting box
    let settingBox=document.querySelector(".setting");
    document.addEventListener("click",function(el){
        if(el.target.classList.contains("gear")){

            el.target.classList.toggle("rotate")

        }
        if(el.target.classList.contains("gear")){
            settingBox.classList.toggle("open");
        }
    })

    
    

    // select size paragraph
    let select1=document.getElementById("p");
    let paragraphs=document.querySelectorAll("p")
    document.addEventListener("click",function(el){
        if(el.target.classList.contains("ok1")){
            window.localStorage.setItem("sp",select1.options[select1.selectedIndex].dataset.size)
            paragraphs.forEach((p)=>{
                p.style.fontSize=`${window.localStorage.getItem("sp")}px`;
            })
        }
        
    })
    
    // select size header
    let select2=document.getElementById("h");
    let headers=document.querySelectorAll("h2")
    document.addEventListener("click",function(el){
        
        if(el.target.classList.contains("ok2")){
            window.localStorage.setItem("sh",select2.options[select2.selectedIndex].dataset.size)
            headers.forEach((h)=>{
                h.style.fontSize=`${window.localStorage.getItem("sh")}px`;
            })
    
        }

    })

    let mainColor=window.localStorage.getItem("color-option")

    if(mainColor !==null ){

        document.documentElement.style.setProperty('--main-color',mainColor)
        document.documentElement.style.setProperty('--th-color',mainColor)
        // remove all active from lis
        document.querySelectorAll(".option-color .color").forEach((li)=>{
            li.classList.remove("active")
            // check if data-color===mainColor
            if(li.dataset.color==mainColor){
                // add class active 
                li.classList.add("active")
            }
        })
    }
    // semulation color in setting box
    document.addEventListener("click",(el)=>{
        if(el.target.classList.contains("color")){
            // change color
            document.documentElement.style.setProperty('--main-color',el.target.dataset.color)
            document.documentElement.style.setProperty('--th-color',el.target.dataset.color)
            
            // set color in local storage
            window.localStorage.setItem("color-option",el.target.dataset.color)
            
            // remove calss active 
            document.querySelectorAll(".option-color .color").forEach((li)=>{
                li.classList.remove("active")
            })
            el.target.classList.add("active")
        }
    })

    
        // add random background in local storage 

        let mainRandom=localStorage.getItem("random");
        
        let randomImg; //defiend in global scope 
    if(mainRandom!==null){
            // random backGround
            if(mainRandom=="yes"){
                let landing=document.querySelector(".landing")
                    randomImg=setInterval(function (){
                            landing.style.backgroundImage=`url(${window.localStorage.getItem("src")})`
                        }, 1000);
            }else{
                    clearInterval(randomImg)
            }
            
        

            // remove class active from all buttens 
            document.querySelectorAll(".buttens span").forEach((btn)=>{
                btn.classList.remove("active")
                if(btn.dataset.background==mainRandom){
                    btn.classList.add("active")
                }
            })
        }
                    
        // add class active to buttons
        document.addEventListener("click",(el)=>{
            if(el.target.classList.contains("random")){
                document.querySelectorAll(".buttens span").forEach((el)=>{
                    el.classList.remove("active")
                })
                if(!el.target.classList.contains("active")){
                    el.target.classList.add("active")
                }

                localStorage.setItem("random",el.target.dataset.background)
            }
        })


    

        // add action in buttons in random backGround
        let randomYes=document.querySelector(".buttens .yes")
        let randomNo=document.querySelector(".buttens .no")

        // random backGround
        let landingImg=["one.jpg","two.jpg","three.jpg","four.jpg","six.jpg","eight.jpg"];
        let landing=document.querySelector(".landing")

        // let randomImg;


        if(localStorage.getItem("src")!=null){
            landing.style.backgroundImage=`url(${window.localStorage.getItem("src")})`
        }

        randomYes.addEventListener("click",_=>{
            // random background
            randomImg=setInterval(function (){
                let ran=Math.floor(landingImg.length*Math.random())

                    window.localStorage.setItem("src",`images/${landingImg[ran]}`)
            
                    landing.style.backgroundImage=`url(${window.localStorage.getItem("src")})`

                }, 1000);
            
        })

        randomNo.addEventListener("click",_=>{
            clearInterval(randomImg)
        })
        

        // when click on image in setting box
        let imgs=document.querySelectorAll(".imgs img").forEach((img)=>{
            img.addEventListener("click",()=>{
                clearInterval(randomImg)
                localStorage.setItem("src",img.dataset.src)
                localStorage.setItem("random",img.dataset.background)
                landing.style.backgroundImage=`url(${img.dataset.src})`
            })
        })



        function startCount(el){
            let count = setInterval(()=>{
                el.innerHTML++;
                if(el.innerHTML==el.dataset.percent){
                    clearInterval(count)
                }
            },.300)
        
        }
        



        
        // fill percent to spans
        function fill (){
            let span=document.querySelectorAll(".skill-box .skill-porgress span")
            span.forEach((el)=>{
                el.style.width=`${el.dataset.percent}%`;
            })

        }
        // 
        let divs=document.querySelectorAll(".skill-box .percent")
        let started=false;

        
        window.addEventListener("scroll",()=>{
            if(scrollY>=780){
                fill()
                if(!started){
                    divs.forEach((el)=>{
                        startCount(el)
                    })
                }
                started=true;
            }else{
                let span=document.querySelectorAll(".skill-box .skill-porgress span")
                span.forEach((el)=>{
                    el.style.width=0;
                })
                
            }
        })


        // click ok image in gallery
        document.querySelectorAll(".gallery .container .content img").forEach((img)=>{
            img.addEventListener("click",(el)=>{
                // create popup overlay
                let popupOverLay=document.createElement("div");

                popupOverLay.className="popup-overlay";
                // append to body
                document.body.appendChild(popupOverLay)

                // create popup-box
                let popupBox=document.createElement("div")
                
                popupBox.className="popup-box";





                if(img.alt !== null){
                    // create head name
                    let headImg=document.createElement("h3");
    
                    let txtNodeHead=document.createTextNode(img.alt)

                    // append to popup-box
                    headImg.appendChild(txtNodeHead)

                    popupBox.appendChild(headImg)

                    if(headImg.innerHTML==""){
                        headImg.remove()
                    }

                }

                
                    // create close btn
                    let close=document.createElement("span");
    
                    close.innerHTML="X"

                    close.className="close-btn"
                    
                    
                    // append to popup-box
                    popupBox.appendChild(close)


                
                // create img
                let popupImg=document.createElement("img")

                popupImg.src=img.src;

                popupBox.appendChild(popupImg)

                popupOverLay.appendChild(popupBox)



            })
        })


        document.addEventListener("click",(el)=>{
            if(el.target.classList.contains("close-btn")){
                el.target.parentNode.remove();
                document.querySelector(".popup-overlay").remove();
            }
            if(el.target.classList.contains("popup-overlay")){
                el.target.remove()
            }

        })



        // bullets
        let bullets=document.querySelectorAll((".nav-bullets .bull"))

        bullets.forEach((el)=>{

            el.addEventListener("click",()=>{
                // remove background color from all element
                bullets.forEach((ele)=>{
                    ele.style.backgroundColor="transparent";
                })
                // change backGround color
                el.style.backgroundColor=document.documentElement.style.getPropertyValue("--main-color");


                document.querySelector(el.dataset.section).scrollIntoView({
                    behavior:"smooth"
                })

            })
            
        })

        // option bullets in setting box
        let optionBullets=document.querySelectorAll(".option-bullets span")

        optionBullets.forEach((bullet)=>{

            bullet.addEventListener("click",()=>{
                optionBullets.forEach(el=>{{
                    el.classList.remove("active")
                }})
                bullet.classList.add("active")
    
                if(bullet.classList.contains("rightActive")){

                    document.querySelector(".setting2").classList.add("open")
                    document.querySelector(".setting").classList.remove("open")
            

                }
            })
            
        })
        // click in left arrow
        document.addEventListener("click",(el)=>{
            if(el.target.classList.contains("left-arrow")){
                
                document.querySelector(".setting2").classList.remove("open")
                document.querySelector(".setting").classList.add("open")
                
            }
            if(el.target.classList.contains("closing")){
                document.querySelector(".setting2").classList.remove("open")

            }
        })



        let btns=document.querySelectorAll(".setting2 .buttens span")
        let navBull=document.querySelector(".nav-bullets")

        // show in local storage
        
        

        // show or hide bullets

        if(localStorage.getItem("display")!==null){

            navBull.style.display=localStorage.getItem("display")

            let btns=document.querySelectorAll(".spans span")

            // remove active from all btns
            btns.forEach(e=>e.classList.remove("active"))



            if(localStorage.getItem("display")=="block"){
                document.querySelector(".buttens .yess").classList.add("active")
            }else{
                document.querySelector(".buttens .non").classList.add("active")

            }

        }

        btns.forEach((btn)=>{
            btn.addEventListener("click",()=>{

                btns.forEach((btn)=>{
                    btn.classList.remove("active")
                })

                btn.classList.add("active")

                
                localStorage.setItem("display",btn.dataset.active)
                
                if(btn.dataset.active=="none"){
                    navBull.style.display=localStorage.getItem("display")
                }else{
                    navBull.style.display=localStorage.getItem("display")
                    
                }

            })
            
        })


        // btn reset
        document.querySelector(".setting2 .reset").addEventListener("click",()=>{


            window.localStorage.removeItem("src")
            window.localStorage.removeItem("sh")
            window.localStorage.removeItem("color-option")
            window.localStorage.removeItem("random")
            window.localStorage.removeItem("display")
            window.location.reload();
        })


    


// localStorage.clear()