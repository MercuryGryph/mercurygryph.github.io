export type Position = {x: number, y: number}
export type OffsetProvider = (x: number, y: number, mouseEvent: MouseEvent, elementRect: DOMRect) => Position

export const OffsetZ = (
    z : number,
): OffsetProvider => {
    return (x: number, y: number, mouseEvent: MouseEvent, elementRect: DOMRect): {x: number, y: number} => {
        const viewport = window.visualViewport

        if (!viewport) {
            return {x, y}
        }

        const center = {
            x: (viewport.width / 2 - viewport.offsetLeft),
            y: (viewport.height / 2 - viewport.offsetTop)
        }

        const d = {
            x: mouseEvent.clientX - center.x,
            y: mouseEvent.clientY - center.y
        }

        const zScale = z / 10

        return {
            x: x + d.x * zScale,
            y: y + d.y * zScale,
        }
    }
}
