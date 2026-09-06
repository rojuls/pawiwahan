document.addEventListener('DOMContentLoaded', function() {
  
  // 1. COUNTDOWN KE 23 SEPTEMBER 2026 09:00
  const weddingDate = new Date("Sep 23, 2026 09:00:00").getTime();
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const hari = Math.floor(distance / (1000 * 60 * 60 * 24));
    const jam = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const menit = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const detik = Math.floor((distance % (1000 * 60)) / 1000);

    if(document.getElementById("hari")) {
      document.getElementById("hari").innerHTML = hari;
      document.getElementById("jam").innerHTML = jam;
      document.getElementById("menit").innerHTML = menit;
      document.getElementById("detik").innerHTML = detik;
    }

    if (distance < 0) {
      clearInterval(x);
      if(document.getElementById("timer")) {
        document.getElementById("timer").innerHTML = "<h4>Acara Sudah Dimulai</h4>";
      }
    }
  }, 1000);

  // 2. KODE MUSIK
  const audio = document.getElementById('backsound');
  const btnMusik = document.getElementById('btn-musik');
  let isPlaying = false;

  // 3. KODE BUKA UNDANGAN + ILANGIN COVER
  const btnBuka = document.querySelector('.btn-buka');
  const cover = document.querySelector('.cover');
  
  if(btnBuka) {
    btnBuka.addEventListener('click', (e) => {
      e.preventDefault();
      
      // A. Buka lock scroll di body
      document.body.classList.remove('lock-scroll');
      
      // B. Kasih efek fade out ke cover
      cover.classList.add('hide');
      
      // C. Scroll slow motion ke section #isi setelah 0.5 detik
      setTimeout(() => {
        document.getElementById('isi').scrollIntoView({ behavior: 'smooth' });
      }, 500);
      
      // D. Play musik
      if(audio) {
        audio.play();
        isPlaying = true;
        btnMusik.innerHTML = '🔊';
      }
    });
  }

  // 4. Toggle play/pause
  if(btnMusik) {
    btnMusik.addEventListener('click', () => {
      if(isPlaying) {
        audio.pause();
        btnMusik.innerHTML = '🔇';
      } else {
        audio.play();
        btnMusik.innerHTML = '🔊';
      }
      isPlaying = !isPlaying;
    });
  }

});