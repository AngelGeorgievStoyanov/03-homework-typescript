

export function clearDiv(a:NodeListOf<ChildNode>) {
    const arrNode = Array.from(a);
    for (const el of arrNode) {
        el.remove();
    }
}