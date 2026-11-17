const photos = [
  { title: 'Rīgas panorāma', alt: 'Rīgas vecpilsēta un baznīcu torņi', src: 'assets/00-rigas-panorama.png' },
  { title: 'Jūgendstila nams', alt: 'Dekorēta jūgendstila ēka Rīgā', src: 'assets/02-jugendstila-nams.png' },
  { title: 'Rundāles pils', alt: 'Rundāles pils un puķu dārzs', src: 'assets/03-rundales-pils.png' },
  { title: 'Turaidas pils', alt: 'Turaidas pils sarkano ķieģeļu torņi', src: 'assets/04-turaidas-pils.png' },
  { title: 'Melngalvju nams', alt: 'Melngalvju nams Rīgas vecpilsētā', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/House%20of%20Blackheads%20Riga%20Latvia.jpg?width=960' },
  { title: 'Rīgas Doms', alt: 'Rīgas Doma katedrāle', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Riga%20Cathedral%20%2823075759694%29.jpg?width=960' },
  { title: 'Cēsu viduslaiku pils', alt: 'Cēsu viduslaiku pils', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/C%C4%93sis%20medieval%20castle.jpg?width=960' },
  { title: 'Kuldīgas vecpilsēta', alt: 'Ķieģeļu tilts pār Ventu Kuldīgā', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Kuld%C4%ABga%20brick%20bridge.jpg?width=960' },
  { title: 'Gaismas pils', alt: 'Latvijas Nacionālā bibliotēka jeb Gaismas pils', src: 'https://commons.wikimedia.org/wiki/Special:FilePath/National%20Library%20of%20Latvia%20%2814628683686%29.jpg?width=960' },
];

const carouselImage = document.querySelector('#carousel-image');
const carouselCaption = document.querySelector('#carousel-caption');
const previousButton = document.querySelector('#previous-button');
const nextButton = document.querySelector('#next-button');
const pauseButton = document.querySelector('#pause-button');

let activePhoto = 0;
let timer = null;
let isPaused = false;

function showPhoto(index) {
  activePhoto = (index + photos.length) % photos.length;
  const photo = photos[activePhoto];
  carouselImage.src = photo.src;
  carouselImage.alt = photo.alt;
  carouselCaption.textContent = `${activePhoto + 1}. attēls — ${photo.title}`;
}

previousButton.addEventListener('click', () => showPhoto(activePhoto - 1));
nextButton.addEventListener('click', () => showPhoto(activePhoto + 1));

function startSlideshow() {
  clearInterval(timer);
  timer = setInterval(() => showPhoto(activePhoto + 1), 5000);
}

pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseButton.setAttribute('aria-pressed', String(isPaused));

  if (isPaused) {
    clearInterval(timer);
    timer = null;
    pauseButton.textContent = 'Atsākt automātisko maiņu';
  } else {
    pauseButton.textContent = 'Apturēt automātisko maiņu';
    startSlideshow();
  }
});

showPhoto(activePhoto);
startSlideshow();
