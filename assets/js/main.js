(() => {
  // Minimal JS: improves anchor navigation with sticky header.
  const header = document.querySelector('.site-header');
  const headerH = () => header ? header.getBoundingClientRect().height : 0;

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;

    e.preventDefault();
    const y = window.scrollY + el.getBoundingClientRect().top - headerH() - 12;
    window.history.pushState(null, '', id);
    window.scrollTo({ top: y, behavior: 'smooth' });

    // Move keyboard focus after scrolling (accessibility)
    setTimeout(() => {
      el.setAttribute('tabindex', '-1');
      el.focus({ preventScroll: true });
    }, 350);
  });
})();
