const tab = document.querySelector(".tab-menu");
const btns = document.querySelectorAll(".tab-btn");
const imgs = document.querySelectorAll("img");
const texts = document.querySelectorAll("p");

tab.addEventListener("click", (e)=>{
    // console.log(e.target.dataset.id);
    const id = e.target.dataset.id;


    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove("active");
        });
        // e.target.classList.add("active");
        updateImg();
        updateText();
        let elements = document.querySelectorAll(`[data-id=${id}]`);
        // console.log(elements);
        elements.forEach((el)=>{
            el.classList.add("active");
        });
    };
});

function updateImg(){
    imgs.forEach((img)=>{
        img.classList.remove("active")
    });
    
}

function updateText(){
    texts.forEach((text)=>{
        text.classList.remove("active");
    });
   
}