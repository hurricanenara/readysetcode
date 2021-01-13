function kangaroo(x1, v1, x2, v2) {

    let willMeet = "NO";
    let canCatchUp = v1 > v2;
    if (canCatchUp) {
        let willLandWholly = (x1 - x2) % (v2 - v1) === 0;
        if (willLandWholly) {
            willMeet = "YES";
        }
    }
    return willMeet;

}

// https://www.hackerrank.com/challenges/kangaroo/problem?isFullScreen=true