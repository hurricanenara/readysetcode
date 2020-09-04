<path d="M150 0 L75 200 L225 200 Z" />

M - moteto
L - lineto
Z - closepath
H - horizontal lineto
V - vertical lineto
C - curveto
S - smooth curveto

### In the Cubic Bezier Generator, the (0, 0) coordinate is the end point and the other corner is the start point

## The "this" keyword in d3.js
* When using arrow functions, the "this" keyword will lose context, therefore, you must use (d, i, n)
parameters to properly get access to the current context/selector like so:
(d, i n) => {
    return n[i];
} will yield the same as:
function(d) {
    return this;
}