const svg = d3.select('.canvas')
    .append('svg')
        .attr('width', 600)
        .attr('height', 600);

    // create margins and dimensions
    const margin = { top: 20, right: 20, bottom: 100, left: 100 };
    const graphWidth = 600 - margin.left - margin.right;
    const graphHeight = 600 - margin.top - margin.bottom;

    const graph = svg.append('g')
        .attr('width', graphWidth)
        .attr('height', graphHeight)
        .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const xAxisGroup = graph.append('g')
        .attr('transform', `translate(0, ${graphHeight})`);
    const yAxisGroup = graph.append('g');

    // scales

    //update function
    const update = data => {
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.orders)])
            .range([graphHeight, 0]);

        // band scale
        const x = d3.scaleBand()
            .domain(data.map(item => item.name))
            .range([0, 500])
            .paddingInner(0.2)
            .paddingOuter(0.2);

    }

db.collection('dishes').get().then(res => {

    let data = [];
    res.docs.forEach(doc => {
        data.push(doc.data());
    });

    // y will be a function you can pass value to

    // console.log(x("veg curry"));
    // console.log(x("veg pasta"));
    // console.log(x.bandwidth())

    // join the data to rects
    const rects = graph.selectAll('rect')
        .data(data)
    console.log(rects)
    // rects.attr('width', x.bandwidth)
    //     .attr('height', d => graphHeight - y(d.orders))
    //     .attr('fill', 'orange')
    //     .attr('x', d => x(d.name))
    //     .attr('y', d => y(d.orders)); // inverting the graphs (to rotate graph 180 deg)

    // //append the enter selection to the DOM
    // rects.enter()
    //     .append('rect')
    //     .attr('width', x.bandwidth)
    //     .attr('height', d => graphHeight - y(d.orders))
    //     .attr('fill', 'orange')
    //     .attr('x', d => x(d.name))
    //     .attr('y', d => y(d.orders)); // inverting the graphs

    // //create and call the axes
    // const xAxis = d3.axisBottom(x);
    // const yAxis = d3.axisLeft(y)
    //     .ticks(3)
    //     .tickFormat(d => `${d} orders`);

    // xAxisGroup.call(xAxis);
    // yAxisGroup.call(yAxis);

    // xAxisGroup.selectAll('text') // anchored/rotated by middle of text
    //     .attr('transform', 'rotate(-40)')
    //     .attr('text-anchor', 'end') // so cahnge text anchor to end to avoid overlapping of bar and text
    //     .attr('fill', 'pink')

    const update = data => {

        // 1. update scales (domains) if they rely on our data
        y.domain([0, d3.max(data, d.orders)]);

        // 2. join updated data to elements
        const rects = graph.selectAll('rect').data(data);

        // 3. remove unwanted (if any) shapes using the exit selection
        rects.exit().remove();

        // 4. update current shapes in the dom
        rects.attr(...etc);

        // 5. apend the enter selection to the dom
        rects.enter().append('rect').attr(...etc);
    }
})