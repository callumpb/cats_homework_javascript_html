const app = function () {

  // const ul = document.createElement('ul');
  // ul.classList.add('cat');
  //
  // const name = document.createElement('li');
  // name.innerText = 'Hamish the Danish';
  //
  // const favouriteFood = document.createElement('li')
  // favouriteFood.innerText = 'danish';
  //
  // const imageLi = document.createElement('li')
  // // imageLi.innerText = '';
  //
  // const image = document.createElement('img')
  // image.src = 'https://ih1.redbubble.net/image.22839457.9845/flat,1000x1000,075,f.u3.jpg';
  //
  // imageLi.appendChild(image);
  // ul.appendChild(name)
  // ul.appendChild(favouriteFood)
  // ul.appendChild(imageLi)
  //
  // const cats = document.querySelector('#cats')
  // cats.appendChild(ul);
  const image = "https://ih1.redbubble.net/image.22839457.9845/flat,1000x1000,075,f.u3.jpg"
createCat(image, 'Hamish the Danish', 'Danish')
}

const createUl = function() {
  const ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
};

const createName = function(text) {
  const name = document.createElement('li');
  name.innerText = text;
  return name;
};

const createFavouriteFood = function(food) {
  const favouriteFood = document.createElement('li');
  favouriteFood.innerText = food;
  return favouriteFood;
};

const createImageLi = function() {
  const imageLi = document.createElement('li');
  return imageLi;
};

const createImage = function(url) {
  const image = document.createElement('img');
  image.src = url;
  return image;
}

const appendElements = function(ul, image, name, favouriteFood, imageLi) {
  imageLi.appendChild(image);
  ul.appendChild(name)
  ul.appendChild(favouriteFood)
  ul.appendChild(imageLi)

  const cats = document.querySelector('#cats')
  cats.appendChild(ul);

};

const createCat = function(image, name, favouriteFood) {
  const ul = createUl()
  const Catname = createName(name)
  const CatFavouriteFood = createFavouriteFood(favouriteFood)
  const imageLi = createImageLi()
  const createImg = createImage(image)
  appendElements(ul, createImg, Catname, CatFavouriteFood, imageLi)
}


document.addEventListener('DOMContentLoaded', app);
