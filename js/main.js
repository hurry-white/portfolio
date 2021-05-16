let $ham = $('.ham');
let $ham__bar = $('.ham__bar');

let $nav__slide = $('.nav__slide');

$ham.click(function() {
    $ham__bar.toggleClass('ham__bar--action');
    $nav__slide.toggleClass('nav__slide--off');
});

const $ttl01 = document.querySelector('#sec-title01');
const $ttl02 = document.querySelector('#sec-title02');
const $ttl03 = document.querySelector('#sec-title03');
const $ttl04 = document.querySelector('#sec-title04');

const cb = function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('wave-char');
            ResizeObserver.unobserve(entry, target);
        }
    });
}

const io = new IntersectionObserver(cb);
io.observe($ttl01);
io.observe($ttl02);
io.observe($ttl03);
io.observe($ttl04);