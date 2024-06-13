// Limitando el alcance de las variables
(function(){
    const listElements = document.querySelectorAll(".lista-item--show");
    const list = document.querySelector(".lista");
    const menu = document.querySelector(".lista-hamburger");
    
    const addClick=()=>{
        listElements.forEach(element =>{
            element.addEventListener('click',()=>{
                let subMenu =element.children[1];
                let height=0;
                element.classList.toggle("lista-item--active")
                if(subMenu.clientHeight ===0){
                    height=subMenu.scrollHeight;
                }
                subMenu.style.height=`${height}px`;
            })
        })
    }

    const deleteStyleHeight=()=>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('lista-item--active');
            }
        })
    }

    // RESPONSIVE

    window.addEventListener('resize',()=>{
        if(window.innerWidth>800){
            deleteStyleHeight();
            if(list.classList.contains('lista--show')){
                list.classList.remove('lista--show')
            };
        }else{
            addClick();
        }
    });

    if(window.innerWidth<=800){
        addClick();
    };

    menu.addEventListener('click',()=>list.classList.toggle('lista--show'))
})();


