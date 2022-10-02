
 let container=document.getElementById("container");
 let filter=document.getElementById("filter");

let Lsdata=[{
    img_url:"https://kettocdn.gumlet.io/media/campaign/212000/212655/image/wid1f1a33100b0ce11487774ca00c4341f7d0364e69.jpg?w=320&dpr=1.5",
    desc_:"My Little Boy’s Cancer Has Relapsed Twice But I’m Helpless. Please Save..",
    profile_pic:"https://www.forbesindia.com/media/wpower_2021/Pratima-Joshi.jpg",
    name:"By Family Friends",
    money_raised:"₹4,22,16,292 raised out of ₹5,00,00,000",
    day:"19 days left",
    clock_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/schedule/default/48px.svg",
    heart_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg",
    suppt:"22092 suppoters",
    ctgy:"med",
},
{img_url:"https://kettocdn.gumlet.io/media/campaign/281000/281759/image/wid60211afcc8a19.png?w=320&dpr=1.5",
    desc_:"Offer A Helping Hand To Support Rubina Rodgers' Treatment..",
    profile_pic:"https://cdn.pixabay.com/photo/2021/08/30/11/43/old-man-6585645_1280.jpg",
    name:"By Sabapathy J",
    money_raised:"₹ 78,72,811 raised of ₹ 95,00,000",
    day:"12 days left",
    clock_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/schedule/default/48px.svg",
    heart_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg",
    suppt:"2813 suppoters",
    ctgy:"med",

},
{img_url:"https://kettocdn.gumlet.io/media/campaign/655000/655816/image/wid62d36bac8c03d.jpg?w=300&dpr=1.5",
    desc_:"Help A Dalit Transgender Person Study At University College London",
    profile_pic:"https://kettocdn.gumlet.io/media/individual/3867000/3867788/image/605b13804a28e.jpg?w=50&dpr=1.5",
    name:"By Rishikesh Raut",
    money_raised:"₹ 4,35,631 raised of ₹ 49,04,980",
    day:"84 days left",
    clock_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/schedule/default/48px.svg",
    heart_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg",
    suppt:"471 suppoters",
    ctgy:"ed",

},
{img_url:"https://kettocdn.gumlet.io/media/campaign/254000/254064/image/wid624a108a28adb.png?w=300&dpr=1.5",
    desc_:"A School That Provides Quality Education To Vill..",
    profile_pic:"https://kettocdn.gumlet.io/media/individual/916000/916924/image/632b1b957d5bd.jpg?w=300&dpr=1.5",
    name:"By Parashar Singh",
    money_raised:"₹ ₹ 2,42,817 raised of ₹ 10,00,000 ",
    day:"81 days left",
    clock_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/schedule/default/48px.svg",
    heart_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg",
    suppt:"122 suppoters",
    ctgy:"ed",

},
{img_url:"https://kettocdn.gumlet.io/media/campaign/101000/101541/image/5ced3d289adfb.jpeg?w=768&dpr=1.5",
    desc_:"Old Age Cow And Animal Shelter Home..",
    profile_pic:"https://kettocdn.gumlet.io/media/individual/969000/969172/image/5d0c907f88c26.jpg?w=300&dpr=1.5",
    name:"By Mudassir Irfan",
    money_raised:"₹ 1,36,387 raised of ₹ 5,00,000 ",
    day:"45 days left",
    clock_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/schedule/default/48px.svg",
    heart_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg",
    suppt:"194 suppoters",
    ctgy:"an",

},
{img_url:"https://kettocdn.gumlet.io/media/campaign/179000/179140/image/5e93713c446e4.png?w=768&dpr=1.5",
    desc_:"Show Some Karuna For The Strays During Corona!",
    profile_pic:"https://kettocdn.gumlet.io/media/ngo/48000/48404/image/6199cbf0cd82b.jpg?w=300&dpr=1.5",
    name:"By Blue Cross Of India",
    money_raised:"₹ 19,76,650 raised of ₹ 25,00,000 ",
    day:"20 days left",
    clock_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/schedule/default/48px.svg",
    heart_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg",
    suppt:"885 suppoters",
    ctgy:"an",

},
{img_url:"https://kettocdn.gumlet.io/media/campaign/137000/137654/image/a7772cae3d31a34a344d3f35575c2fa13980aada.jpg?w=768&dpr=1.5",

    desc_:"Plant Trees, Save Himalayas, Save Earth.",
    profile_pic:"https://kettocdn.gumlet.io/media/individual/1180000/1180346/image/5de15b7378627.jpg?w=300&dpr=1.5",
    name:"Ravi Kant Sharma",
    money_raised:"₹ 10,000 raised of ₹ 25,000",
    day:"76 days left",
    clock_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/schedule/default/48px.svg",
    heart_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg",
    suppt:"28 suppoters",
    ctgy:"en",

},
{img_url:"https://kettocdn.gumlet.io/media/campaign/24000/24656/image/49fbe244f68dc8643edbb0abebc0aace2fef3fe2.jpg?w=768&dpr=1.5",
    desc_:"10 Poor Families, Safe Drinking Water, 365 Days!",
    profile_pic:"https://www.unitedwaymumbai.org/storage/user_pics/uid5402_2015-11-03.jpg",
    name:"By Varsha Jain",
    money_raised:"₹ 52,000 raised of ₹ 2,50,000 ",
    day:"68 days left",
    clock_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/schedule/default/48px.svg",
    heart_url:"https://fonts.gstatic.com/s/i/short-term/release/materialsymbolsoutlined/favorite/default/48px.svg",
    suppt:"57 suppoters",
    ctgy:"en"

},]

display(Lsdata);


 
  function display(data){
    container.innerHTML=null;

    data.forEach(function(ele){
    let fund=document.createElement("div");

    let image=document.createElement("img");
    image.src=ele.img_url;
    image.classList.add("pp")

    let heding=document.createElement("h3");
    heding.innerText=ele.desc_;

    let pp=document.createElement("img");
    pp.src=ele.profile_pic;

    let f_name=document.createElement("span");
    f_name.innerText=ele.name;

    let publish=document.createElement("div");
    publish.append(pp,f_name);

    let mny=document.createElement("div");
    mny.innerText=ele.money_raised;

   
    let icn=document.createElement("div");
    icn.classList.add("icn");

    let clock_div=document.createElement("div");
    
    let clock=document.createElement("img");
    clock.src=ele.clock_url
    let i_clock=document.createElement("p");
    i_clock.innerText=ele.day;

    clock_div.append(clock,i_clock);
    icn.append(clock_div);

    let heart_div=document.createElement("div");
    
    let heart=document.createElement("img");
    heart.src=ele.heart_url
    let i_heart=document.createElement("p");
    i_heart.innerText=ele.suppt;

    heart_div.append(heart,i_heart);
    icn.append(heart_div);

    

    fund.append(image,heding,publish,mny,icn);
    container.append(fund);





})
  }

  filter.addEventListener("change",function(){
    if(filter.value===""){
        display(Lsdata);
    }else{
        console.log(filter.value);
        let filterD=Lsdata.filter(function(ele){
            return ele.ctgy== filter.value;
        })
        display(filterD);
    }
})

