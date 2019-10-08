'use strict';

//  passage directions:
//
//    top    == 1
//    bottom == 2
//    right  == 4
//    left   == 8
//
//  combination examples:
//
//    14 == left | right
//     7 == right | bottom | top
//    ..

let passages =  [
    [4, 14, 8, 2, 6, 8, 2, 6, 8, 3],
    [4, 11, 4, 15, 13, 12, 13, 9, 6, 9],
    [2, 3, 6, 11, 6, 12, 8, 2, 3, 2],
    [5, 11, 1, 5, 15, 8, 6, 9, 3, 3],
    [4, 11, 4, 12, 15, 14, 13, 8, 3, 3],
    [2, 3, 4, 14, 9, 5, 8, 6, 13, 9],
    [5, 13, 12, 13, 10, 2, 2, 7, 14, 8],
    [6, 8, 4, 14, 13, 9, 3, 3, 5, 10],
    [5, 10, 4, 15, 10, 6, 13, 13, 8, 1],
    [4, 13, 12, 9, 5, 13, 12, 12, 12, 8]
];

function notValid(s, i, j) {
    return (i < 0 || i >= s.length || j < 0 || j >= s[i].length);
}

function top(s, i, j) {
    if (notValid(s, i, j)) {
        return false
    }
    return !(s[i][j] & 1);
}

function bottom(s, i, j) {
    if (notValid(s, i, j)) {
        return false
    }
    return !(s[i][j] & 2);
}

function left(s, i, j) {
    if (notValid(s, i, j)) {
        return false
    }
    return !(s[i][j] & 8);
}

function right(s, i, j) {
    if (notValid(s, i, j)) {
        return false
    }
    return !(s[i][j] & 4);
}

function print(s) {
    let line;
    line = '';
    for (let j = 0; j < s[0].length; j++) {
        // line += (top(s,0, j)  ? '__' : '  ')
        line += (top(s, 0, j - 1)  ? '_' : ' ') + (top(s, 0, j )  ? '_' : ' ');
    }
    console.log(line);
    for (let i = 0; i < s.length; i++ ) {
        line = '';
        const len = s[i].length;
        for (let j = 0; j < len; j++) {
            line += (left(s, i, j)  ? '|' : (bottom(s, i, j - 1)  ? '_' : ' '));
            line += (bottom(s, i, j)  ? '_' : ' ');
        }
        line += (right(s, i, len - 1)  ? '|' : ' ')
        console.log(line);
    }
}

/* Result:
 __________________
|_   _| |  _| |  _| |
|_  |_   _______|  _|
| | |   |  ___| | | |
|_  |_|_   _|  _| | |
|_  |___     ___| | |
| | |_   _|___|  ___|
|_______  | | |    _|
|  _|_   ___| | |_  |
|_  |_    |  _____|_|
|_______|___________|
 */

console.log(passages);
print(passages);

