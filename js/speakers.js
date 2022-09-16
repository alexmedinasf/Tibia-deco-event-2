const seeMore = document.getElementById('see-more-link');
const speakers = document.getElementById('speakers');
const speakerData = [
  {
    name: 'Suzy Kills',
    role: 'Creator of the project',
    description: 'Tibia Home co-founder. Creator of decorations. Leader of Tibia Home project',
    image: './images/Suzy-Kill-Gladera.jpg',
  },
  {
    name: 'Divine Angel',
    role: 'Decoration Creator and partner',
    description: 'Partner of Tibia Home. Creator of decorations.',
    image: './images/divine-angel.jpg',
  },
];

function generateLi(index) {
  const li = document.createElement('li');
  const photo = document.createElement('div');
  const info = document.createElement('div');
  const h3 = document.createElement('h3');
  const h4 = document.createElement('h4');
  const p = document.createElement('p');
  const hr = document.createElement('hr');

  photo.classList.add('photo');
  info.classList.add('info');

  photo.innerHTML = `<div class="pattern"> </div><img src="${speakerData[index].image}" alt="${speakerData[index].name}"></div>`;
  h3.innerText = speakerData[index].name;
  h4.innerText = speakerData[index].role;
  p.innerHTML = speakerData[index].description;

  info.appendChild(h3);
  info.appendChild(h4);
  info.appendChild(hr);
  info.appendChild(p);

  li.appendChild(photo);
  li.appendChild(info);
  if (index > 1) {
    li.classList.add('hidden-speaker');
  }
  return li;
}

for (let i = 0; i < speakerData.length; i += 1) {
  speakers.appendChild(generateLi(i));
}

seeMore.addEventListener('click', () => {
  for (let i = 0; i < speakers.children.length; i += 1) {
    if (i > 1) {
      speakers.children[i].classList.toggle('hidden-speaker');
    }
  }
  if (speakers.lastChild.classList.contains('hidden-speaker')) {
    seeMore.innerHTML = 'More <i class="fa-solid fa-angle-down"></i>';
  } else {
    seeMore.innerHTML = 'Less <i class="fa-solid fa-angle-up"></i>';
  }
});