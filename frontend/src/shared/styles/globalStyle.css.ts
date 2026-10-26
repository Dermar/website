import { globalFontFace, globalStyle } from '@vanilla-extract/css';
import {spacing} from "./spacing";

export const siteColours = {
    backgroundColor : "#fafaff",
    scrollbarColor : "#1A281F",
    contrast: "729B79",
    dark: "1A281F",
    fifth: "38302E"
}

// Standards-based scrollbar styling used by Chromium and Firefox browsers
globalStyle('div', {
    scrollbarColor: `${siteColours.scrollbarColor}`,
    scrollbarWidth: 'thin',
});

// Vendor-prefixed scrollbar styling used by Safari
globalStyle('::-webkit-scrollbar', {
    width: '10px',
});

globalStyle('::-webkit-scrollbar-track', {
    background: `${siteColours.scrollbarColor}`,
});

globalStyle('::-webkit-scrollbar-thumb', {
    background: `${siteColours.scrollbarColor}`,
});

globalStyle('a', {
    fontWeight: 'bold',
    textDecoration: 'underline',
    cursor: 'pointer',
});

globalStyle('th', {
    fontWeight: 600,
    fontSize: '13px',
});

globalStyle('td', {
    fontWeight: 400,
});

const fontsPath = '/fonts/';

const fontFaceStyle = (
    fileName: string,
    fontWeight: string,
    fontStyle: string
) => {
    const src = `url('${fontsPath}${fileName}.woff') format('woff'), url('${fontsPath}${fileName}.woff2') format('woff2');`;

    return {
        src,
        fontWeight,
        fontStyle,
    };
};

const fontAssets = {
    euclid: {
        fontFamily: 'Euclid Circular A',
        medium: 'EuclidCircularA-Medium-WebXL',
        mediumItalic: 'EuclidCircularA-MediumItalic-WebXL',
        normal: 'EuclidCircularA-Regular-WebXL',
        italic: 'EuclidCircularA-RegularItalic-WebXL',
        semiBold: 'EuclidCircularA-Semibold-WebXL',
        semiBoldItalic: 'EuclidCircularA-SemiboldItalic-WebXL',
    },
    code: {
        fontFamily: 'Source Code Pro',
        bold: 'source-code-pro-v20-latin-700',
        medium: 'source-code-pro-v20-latin-500',
        normal: 'source-code-pro-v20-latin-regular',
    },
};

const fontWeights = {
    euclid: {
        semiBold: '700',
        medium: '500',
        normal: '400, normal',
    },
    code: {
        bold: '700',
        medium: '500',
        normal: '400',
    },
};

/* Euclid Circular A fonts */
globalFontFace(
    fontAssets.euclid.fontFamily,
    fontFaceStyle(
        fontAssets.euclid.semiBold,
        fontWeights.euclid.semiBold,
        'normal'
    )
);

globalFontFace(
    fontAssets.euclid.fontFamily,
    fontFaceStyle(
        fontAssets.euclid.semiBoldItalic,
        fontWeights.euclid.semiBold,
        'italic'
    )
);

globalFontFace(
    fontAssets.euclid.fontFamily,
    fontFaceStyle(fontAssets.euclid.medium, fontWeights.euclid.medium, 'normal')
);

globalFontFace(
    fontAssets.euclid.fontFamily,
    fontFaceStyle(
        fontAssets.euclid.mediumItalic,
        fontWeights.euclid.medium,
        'italic'
    )
);

globalFontFace(
    fontAssets.euclid.fontFamily,
    fontFaceStyle(fontAssets.euclid.normal, fontWeights.euclid.normal, 'normal')
);

globalFontFace(
    fontAssets.euclid.fontFamily,
    fontFaceStyle(fontAssets.euclid.italic, fontWeights.euclid.normal, 'italic')
);

/**
 *
 * Global HTML Styles
 *
 */

globalStyle('html, body, #root', {
    margin: 0,
    height: '100%',
    fontFamily: `'Euclid Circular A', 'Helvetica Neue', Helvetica, Arial, sans-serif`,
    background: siteColours.backgroundColor,
});
