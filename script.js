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
  loadSpinner(true)
    const res = await fetch('https://openapi.programming-hero.com/api/peddy/pets');
    const data = await res.json();
    setTimeout(() => {
      displayAllPets(data.pets);
      loadSpinner(false)
    }, 2000);
}
const displayAllPets = async (pets)=>{
  console.log(pets);
  const allPetsContainer = document.getElementById('all-pet-container');
  pets.forEach( (pet) =>{
    const div = document.createElement("div");
    div.classList.add('flex', 'flex-col', 'gap-2', 'p-4', 'border', 'rounded-xl', 'font-bold');
    div.innerHTML = `
    <img class="h-36 w-full rounded-lg border" src="${pet.image}" alt="">
    `
    allPetsContainer.appendChild(div);
  })

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
