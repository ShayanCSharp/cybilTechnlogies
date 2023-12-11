const data = [
  {
    img: "assets/images/blog/3750605.jpg",
    title:
      "USING ANIMATED SOCIAL MEDIA MARKETING VIDEOS FOR BETTER CONTENT & ADS",
    link: "Social_Media_Video_Animation_Blog.html",
  },
  {
    img: "https://img.freepik.com/free-vector/marketing-graphic-designer-showing-design-project_3446-700.jpg?w=740&t=st=1702240933~exp=1702241533~hmac=837d83b0a8e957442569c9dee1304c1e3790c9647865927d77b376fe599923b3",
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
