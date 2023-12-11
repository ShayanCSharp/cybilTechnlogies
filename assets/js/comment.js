let counter = document.querySelector(".commentSec h3 span");
let countVal = parseInt(localStorage.getItem("commentCount")) || 2; // Load counter value from local storage

document.querySelector(".postCommentForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#commentName").value;
    let comment = document.querySelector("#commentMessage").value;
    addComment(name, comment);
    countVal++;
    counter.textContent = countVal;

    // Save the updated counter value to local storage
    localStorage.setItem("commentCount", countVal.toString());
});

// Load comments and counter from local storage when the page loads
document.addEventListener("DOMContentLoaded", () => {
    loadComments();
    counter.textContent = countVal;
});

const addComment = (name, comment) => {
    let main = document.querySelector(".comMain");
    let date = new Date();
    let todayDate = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let div = document.createElement("div");
    div.classList.add("comment");
    div.innerHTML = `
        <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1702224105~exp=1702224705~hmac=42416a8486dc0cafa43c3e89f2dd72249e39de25377eb68db569cce545477f36" alt="IMG">
        <div class="comDes">
            <h4>${name} <span>${todayDate}/${month}/${year}</span></h4>
            <p>${comment}</p>
        </div>
    `;

    main.appendChild(div);

    // Save the comment in local storage
    saveCommentToLocalStorage(name, comment, todayDate, month, year);
};

const saveCommentToLocalStorage = (name, comment, todayDate, month, year) => {
    // Check if there are existing comments in local storage
    let existingComments = JSON.parse(localStorage.getItem("comments")) || [];

    // Add the new comment to the existing comments
    let newComment = {
        name: name,
        comment: comment,
        date: `${todayDate}/${month}/${year}`
    };

    existingComments.push(newComment);

    // Save the updated comments back to local storage
    localStorage.setItem("comments", JSON.stringify(existingComments));
};

const loadComments = () => {
    let main = document.querySelector(".comMain");
    // Get comments from local storage
    let existingComments = JSON.parse(localStorage.getItem("comments")) || [];

    // Display each comment
    existingComments.forEach((comment) => {
        let div = document.createElement("div");
        div.classList.add("comment");
        div.innerHTML = `
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1702224105~exp=1702224705~hmac=42416a8486dc0cafa43c3e89f2dd72249e39de25377eb68db569cce545477f36" alt="IMG">
            <div class="comDes">
                <h4>${comment.name} <span>${comment.date}</span></h4>
                <p>${comment.comment}</p>
            </div>
        `;

        main.appendChild(div);
    });
};
