console.log('%c HI', 'color: firebrick')

function fetchImage() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(result => {
        result.message.forEach(image => addImage(image))
    });
}
  
function addImage(pic) {
    let container = document.querySelector('#dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = pic;
    container.appendChild(newImage);
}

function fetchBreed() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(result => breedList(result));
}

function breedList(breedsArray) {
    const breedContainer = document.querySelector("#dog-breeds");
    breeds = Object.keys(breedsArray.message);
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        breedContainer.append(li);
        makePinkOnClick(li);
    });
}

function makePinkOnClick(li) {
  li.addEventListener("click", function(e) {
    li.style.color = "hotpink";
  });
}


document.addEventListener('DOMContentLoaded', function() {
    fetchImage();
    fetchBreed();
   
    const breedDropdown = document.querySelector('#breed-dropdown')
    console.log(breedDropdown);

    breedDropdown.addEventListener('change', function(e) {
        debugger;
        // let allBreeds = [];
         const letter = e.target.value
         console.log(fetchBreed())
        // const filtered = fetchBreed().filter((breed) => breed.startsWith(letter))
        // dogBreedUl.innerHTML = breedList(filtered)
    })
});
