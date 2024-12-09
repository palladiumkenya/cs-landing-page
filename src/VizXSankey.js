import React from 'react';
import { Sankey } from '@visx/sankey';

const data = {
    nodes: [
        { name: 'A' },
        { name: 'B' },
        { name: 'C' },
        { name: 'D' },
        { name: 'E' }
    ],
    links: [
        { source: 0, target: 1, value: 10 },
        { source: 1, target: 2, value: 15 },
        { source: 2, target: 3, value: 20 },
        { source: 3, target: 4, value: 25 }
    ]
};

const VizXChartsSankey = ({data}) => {
    let nodes = [];
    const links = { source: [], target: [], value: [] };

    data?.sankeyData?.forEach(item => {
    if (!nodes.includes(item.from)) nodes.push({name: item.from});
    if (!nodes.includes(item.to)) nodes.push({name: item.to});
    links.source.push(nodes.indexOf(item.from));
    links.target.push(nodes.indexOf(item.to));
    links.value.push(item.weight);
    });
    let rootNodes = {
        nodes: nodes
    }

    return( <Sankey
        root={rootNodes}
        data={data}
        width={960}
        height={500}
        nodeWidth={15}
        nodePadding={10}
    />)
};

export default VizXChartsSankey;
