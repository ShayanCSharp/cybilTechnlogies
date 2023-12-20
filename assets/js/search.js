const data = [
  {
    img: "assets/images/blog/blog2.webp",
    title:
      "USING ANIMATED SOCIAL MEDIA MARKETING VIDEOS FOR BETTER CONTENT & ADS",
    link: "Social_Media_Video_Animation_Blog.html",
  },
  {
    img: "assets/images/blog/blog1.webp",
    title: "TOP 8 WHITEBOARD ANIMATION VIDEO TIPS IN 2024",
    link: "Top 8 Whiteboard Animation Video Tips.html",
  },
];

let main = document.querySelector(".blogSearch ul");
let search = document.querySelector("#blogSearch");

const displayData = (filterData) => {
  main.innerHTML = filterData.map((product) => {
    return `
        <li>
            <a href="${product.link}">
                <img src="${product.img}" alt="">
                <div class="searchRes">
                   <h5>${product.title}</h5>
                </div>
            </a>
        </li>
        `;
  });
};

search.addEventListener("keyup", (e) => {
  const val = e.target.value.toLowerCase();

  if (val) {
    displayData(
      data.filter((item) => item.title.toLowerCase().indexOf(val) !== -1)
    );
  } else {
    main.innerHTML = "";
  }
});
