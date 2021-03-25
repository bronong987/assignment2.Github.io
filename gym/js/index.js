// Side Menu
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav, {});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax, {});

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,
    {
        height: 600,
        duration: 700,
        interval: 4000
    }
);

const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});