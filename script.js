// Escuchar el cambio en los radios de discapacidad
const radios = document.querySelectorAll('input[name="discapacidad"]');
const campoOtra = document.getElementById('campo-otra-discapacidad');

radios.forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.value === 'otra') {
      campoOtra.classList.remove('hidden');
    } else {
      campoOtra.classList.add('hidden');
    }
  });
});