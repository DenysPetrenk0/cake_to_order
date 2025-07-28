export function initSlider() {
    const slider = document.querySelector('.cuts__list');
    const items = document.querySelectorAll('.cuts__item');
    const pagination = document.querySelector('.cuts__slider__controls__pagination');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    let currentIndex = 1;
    const itemsLength = items.length;

    function addedClasses(index, nextIndex, prevIndex, classes) {
        items.forEach((item, idx) => {
            const keepClasses = ['cuts__item'];

            item.classList.forEach(cls => {
                if (!keepClasses.includes(cls)) {
                    item.classList.remove(cls);
                }
            });

            // item.firstChild.classList.add('is-hidden');

            if (idx === index) {
                item.classList.add(classes[0]);
                // item.firstChild.classList.remove('is-hidden')
            } else if (idx === nextIndex) {
                item.classList.add(classes[1]);
            } else if (idx === prevIndex) {
                item.classList.add(classes[2]);
            } else {
                item.classList.add('other');
            }
        });
    }

    addedClasses(0, 1, itemsLength - 1, ['start-active', 'start-next', 'start-prev']);

    function updateSlider(index) {
        const prevIndex = (index - 1 + items.length) % items.length;
        const nextIndex = (index + 1) % items.length;

        addedClasses(index, nextIndex, prevIndex, ['active', 'next', 'prev']);

        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');

        currentIndex = index;
    }

    function addPaginationDots() {
        const itemLength = items.length;
        for (let i = 0; i < itemLength; i++) {
            const span = document.createElement('span');
            span.classList.add('cuts__slider__controls__pagination__dot');
            // pagination.append(span);
        }
    }

    nextBtn.addEventListener('click', () => {
        updateSlider((currentIndex + 1) % items.length);
    });

    prevBtn.addEventListener('click', () => {
        updateSlider((currentIndex - 1 + items.length) % items.length);
    });

    addPaginationDots();
    const dots = document.querySelectorAll('.cuts__slider__controls__pagination__dot');

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            updateSlider(i);
        });
    });

    let startX = 0;
    let endX = 0;

    slider.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    slider.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', () => {
        const threshold = 50;

        if (startX - endX > threshold) {
            updateSlider((currentIndex + 1) % items.length);
        } else if (endX - startX > threshold) {
            updateSlider((currentIndex - 1 + items.length) % items.length);
        }

        startX = 0;
        endX = 0;
    });
};