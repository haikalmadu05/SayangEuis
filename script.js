document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showImagesButton');
    const imagesContainer = document.getElementById('imagesContainer');
    const datetimeElement = document.getElementById('datetime');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeModal = document.querySelector('.close');
    const imageContainers = document.querySelectorAll('.image-container');
    const giftButton = document.getElementById('giftButton');
    const captions = [
        'Aku Sangat Menyayangimu.',
        'Tawamu Candu banget sayangkuu.',
        'Kau Adalah Semestaku.',
        'Senyummu adalah obat terbaikku.',
        'Kau adalah bintang di langit malamku.',
        'Tanpamu, hidupku tak lengkap.'
    ];
    const images = [
        'foto1.jpg',
        'foto2.jpg',
        'foto3.jpg',
        'foto4.jpg',
        'foto5.jpg',
        'foto6.jpg'
    ];
    let currentIndex = 0;

    // Tampilkan waktu
    function updateDateTime() {
        const now = new Date();
        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        datetimeElement.textContent = now.toLocaleString('id-ID', options);
    }

    button.addEventListener('click', () => {
        if (imagesContainer.style.display === 'none' || imagesContainer.style.display === '') {
            imagesContainer.style.display = 'flex';
        } else {
            imagesContainer.style.display = 'none';
        }
    });

    imageContainers.forEach(container => {
        container.addEventListener('click', function() {
            if (currentIndex < imageContainers.length) {
                showModal(currentIndex);
                currentIndex++;
            }
        });
    });

    function showModal(index) {
        modalImage.src = images[index];
        modalCaption.textContent = captions[index];
        modal.style.display = 'block';

        setTimeout(() => {
            modal.style.display = 'none';
            const imgElement = `<img src="${images[index]}" alt="Gambar ${index + 1}" class="image">`;
            const captionElement = `<p class="caption">${captions[index]}</p>`;
            imageContainers[index].innerHTML = imgElement + captionElement;
            imageContainers[index].style.opacity = 1;
            imageContainers[index].style.transition = 'opacity 0.5s ease';

            // Tampilkan tombol setelah gambar terakhir muncul
            if (currentIndex === imageContainers.length) {
                giftButton.style.display = 'block';
            }
        }, 3000); // Waktu delay sebelum modal hilang
    }

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    giftButton.addEventListener('click', () => {
        window.location.href = 'flower.html'; // Arahkan ke halaman flower.html
    });

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Fungsi untuk membuat efek salju
    function createSnowflakes() {
        const snowflakesContainer = document.getElementById('snowflakes');
        const totalSnowflakes = 100; // Jumlah salju yang ingin ditampilkan

        for (let i = 0; i < totalSnowflakes; i++) {
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Durasi jatuhnya salju
            snowflake.style.animationDelay = `${Math.random() * 5}s`; // Jeda animasi salju
            snowflake.style.opacity = Math.random();
            snowflakesContainer.appendChild(snowflake);
        }
    }

    // Panggil fungsi untuk membuat efek salju
    createSnowflakes();
});
