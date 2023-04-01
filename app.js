const container = document.querySelector("#container");

const paragraph = document.createElement("p");
paragraph.textContent = "Hey i am red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

const headingh3 = document.createElement("h3");
headingh3.textContent = "Hey i am blue!";
headingh3.style.color = "blue";
container.appendChild(headingh3);

const div = document.createElement("div");
div.style.border = "1px solid";

const headingh1 = document.createElement("h1");
headingh1.textContent = "I am in a div";
div.appendChild(headingh1);

const paragr = document.createElement("p");
paragr.textContent = "ME TOO";
div.appendChild(paragr);

container.appendChild(div);

div.addEventListener("mouseover", function (e) {
  alert(e);
});
