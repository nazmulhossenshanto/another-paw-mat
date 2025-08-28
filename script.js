// load category
const loadCategory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/peddy/categories"
  );
  const data = await res.json();
  displayCategory(data.categories);
};
// load all pets
const loadAllPet = async ()=>{
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    console.log(data.pets);
}
// display categories
const displayCategory = (data) => {
  const categoryContainer = document.getElementById("category-container");
  data.forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button class="btn category-btn flex items-center gap-4 rounded-xl border px-14 py-4 cursor-pointer h-full">
    <img src="${category.category_icon}" alt="" >
    <p>${category.category}</p>
    </button>
    `;
    categoryContainer.appendChild(div);
  });
};
loadCategory();
loadAllPet();
