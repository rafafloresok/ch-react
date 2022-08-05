export function toggleElement(element) {
    if (element.current.id === 'isOut') {
        element.current.id = 'isIn';
        element.current.classList.add('in-from-right');
        element.current.style.display = 'flex';
        setTimeout(() => {
            element.current.classList.remove('in-from-right');
        }, 800);
    } else {
        element.current.id = 'isOut';
        element.current.classList.add('out-to-right');
        setTimeout(() => {
            element.current.style.display = 'none';
            element.current.classList.remove('out-to-right');
        }, 800);
    }
}