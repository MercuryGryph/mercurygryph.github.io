export type Position = {x: number, y: number}

export const position = (x: number, y: number) => { return {x, y} as Position }

export type PosProvider = (mouseEvent: MouseEvent, elementRect: DOMRect, lightSizePx: number) => Position

export const CursePos = (): PosProvider => {
    return (mouseEvent: MouseEvent, elementRect: DOMRect, lightSizePx: number): Position => {
        const x = mouseEvent.clientX - elementRect.left - lightSizePx / 2
        const y = mouseEvent.clientY - elementRect.top - lightSizePx / 2
        return position(x, y)
    }
}

export const ZOffset = (
    z : number,
): PosProvider => {
    return (mouseEvent: MouseEvent, elementRect: DOMRect, lightSizePx: number): {x: number, y: number} => {
        const cursePos = CursePos()(mouseEvent, elementRect, lightSizePx)

        const viewport = window.visualViewport

        if (!viewport) {
            return cursePos
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

        return position(
            cursePos.x + d.x * zScale,
            cursePos.y + d.y * zScale
        )
    }
}
