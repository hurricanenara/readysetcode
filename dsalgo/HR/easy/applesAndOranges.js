function countApplesAndOranges(s, t, a, b, apples, oranges) {
    
    const appleLanding = apples.map(dist => dist + a);
    const orangeLanding = oranges.map(dist => dist + b);
    
    const appleCount = appleLanding.filter(loc => loc >= s && loc <= t);
    const orangeCount = orangeLanding.filter(loc => loc >= s && loc <= t);
    
    console.log(appleCount.length);
    console.log(orangeCount.length);
}

// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true&h_r=next-challenge&h_v=zen