let sidebar = document.querySelector(".leftsec");
let menubtn = document.querySelector(".oneb1");
let tags = document.querySelectorAll(".sec");
let tag1 = document.querySelector(".sec");
let settings = document.querySelector(".threeb1");
let darkmode = document.querySelector(".popup")
let apppop = document.querySelector(".appearance-popup");
let backbtn = document.querySelector(".appupbackbtn");
let options = document.querySelectorAll(".option");
let darkopt = document.querySelector(".darkopt");
let lightopt = document.querySelector(".lightopt");
let body = document.querySelector("body")
let icons = document.querySelectorAll("i");
let imgs = document.querySelectorAll("img");
let themetext = document.querySelector(".themetext");
let ytlogo = document.querySelector(".ytlogo");
let changeit=document.querySelectorAll(".changeit");
let videosec = document.querySelector(".videosec");
let titles = document.querySelectorAll(".details");
let tagsec = document.querySelector(".tagsec");


menubtn.addEventListener("click",()=>{
    sidebar.classList.toggle("mini");
})

// tags.forEach(tag => {
//     tag.addEventListener("click",()=>{
//         tags.forEach(t=>{
//             t.classList.remove("clicked");
//         })
//         tag.classList.add("clicked");
//     })
// });


settings.addEventListener("click",()=>{
    darkmode.classList.toggle("show");
    apppop.classList.remove("show");
})

darkmode.addEventListener("click",()=>{
    apppop.classList.toggle("show");
})

backbtn.addEventListener("click",()=>{
    apppop.classList.toggle("show");
})

options.forEach(btns=>{
    btns.addEventListener("click",()=>{

        options.forEach(option=>{
            option.querySelector(".tick i").style.visibility = "hidden";
        });

        btns.querySelector(".tick i").style.visibility = "visible";

    });
});

darkopt.addEventListener("click",()=>{
    body.style.backgroundColor="#0F0F0F";
    icons.forEach(icon => {
        icon.style.color = "white";
    });
    imgs.forEach(img => {
        img.style.filter = "invert(1)";
    });
    themetext.innerText="Dark";
    ytlogo.style.filter="invert(0)";

    changeit.forEach(imgs => {
        imgs.style.filter="invert(0)";
    })

    sidebar.style.color="white";
    tagsec.style.color="#F1F1F1";

    tags.forEach(tag => {
        tag.style.backgroundColor="#272727"
    })

    tag1.style.backgroundColor="#F1F1F1"
    tag1.style.color="#272727";

    titles.forEach(title=>{
        title.style.color="#FAE8E0";
    })

})

lightopt.addEventListener("click",()=>{
    body.style.backgroundColor="white";
    icons.forEach(icon => {
        icon.style.color = "black";
    });
    imgs.forEach(img => {
        img.style.filter = "invert(0)";
    });
    themetext.innerText="Light";

    sidebar.style.color="black";
    videosec.style.color="black";
    tagsec.style.color="black";

    tags.forEach(tag => {
        tag.style.backgroundColor="#F2F2F2"
    })

    tag1.style.backgroundColor="#272727";
    tag1.style.color="#f2f2f2";

    titles.forEach(title=>{
        title.style.color="black";
    })
    

})






function openVideo(id){
    window.location.href = `watch.html?id=${id}`;
}


