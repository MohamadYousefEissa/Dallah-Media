const data = [
  {
    title: "gmcqatar: the sierra at4",
    label: "the spirit of freedom",
    imgSrc: "./images/our works/1-gmcqatar.jpg",
    youtubeLink: "https://youtube.com/embed/eo5LWKHzgXE",
    mode: "video",
    article:
      "To promote the GMC Sierra AT4 (Single Cab), we created a compelling TVC titled ‘The Spirit of Freedom' for Mannai Auto. Filmed at horse stables and the desert, the TVC featured stunning visuals of the Sierra AT4 alongside a horse, symbolizing freedom and adventure.</br></br>The production combined epic and emotional storytelling, with beauty shots of the stables and dynamic desert scenes. We used a single talent, a stunt driver, and a stunt horse rider to bring the story to life, complemented by a powerful Arabic voiceover and a thematic soundtrack. This strategic, all-in-one-day shoot effectively highlighted the Sierra AT4’s versatility and appeal to Qatari buyers, blending lifestyle imagery with practical features.",
  },
  {
    title: "dhmqatar: what makes a great friend?",
    label: "#qnd2023",
    imgSrc: "./images/our works/2-qnd2023.jpg",
    youtubeLink: "https://www.youtube.com/embed/UbeLdOCO94I",
    mode: "video",
    article:
      "To Celebrate Qatar National Day 2023, we went the unconventional way to think differently. In this video, we’ve highlighted friendship, and the parallelism that the little Qatari girl has with the teddy bear - her best friend – to the relationship of Qatar & Dallah Holding Media, as they both #growtogether",
  },
  {
    title: "afc asian cup: 100 days to go",
    label: "dooh & social media",
    imgSrc: "./images/our works/3-afc-100dtg.jpg",
    youtubeLink: "https://www.youtube.com/embed/eo5LWKHzgXE",
    mode: "gallery",
    images: [
      "./images/our works/100dtg-1.jpg",
      "./images/our works/100dtg-2.jpg",
      "./images/our works/100dtg-3.jpg",
      "./images/our works/100dtg-4.jpg",
      "./images/our works/100dtg-5.jpg",
      "./images/our works/100dtg-6.jpg",
    ],
    article:
      "With 100 days to go to Asia’s most prestigious men’s tournament, the Asian Football Confederation (AFC) and the AFC Asian Cup Qatar 2023™ Local Organising Committee (LOC) unveiled the official slogan of the competition: Hayya Asia. We were given the opportunity to create and implement all communication on multiple mediums. Our work included social media, digital, outdoor, print, and DOOH campaigns.",
  },
  {
    title: "qfa: afc 2027 bidding nation qatar",
    label: "ribbons celebrating our gift to asia",
    imgSrc: "./images/our works/4-afc-bid2027.jpg",
    youtubeLink: "https://www.youtube.com/embed/cgMlgSwLPNI",
    mode: "video",
    article:
      "The concept of the emblem reveal film is focused on “Ribbons celebrating our gift to Asia”. Qatar is a spectacular land where bleeding-edge innovation, sophisticated technology, and visionary architecture can be witnessed virtually everywhere. However, with every new step into the future, we do not forget to pay homage to the deep fabric of our culture as it nourishes our dreams and our vision for an ever-evolving Qatar.Our culture is the ribbon wrapping Qatar's celebration gift to Asia: The 2027 AFC Asian Cup. The video is a mix of stock footage, stock images edited and animated, along with CGI.",
  },
  {
    title: "qafco: the vikings have landed",
    label: "a qafco story",
    imgSrc: "./images/our works/5-qafco-vikings.jpg",
    youtubeLink: "https://www.youtube.com/embed/49TF1v6y6nU",
    mode: "video",
    article:
      "Made for QAFCO’s 50th joint venture anniversary with Norwegian counterpart, Yara. This is a film that portrays a fictitious Viking arrival on the shores of Qatar, and a narrative that symbolises the age-old bond between Qatar and Norway. A beautifully-filmed suspense drama, with historically-accurate production design and brilliantly-integrated CGI, we sail with Viking boats, succumb to a sandstorm and witness the tale of a kinship like no other.",
  },
  {
    title: "qafco: the key",
    label: "50th anniversary",
    imgSrc: "./images/our works/6-qafco-the key.jpg",
    youtubeLink: "https://www.youtube.com/embed/vODSZvpaKBQ",
    mode: "video",
    article:
      "Our film plays with time to make it a more emotional, interesting and better visual narrative. An elder Qatari man looks through his old box of work and travel photos and encourages his son to go off and do the same to see the power of QAFCO across the world.We filmed in two locations, Qatar and South Africa, but the film will feel like we’ve visited an abundance of locations around the world:",
    list: [
      "Qatar - Plantation",
      "Qatar - Farmhouse / Conservatory",
      "Somewhere (international) - Son in car",
      "South Africa",
      "India",
      "China",
      "Vietnam",
      "Scandinavia",
      "United States",
      "South America",
      "East Africa",
    ],
  },
];
const box = document.querySelector("#box");
function renderItems() {
  box.innerHTML = `
  <div class="container">
  <div
  class="row row-cols-lg-3 row-cols-md-2 justify-content-center"
  ></div>
  </div>
  `;
  const container = box.querySelector(".row");
  data.forEach((res, i) => {
    const item = document.createElement("div");
    const span = document.createElement("span");
    const img = document.createElement("img");
    item.className = "item d-flex flex-column align-items-center in-item";
    span.className = "align-self-start in-item";
    img.className = "img-fluid in-item";
    span.innerHTML = res.title;
    img.src = res.imgSrc;
    img.alt = "image";
    item.appendChild(span);
    item.appendChild(img);
    container.appendChild(item);
    item.addEventListener("click", () => {
      renderContent(i);
      box.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    });
  });
}
renderItems();
function renderContent(i) {
  box.innerHTML = `
  <div class="container-fluid p-4">
          <div
            class="row justify-content-center selectedItem gap-5 flex-xl-row flex-column-reverse"
          >
            <div class="col-12 col-xl-6">
              <h1>${data[i].title}</h1>
              <article>
              <h6>${data[i].label}</h6>
                <p>
                ${data[i].article}
                ${isHaveList(i)}
                </p>
              </article>

              <h4 class="mt-5 mb-4">other cases</h4>
              <div class="d-flex gap-4 flex-wrap" id="cases-container">

              </div>
            </div>
            <div class="col">
              ${modeOfCase(data[i].mode, i)}
            </div>
          </div>
        </div>
  `;
  box.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  renderRandomCases(i);
  Fancybox.bind('[data-fancybox="gallery"]', {
    Slideshow: {
      playOnStart: true,
    },
  });
  if (data[i].mode === "gallery") {
    new Carousel(
      document.getElementById("myCarousel"),
      {
        Autoplay: {
          pauseOnHover: false,
          timeout: 2000,
        },
      },
      {
        Autoplay,
      }
    );
  }
}
const main = document.querySelector("main");
window.addEventListener("click", (ev) => {
  if (!main.contains(ev.target) && !ev.target.classList.contains("in-item")) {
    renderItems();
  }
});

