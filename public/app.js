const cats = [
  {
  name: 'Boba',
  favouriteFood: 'Sock fluff',
  image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'
},
  {
  name: 'Barnaby',
  favouriteFood: 'Tuna',
  image: 'https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg'
},
  {
  name: 'Max',
  favouriteFood: 'Whiskas Temptations',
  image: 'http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg'
  }
]


const app = function () {
  for(let cat of cats) {
    createCat(cat.image, cat.name, cat.favouriteFood)
  }


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
};

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
