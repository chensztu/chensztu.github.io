(() => {
    const button = document.querySelector('.menu-toggle');
    const navigation = document.getElementById('main-navigation');
    if (!button || !navigation) return;
    const header = button.closest('header');
    const mobile = window.matchMedia('(max-width: 768px)');
    const setOpen = (open) => {
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
        button.querySelector('.menu-icon').textContent = open ? '×' : '☰';
        header.classList.toggle('menu-open', open);
    };
    button.hidden = false;
    header.classList.add('mobile-menu-ready');
    button.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
    document.addEventListener('click', (event) => {
        if (!header.contains(event.target)) setOpen(false);
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            button.focus();
        }
    });
    navigation.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
    });
    mobile.addEventListener('change', () => {
        const focusWasInNavigation = navigation.contains(document.activeElement);
        setOpen(false);
        if (mobile.matches && focusWasInNavigation) button.focus();
    });
})();
