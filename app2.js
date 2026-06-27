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












let videos = [
    {
        src: "vid/1.mp4",
        title: "Retsu's Unexpected Tricks | BAKI-DOU: The Invincible Samurai | Clip | Netflix Anime"
    },
    {
        src: "vid/2.mp4",
        title: "Ezra Miller's Flash Meets Grant Gustin's Flash - Crisis On Infinite Earths - Arrow"
    },
    {
        src: "vid/3.mp4",
        title: "Me at the zoo"
    },
    {
        src: "vid/4.mp4",
        title: "Dempsey Roll Best Quality HD Jack Dempsey"
    },
    {
        src: "vid/5.mp4",
        title: "Black Myth: Wukong - Pre-Order CG Trailer | PS5 Games"
    },
    {
        src: "vid/6.mp4",
        title: "A very happy wolf"
    },
    {
        src: "vid/7.mp4",
        title: "HITMAN Classic Trilogy Remastered Reveal"
    },
    {
        src: "vid/8.mp4",
        title: "Nature"
    },
    {
        src: "vid/9.mp4",
        title: "24 FPS vs 30 FPS vs 60 FPS (comparison)"
    },
    {
        src: "vid/10.mp4",
        title: "Forza Horizon 5 | 1 FPS vs 10 FPS vs 15 FPS vs 30 FPS vs 45 FPS vs 60 FPS"
    },
    {
        src: "vid/11.1.mp4",
        title: "The X-Men Will Return | Avengers: Doomsday in Theaters December 18, 2026"
    },
    {
        src: "vid/12.mp4",
        title: "This Video is a Game | Interactive Maze"
    },
    {
        src: "vid/13.mp4",
        title: "When Your IQ is KSI..."
    },
    {
        src: "vid/14.mp4",
        title: "LUCA Official Trailer (2021) Disney Pixar Movie HD"
    },
    {
        src: "vid/15.mp4",
        title: "Minecraft Realms Cross-Platform Trailer - E3 2016"
    },
    {
        src: "vid/16.mp4",
        title: "Spider-Man vs Electro BUT in FULL Punjabi Dub😂🔥 | The Amazing Spider-Man 2"
    },
    {
        src: "vid/17.mp4",
        title: "Lanterns | Official Teaser 2 | HBO Max"
    },
    {
        src: "vid/18.mp4",
        title: "Osu player plays Aim Lab"
    },
    {
        src: "vid/19.mp4",
        title: "2D Animation Demo Reel 2025/2026"
    },
    {
        src: "vid/20.mp4",
        title: "Hot Food | POEM | The Hypnotiser | Kids' Poems and Stories With Michael Rosen"
    },
    {
        src: "vid/21.mp4",
        title: "Fortnite Death Of JONESY | Cinematic Trailer"
    },
    {
        src: "vid/22.mp4",
        title: "Aesthetic anime cooking ramen with sound effects"
    },
    {
        src: "vid/23.mp4",
        title: "SSD VS HDD speed test 2023"
    },
    {
        src: "vid/24.mp4",
        title: "Ugly Number || Leetcode - 263 || Java"
    }
];



let id = new URLSearchParams(window.location.search).get("id");

document.querySelector(".mainvideo").src = videos[id - 1].src;
document.querySelector(".watchtitle").innerText = videos[id - 1].title;

