// Drag and Drop Logic
const heroes = document.querySelectorAll('.hero');
const tiers = document.querySelectorAll('.heroes');

heroes.forEach(hero => {
    hero.addEventListener('dragstart', dragStart);
    hero.addEventListener('dragend', dragEnd);
});

tiers.forEach(tier => {
    tier.addEventListener('dragover', dragOver);
    tier.addEventListener('drop', dropHero);
});

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.dataset.hero);
    e.target.classList.add('dragging');
}

function dragEnd(e) {
    e.target.classList.remove('dragging');
}

function dragOver(e) {
    e.preventDefault();
}

function dropHero(e) {
    e.preventDefault();
    const heroName = e.dataTransfer.getData('text/plain');
    const heroElement = document.querySelector(`[data-hero="${heroName}"]`);
    e.target.appendChild(heroElement);
}
