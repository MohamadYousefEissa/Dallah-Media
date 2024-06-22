const boxContent = `
            <div class="d-flex flex-row flex-md-column flex-wrap column-gap-3  gap-md-5" id="titleContent">
               
            </div>
            <div class="d-flex flex-column" id="articleContent">
          
            </div>
            <div>
                <div class="fixed-img"></div>
            </div>
`;
const box = document.querySelector("#box");
box.innerHTML = boxContent;
const titleContent = document.querySelector("#titleContent");
const articleContent = document.querySelector("#articleContent");
const image = document.querySelector(".fixed-img");

data.forEach((res, i) => {
  const span = document.createElement("span");
  span.innerText = res.title;
  titleContent.appendChild(span);
  if (i === 0) {
    span.innerText = res.afterClickTitle;
    image.innerHTML = `<img src="${res.imgSrc}" />`;
    span.classList.add("active-title");
    res.articles.forEach((article) => {
      articleContent.innerHTML += `
          <article>
          <h6>${article.label}</h6>
          <p>${article.para}</p>
          </article>
          `;
    });
  }
  span.addEventListener("click", () => {
    unactiveSpans();
    changeTitle(i, span);
    changeArticle(i);
    changeImage(i);
    span.classList.add("active-title");
    setTimeout(() => {
      box.scrollTo({ top: 50, left: 0, behavior: "smooth" });
    }, 300);
  });
});

function unactiveSpans() {
  for (let x = 0; x < data.length; x++) {
    const span = document.querySelectorAll("#titleContent span")[x];
    span.innerText = data[x].title;
    span.classList.remove("active-title");
  }
}

function changeTitle(i, span) {
  span.innerText = data[i].afterClickTitle;
}

function changeArticle(i) {
  articleContent.innerHTML = "";
  for (article of data[i].articles) {
    articleContent.innerHTML += `
    <article>
    <h6>${article.label}</h6>
    <p>${article.para}</p>
    </article>
    `;
  }
}

function changeImage(i) {
  image.innerHTML = `<img src="${data[i].imgSrc}" />`;
}
