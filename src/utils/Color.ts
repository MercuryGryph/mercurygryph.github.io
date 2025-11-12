import {rand} from '@vueuse/core'

export type HSVColor = {
    h: number; // 色相   (0-360)
    s: number; // 饱和度 (0-100)
    v: number; // 明度   (0-100)
}

export type RGBColor = {
    r: number; // (0-255)
    g: number; // (0-255)
    b: number; // (0-255)
}

export const randomHSV = (
    sRange: [number, number] = [30, 100],
    vRange: [number, number] = [30, 100]
): HSVColor => {
    const [sMin, sMax] = sRange;
    const [vMin, vMax] = vRange;

    // 验证参数范围
    if (sMin < 0 || sMax > 100 || vMin < 0 || vMax > 100 || sMin > sMax || vMin > vMax) {
        throw new Error('Invalid saturation or value range. S and V must be between 0-100 and min <= max.');
    }

    return {
        h: rand(0, 361),
        s: rand(sMin, sMax + 1),
        v: rand(vMin, vMax + 1),
    };
}

export const hsvToRgb = (
    hsv: HSVColor
): RGBColor => {
    const { h, s, v } = hsv;

    const hNormalized = h / 360;
    const sNormalized = s / 100;
    const vNormalized = v / 100;

    let r: number, g: number, b: number;

    const i = Math.floor(hNormalized * 6);
    const f = hNormalized * 6 - i;
    const p = vNormalized * (1 - sNormalized);
    const q = vNormalized * (1 - f * sNormalized);
    const t = vNormalized * (1 - (1 - f) * sNormalized);

    switch (i % 6) {
        case 0:
            r = vNormalized;
            g = t;
            b = p;
            break;
        case 1:
            r = q;
            g = vNormalized;
            b = p;
            break;
        case 2:
            r = p;
            g = vNormalized;
            b = t;
            break;
        case 3:
            r = p;
            g = q;
            b = vNormalized;
            break;
        case 4:
            r = t;
            g = p;
            b = vNormalized;
            break;
        case 5:
            r = vNormalized;
            g = p;
            b = q;
            break;
        default:
            r = 0;
            g = 0;
            b = 0;
    }

    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

export function rgbToHex(rgb: RGBColor): string {
    const { r, g, b } = rgb;

    const toHex = (value: number): string => {
        const hex = Math.max(0, Math.min(255, value)).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

export function randomHexColorInHSV(
    sRange: [number, number] = [50, 100],
    vRange: [number, number] = [50, 100]
): string {
    const hsv = randomHSV(sRange, vRange);
    const rgb = hsvToRgb(hsv);
    return rgbToHex(rgb);
}
