export function elem(a, b, c, d, e, f, z) {
    const element = document.createElement(a);
    if (b !== 'false') {
        element.className = b;
    }
    if (c !== 'false') {
        element.textContent = c;
    }
    if (d > 0) {
        element.width = d;
    }
    if (e > 0) {
        element.height = e;
    }
    if (f !== 'false') {
        element.src = f;
    }
    if (z !== 'false') {
        element.id = z;
    }
    return element;
}
//# sourceMappingURL=createElement.js.map