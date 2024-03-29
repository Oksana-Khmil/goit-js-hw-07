import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const galleryMarkup = galleryBox(galleryItems);
gallery.insertAdjacentHTML("beforeend", galleryMarkup);
gallery.addEventListener('click', clickOnImg);



function galleryBox(images) {
 return images
        .map(({ preview, original, description }) => {
        return `
    <div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
    </a>
    </div>`
        })
        .join("");
}



function clickOnImg(event) {
    event.preventDefault();
    if (!event.target.classList.contains('gallery__image')) {
        return;
    }
    const link = event.target.dataset.source;
    modalOpen(link);
    
};
function modalOpen(image) {
  const instance = basicLightbox.create(
        `<img src="${image}" width="800" height="600">`
    );
    instance.show();

     window.addEventListener('keydown', event => {
       if (event.code === 'Escape') {
           instance.close();
    }});
    }


  


