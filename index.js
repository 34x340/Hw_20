// 1 ///
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.image');
    const fullImageBackdrop = document.querySelector('.backdrop__img');
    const fullImage = document.querySelector('.imagee');
    const closeButton = document.querySelector('.close');
    let currentIndex = 0;
  
    function showFullImage(index) {
      fullImage.src = images[index].src;
      fullImageBackdrop.style.display = 'block';
      currentIndex = index;
    }
    function nextImage() {
      currentIndex = (currentIndex + 1);
      showFullImage(currentIndex);
    }
    function prevImage() {
      currentIndex = (currentIndex - 1);
      showFullImage(currentIndex);
    }
    function closeFullImage() {
        fullImageBackdrop.style.display = 'none';
    }

    document.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowRight') {
        nextImage();
      } else if (event.key === 'ArrowLeft') {
        prevImage();
      } else if (event.key === 'Escape') {
        closeFullImage();
      }
    });

    images.forEach(function(image, index) {
      image.addEventListener('click', function() {
        showFullImage(index);
      });
    });
    closeButton.addEventListener('click', closeFullImage);
  });

// 2 ///

const input = document.querySelector('input');
const newBtn = document.querySelector('button[data-action="new"]');
const deleteBtn = document.querySelector('button[data-action="delete"]');
const boxesContainer = document.getElementById('boxes');

newBtn.addEventListener('click', createBoxes);
deleteBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = input.value;
  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomColor();
    boxes.push(box);
  }

  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}

function getRandomColor() {
  const fColor = Math.floor(Math.random() * 256);
  const sColor = Math.floor(Math.random() * 256);
  const tColor = Math.floor(Math.random() * 256);
  return `rgb(${fColor},${sColor},${tColor})`;
}