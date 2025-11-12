import {Vector, Vector2} from '~/utils/math/Vector'

export class RectInfo {
    private _anchorO: Vector2 | undefined
    private _anchorX: Vector2 | undefined
    private _anchorY: Vector2 | undefined

    constructor(
        anchorO: Vector2,
        anchorX: Vector2,
        anchorY: Vector2,
    ) {
        this._anchorO = anchorO
        this._anchorX = anchorX
        this._anchorY = anchorY
    }

    public anchorO(): Vector2 { return this._anchorO!!.copy() }

    public anchorX(): Vector2 { return this._anchorX!!.copy() }

    public anchorY(): Vector2 { return this._anchorY!!.copy() }

    public anchorC(): Vector2 {
        const halfOX = this.anchorX().subtract(this.anchorO()).divide(2)
        const halfOY = this.anchorY().subtract(this.anchorO()).divide(2)
        return halfOX.add(halfOY).add(this.anchorO())
    }

    public width(): number {
        return Vector2.sub(this.anchorX(), this.anchorO()).length()
    }

    public height(): number {
        return Vector2.sub(this.anchorY(), this.anchorO()).length()
    }

    public localSize(): Vector2 {
        return Vector(this.width(), this.height())
    }

    public localCenter(): Vector2 {
        return this.localSize().divide(2)
    }
}

export const rectInfo = (
    anchorO: Vector2,
    anchorX: Vector2,
    anchorY: Vector2,
):RectInfo => {
    return new RectInfo(anchorO, anchorX, anchorY)
}
