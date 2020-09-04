const canvas = d3.select(".canvas");

const svg = canvas.append('svg')
    .attr('height', 600)
    .attr('width', 600);

// svg.attr('height', 600);
// svg.attr('width', 600);

// append shapes to svg container

svg.append('rect')
    .attr('width', 200)
    .attr('height', 100);

svg.append('circle');
svg.append('line');