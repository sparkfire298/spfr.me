const backgrounds = [
    '/bg/background1.webp',
    '/bg/background2.webp',
    '/bg/background3.webp',
    '/bg/background4.webp',
    '/bg/background5.webp',
    '/bg/background6.webp',
    '/bg/background7.webp',
    '/bg/background8.webp',
    '/bg/background9.webp',
    '/bg/background10.webp',
    ];
const i = Math.floor(Math.random() * backgrounds.length);
document.body.style.backgroundImage = `url('${backgrounds[i]}')`;
console.log(`Set background - ${document.body.style.backgroundImage}`)