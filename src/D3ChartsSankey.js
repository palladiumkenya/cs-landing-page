import Plot from 'react-plotly.js';

const D3ChartsSankey = ({data}) => {
    const nodes = [];
    const links = { source: [], target: [], value: [] };

    data?.sankeyData?.forEach(item => {
        if (!nodes.includes(item.from)) nodes.push(item.from);
        if (!nodes.includes(item.to)) nodes.push(item.to);
        links.source.push(nodes.indexOf(item.from));
        links.target.push(nodes.indexOf(item.to));
        links.value.push(item.weight);
    });

    const plotData = {
        type: 'sankey',
        orientation: 'h',
        node: {
            pad: 15,
            thickness: 3,
            line: {
                color: 'black',
                width: 0.5
            },
            label: nodes
        },
        link: links
    };

    const layout = {
        title: { text: 'Case breakdown' },
        font: { size: 10 }
    };

    return <Plot data={[plotData]} layout={layout} useResizeHandler style={{ width: '100%'}} />;
}

export default D3ChartsSankey