function renderRandomCases(i) {
  let x = 0;
  const randomCases = [];
  while (x < 3) {
    const randomIndex = Math.floor(Math.random() * data.length);
    if (!randomCases.includes(randomIndex) && i !== randomIndex) {
      createCase(randomIndex);
      randomCases.push(randomIndex);
      x++;
    }
  }
}
function createCase(i) {
  const casesContainer = document.querySelector("#cases-container");
  const div = document.createElement("div");
  const img = document.createElement("img");
  const span = document.createElement("span");
  div.className = "in-item";
  img.className = "in-item";
  span.className = "in-item";
  span.innerHTML = data[i].title;
  img.src = data[i].imgSrc;
  div.appendChild(img);
  div.appendChild(span);
  casesContainer.appendChild(div);
  div.addEventListener("click", () => {
    renderContent(i);
  });
}

function modeOfCase(mode, i) {
  if (mode === "video") {
    return `
                <iframe
                width="100%"
                src=${data[i].youtubeLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                autoplay
              ></iframe>
  `;
  } else {
    let sliderImages = ``;
    data[i].images.forEach((image) => {
      sliderImages += `
       <a
          class="f-carousel__slide"
          data-fancybox="gallery"
          href="${image}"
          >
          <img class="inf-main-img" src="${image}" alt="horse" />
        </a>
      `;
    });
    return `
        <div class="f-carousel" id="myCarousel">
          ${sliderImages}
        </div>
    `;
  }
}

function isHaveList(i) {
  if (!data[i].list) return ``;
  let list = ``;
  data[i].list.forEach((item) => {
    list += `
<li>${item}</li>
`;
  });
  return `
       <ul>
         ${list}
       </ul>
`;
}
