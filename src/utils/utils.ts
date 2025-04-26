export function getDomIconElement(): HTMLLinkElement {
    const iconLink: HTMLLinkElement | null = document.querySelector('link[rel="icon"]')
    if (iconLink) {
        return iconLink
    }
    const elem = document.createElement('link')
    elem.rel = 'icon'
    document.head.appendChild(elem)
    return elem
}
