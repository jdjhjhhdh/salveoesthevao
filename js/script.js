
document.getElementById('copy-btn').addEventListener('click', () => {
  const pixKey = document.getElementById('pix-key').innerText;
  navigator.clipboard.writeText(pixKey)
    .then(() => {
      const msg = document.getElementById('copy-msg');
      msg.style.color = 'green';
      msg.innerText = 'Chave Pix copiada!';
      setTimeout(() => { msg.innerText = ''; }, 2500);
    })
    .catch(() => {
      const msg = document.getElementById('copy-msg');
      msg.style.color = 'red';
      msg.innerText = 'Falha ao copiar, tente novamente.';
      setTimeout(() => { msg.innerText = ''; }, 2500);
    });
});
