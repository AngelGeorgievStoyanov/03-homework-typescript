
export function elem(a: string, className: string, textContent: string, width: number, height: number, src: string, id: string) {
    const element = <HTMLElement>document.createElement(a);
    if (className !=='false') {
        element.className = className;
    }
    if (textContent!=='false') {
        element.textContent = textContent;
    }
    if (width>0) {
        (<HTMLImageElement>element).width = width;
    }
    if (height>0) {
        (<HTMLImageElement>element).height = height;
    }
    if (src!=='false') {
        (<HTMLImageElement>element).src = src;
    }
    if (id!=='false') {
        element.id = id;
    }

    return element;
}