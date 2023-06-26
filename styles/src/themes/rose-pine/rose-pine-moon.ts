import {
    chroma,
    colorRamp,
    ThemeAppearance,
    ThemeLicenseType,
    ThemeConfig,
} from "../../common"

import { color as c, syntax } from "./common";

const color = c.moon

const green = chroma.mix(color.foam, "#10b981", 0.6, 'lab');
const magenta = chroma.mix(color.love, color.pine, 0.5, 'lab');

export const theme: ThemeConfig = {
    name: "Rosé Pine Moon",
    author: "edunfelt",
    appearance: ThemeAppearance.Dark,
    licenseType: ThemeLicenseType.MIT,
    licenseUrl: "https://github.com/edunfelt/base16-rose-pine-scheme",
    licenseFile: `${__dirname}/LICENSE`,
    inputColor: {
        neutral: chroma.scale([color.base, color.surface, color.highlightHigh, color.overlay, color.muted, color.subtle, color.text]).domain([0, 0.3, 0.55, 1]),
        red: colorRamp(chroma(color.love)),
        orange: colorRamp(chroma(color.iris)),
        yellow: colorRamp(chroma(color.gold)),
        green: colorRamp(chroma(green)),
        cyan: colorRamp(chroma(color.pine)),
        blue: colorRamp(chroma(color.foam)),
        violet: colorRamp(chroma(color.iris)),
        magenta: colorRamp(chroma(magenta)),
    },
    override: {
        syntax: syntax(color)
    }
}