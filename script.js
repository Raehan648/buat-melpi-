document.addEventListener('DOMContentLoaded', () => {
    // 0. Autoplay Music
    const music = document.getElementById('background-music');
    // Mencoba memutar musik. Karena browser modern memblokir autoplay,
    // kita coba putar saat dokumen dimuat, atau saat tombol diklik.
    music.volume = 0.4; // Atur volume agar tidak terlalu keras
    music.play().catch(error => {
        console.log("Autoplay diblokir. Musik akan diputar saat tombol pertama diklik.");
    });


    // 1. Efek Ketik (Typing Effect)
    const typingElement = document.getElementById('typing-text');
    const textToType = "Untuk Melpi... Maaf dariku.";
    let charIndex = 0;
    const typingSpeed = 90; 

    function typeText() {
        if (charIndex < textToType.length) {
            typingElement.textContent += textToType.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            typingElement.style.borderRight = 'none';
        }
    }

    typeText();

    // 2. Logika Tombol Tampil/Sembunyi Pesan
    const openButton = document.getElementById('open-message');
    const messageDiv = document.getElementById('apology-message');

    openButton.addEventListener('click', () => {
        // Coba putar musik lagi, untuk memastikan jika autoplay diblokir
        music.play().catch(error => {
            console.log("Musik diputar setelah klik tombol.");
        });

        if (messageDiv.classList.contains('hidden')) {
            messageDiv.classList.remove('hidden');
            openButton.textContent = 'Terima Kasih 🙏'; 
        } else {
            // Biarkan pesan tetap terbuka setelah dibuka (biasanya lebih baik untuk pesan penting)
            openButton.textContent = 'Pesan Sudah Terbuka';
        }
    });
});