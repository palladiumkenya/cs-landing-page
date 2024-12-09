import React from 'react';
import { Sankey, Tooltip } from 'recharts';

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

const ReChartsSankey = () => (
    <Sankey
        width={960}
        height={500}
        data={data}
        nodePadding={10}
        nodeWidth={15}
    >
        <Tooltip />
    </Sankey>
);

export default ReChartsSankey;
