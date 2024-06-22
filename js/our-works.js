const data = [
  {
    title: "title123",
    imgSrc: "./images/thumb1.jpg",
    youtubeLink:
      "https://www.youtube.com/embed/eo5LWKHzgXE?si=JIY8Y4hF1aqWxuBP",
    article:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis distinctio iste itaque vel corrupti. Est ad ratione sapiente, adipisci facilis sit blanditiis deleniti quasi voluptatem sequi similique quia autem!",
  },
  {
    title: "title2",
    imgSrc: "./images/thumb2.jpg",
    youtubeLink:
      "https://www.youtube.com/embed/eo5LWKHzgXE?si=JIY8Y4hF1aqWxuBP",
    article:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis distinctio iste itaque vel corrupti. Est ad ratione sapiente, adipisci facilis sit blanditiis deleniti quasi voluptatem sequi similique quia autem!",
  },
  {
    title: "title3",
    imgSrc: "./images/thumb3.jpg",
    youtubeLink:
      "https://www.youtube.com/embed/eo5LWKHzgXE?si=JIY8Y4hF1aqWxuBP",
    article:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis distinctio iste itaque vel corrupti. Est ad ratione sapiente, adipisci facilis sit blanditiis deleniti quasi voluptatem sequi similique quia autem!",
  },
  {
    title: "title4",
    imgSrc: "./images/thumb4.jpg",
    youtubeLink:
      "https://www.youtube.com/embed/eo5LWKHzgXE?si=JIY8Y4hF1aqWxuBP",
    article:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis distinctio iste itaque vel corrupti. Est ad ratione sapiente, adipisci facilis sit blanditiis deleniti quasi voluptatem sequi similique quia autem!",
  },
  {
    title: "title5",
    imgSrc: "./images/thumb5.jpg",
    youtubeLink:
      "https://www.youtube.com/embed/eo5LWKHzgXE?si=JIY8Y4hF1aqWxuBP",
    article:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis distinctio iste itaque vel corrupti. Est ad ratione sapiente, adipisci facilis sit blanditiis deleniti quasi voluptatem sequi similique quia autem!",
  },
  {
    title: "title6",
    imgSrc: "./images/thumb6.jpg",
    youtubeLink:
      "https://www.youtube.com/embed/eo5LWKHzgXE?si=JIY8Y4hF1aqWxuBP",
    article:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius perspiciatis distinctio iste itaque vel corrupti. Est ad ratione sapiente, adipisci facilis sit blanditiis deleniti quasi voluptatem sequi similique quia autem!",
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
                <p>
                ${data[i].article}
                </p>
              </article>

              <h4 class="mt-5 mb-4">other cases</h4>
              <div class="d-flex gap-4 flex-wrap" id="cases-container">

              </div>
            </div>
            <div class="col">
              <iframe
                width="100%"
                height="100%"
                src=${data[i].youtubeLink}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
                autoplay
              ></iframe>
            </div>
          </div>
        </div>
  `;
  box.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  renderRandomCases(i);
}
const main = document.querySelector("main");
window.addEventListener("click", (ev) => {
  if (!main.contains(ev.target) && !ev.target.classList.contains("in-item")) {
    renderItems();
    console.log("asd");
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
