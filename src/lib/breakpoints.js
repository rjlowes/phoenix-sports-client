// @mixin breakpoint-up($name, $breakpoints: $grid-breakpoints) {
//     $min: breakpoint-min($name, $breakpoints);
//     @if $min {
//         @media (min-width: $min) {
//             @content;
//         }
//     } @else {
//         @content;
//     }
// }

// $grid-breakpoints: (
//     xs: 0,
//     sm: 576px,
//     md: 768px,
//     lg: 992px,
//     xl: 1200px
// );

import { css } from 'styled-components';

const breakpoints = {
    xs: 0,
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px'
};


const getMaxBreakpoint = (name) => {
    const breakpoint = breakpoints[name];
    let tmp = parseInt(breakpoint, 10);
    return `${tmp}px`;
};

const breakpointMin = (min) => (...args) => css`
    @media (min-width: ${breakpoints[min]}) {
        ${css(...args)}
    }
`;

const breakpointMax = (max) => (...args) => css`
    @media (max-width: ${getMaxBreakpoint(max)}) {
        ${css(...args)}
    }
`;

const breakpointBetween = (min, max) => (...args) => css`
    @media (min-width: ${breakpoints[min]} and max-width: ${getMaxBreakpoint(max)}) {
        ${css(...args)}
    }
`;

export { breakpointMin, breakpointMax, breakpointBetween };