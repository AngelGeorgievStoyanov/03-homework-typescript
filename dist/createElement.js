export function elem(a, className, textContent, width, height, src, id) {
    const element = document.createElement(a);
    if (className !== 'false') {
        element.className = className;
    }
    if (textContent !== 'false') {
        element.textContent = textContent;
    }
    if (width > 0) {
        element.width = width;
    }
    if (height > 0) {
        element.height = height;
    }
    if (src !== 'false') {
        element.src = src;
    }
    if (id !== 'false') {
        element.id = id;
    }
    return element;
}
//# sourceMappingURL=createElement.js.map