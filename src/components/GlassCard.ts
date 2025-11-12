import {Vector, Vector2} from '~/utils/math/Vector'
import {RectInfo} from '~/utils/RectInfo'


export type PosProvider = (
    mousePos: Vector2,
    elementRect: RectInfo,
    lightSizePx: number,
    rotateDeg: number
) => Vector2

const rotate = (
    pos: Vector2,
    center: Vector2,
    deg: number
): Vector2 => {
    // return pos
    const rad = (deg * Math.PI) / 180;

    const relativePos = Vector2.sub(pos, center)

    const cos = Math.cos(rad)
    const sin = Math.sin(rad)

    const newRelativePos = Vector(
        relativePos.x * cos - relativePos.y * sin,
        relativePos.x * sin + relativePos.y * cos,
    )

    return Vector2.add(newRelativePos, center)
}

export const CursePos = (): PosProvider => {
    return (mousePos: Vector2, elementRect: RectInfo, lightSizePx: number, rotateDeg: number): Vector2 => {
        return rotate(
            mousePos.copy()
                .subtract(elementRect.anchorO()),
            Vector2.Zero(),
            -rotateDeg
        ).subtract(lightSizePx / 2)
    }
}

export const ZOffset = (
    z : number,
): PosProvider => {
    return (mousePos: Vector2, elementRect: RectInfo, lightSizePx: number, rotateDeg: number): Vector2 => {
        const pos = CursePos()(mousePos, elementRect, lightSizePx, rotateDeg)

        const viewport = window.visualViewport

        if (!viewport) return pos

        return pos.add(
            rotate(
                mousePos.copy()
                    .subtract(
                        Vector(viewport.width, viewport.height)
                            .subtract(Vector(viewport.offsetLeft, viewport.offsetTop))
                            .divide(2)
                    )
                    .multiply(z / 10),
                Vector2.Zero(),
                -rotateDeg
            )
        )
    }
}
