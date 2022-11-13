
export function elem(a: string, b: string, c: string, d: number, e: number, f: string, z: string) {
    const element = <HTMLElement>document.createElement(a);
    if (b !=='false') {
        element.className = b;
    }
    if (c!=='false') {
        element.textContent = c;
    }
    if (d>0) {
        (<HTMLImageElement>element).width = d;
    }
    if (e>0) {
        (<HTMLImageElement>element).height = e;
    }
    if (f!=='false') {
        (<HTMLImageElement>element).src = f;
    }
    if (z!=='false') {
        element.id = z;
    }

    return element;
}