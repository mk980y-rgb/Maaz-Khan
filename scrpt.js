document.addEventListener('DOMContentLoaded', function () {
  var style = document.createElement('style');
  style.textContent = "#whatsapp-float-btn { position: fixed; right: 20px; bottom: 20px; width: 56px; height: 56px; background: #25D366; border-radius: 50%; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.24); display: flex; align-items: center; justify-content: center; z-index: 9999; cursor: pointer; transition: transform 0.2s ease; }\n#whatsapp-float-btn:hover { transform: scale(1.08); }\n#whatsapp-float-btn svg { width: 28px; height: 28px; fill: #fff; }";
  document.head.appendChild(style);

  var button = document.createElement('a');
  button.id = 'whatsapp-float-btn';
  button.href = 'https://wa.me/?text=Hello';
  button.target = '_blank';
  button.rel = 'noopener noreferrer';
  button.setAttribute('aria-label', 'Chat on WhatsApp');
  button.innerHTML = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16.08 3C9.11 3 3.76 8.34 3.76 15.31c0 2.7.7 5.22 1.92 7.42L3 29l6.5-1.71c2.02 1.11 4.3 1.64 6.58 1.64 6.97 0 12.32-5.34 12.32-12.31S23.05 3 16.08 3zm0 22.74c-2.1 0-4.09-.55-5.82-1.6l-.42-.25-3.86 1.02.99-3.76-.27-.43a10.74 10.74 0 0 1-1.64-5.78c0-5.94 4.84-10.78 10.78-10.78 5.94 0 10.78 4.84 10.78 10.78 0 5.94-4.84 10.78-10.78 10.78zm5.83-7.88c-.32-.16-1.9-.94-2.2-1.05-.3-.11-.52-.16-.74.16-.22.32-.84 1.05-1.03 1.27-.19.22-.38.25-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.84-1.58-1.88-1.77-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.57.16-.19.21-.32.32-.53.1-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.02-2.44-.27-.64-.55-.55-.74-.56-.19 0-.41-.01-.63-.01-.22 0-.57.08-.87.38-.3.3-1.12 1.09-1.12 2.64s1.14 3.07 1.3 3.28c.16.22 2.25 3.43 5.46 4.81.76.33 1.35.53 1.81.68.76.25 1.45.21 1.99.13.61-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.12-.3-.19-.62-.34z"/></svg>';

  document.body.appendChild(button);
});