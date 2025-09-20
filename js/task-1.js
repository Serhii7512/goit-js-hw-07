const categories = document.querySelectorAll("#categories .item");
console.log("Namber of categories:", categories.length);
categories.forEach(category => {
  const title = category.querySelector("h2").textContent;
  const elementsAmount = category.querySelectorAll("ul li").length;

  console.log("Category:", title);
  console.log("Elements:", elementsAmount);
});