export class Vector2 {
    public x: number = 0
    public y: number = 0

    constructor(x: number);
    constructor(x: number, y: number);
    constructor(
        x: number,
        y?: number,
    ) {
        this.x = x;
        this.y = y? y : x
    }


    public copy(x?: number, y?: number): Vector2 {
        return new Vector2(
            x ? x : this.x,
            y ? y : this.y,
        )
    }

    public length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }

    public normalize(): Vector2 {
        this.divide(this.length())
        return this
    }

    public normalized(): Vector2 {
        return this.copy().normalize()
    }

    public add(other: Vector2): Vector2;
    public add(other: number): Vector2;
    public add(other: Vector2 | number): Vector2 {
        if (other instanceof Vector2) {
            this.x += other.x
            this.y += other.y
        } else {
            this.x += other
            this.y += other
        }
        return this
    }

    public subtract(other: Vector2): Vector2;
    public subtract(other: number): Vector2;
    public subtract(other: Vector2 | number): Vector2 {
        if (other instanceof Vector2) {
            this.x -= other.x
            this.y -= other.y
        } else {
            this.x -= other
            this.y -= other
        }
        return this
    }

    public multiply(other: number): Vector2 {
        this.x *= other
        this.y *= other
        return this
    }

    public divide(other: number): Vector2 {
        this.x /= other
        this.y /= other
        return this
    }

    // region static

    // region static operating
    static add(a: Vector2, b: Vector2): Vector2 { return a.copy().add(b) }

    static sub(a: Vector2, b: Vector2): Vector2 { return a.copy().subtract(b) }

    static mut(v: Vector2, n: number): Vector2 { return v.copy().multiply(n) }

    static div(v: Vector2, n: number): Vector2 { return v.copy().divide(n) }
    // endregion

    static Zero(): Vector2 { return new Vector2(0) }

    static One(): Vector2 { return new Vector2(1) }
    // endregion
}


export const Vector = (x: number, y?: number) => { return new Vector2(x, y?y:x) }
