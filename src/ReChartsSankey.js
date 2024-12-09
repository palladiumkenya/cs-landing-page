import React from 'react';
import { Sankey, Tooltip } from 'recharts';



const ReChartsSankey = ({data}) => {
    let nodes = [];
    let nodeName = []
    let link = []

    data?.sankeyData?.forEach(item => {
        if (!nodes.includes(item.from)) {
            nodes.push(item.from);
            nodeName.push({name: item.from})
        }
        if (!nodes.includes(item.to)) {
            nodes.push(item.to);
            nodeName.push({name: item.to})
        }

        link.push({source: nodes.indexOf(item?.from), target: nodes.indexOf(item?.to), value: item?.weight })
    });
    let chartData = {
        nodes: nodeName,
        links: link
    }
    return (
    <Sankey
        width={1440}
        height={500}
        data={chartData}
        nodePadding={10}
        nodeWidth={5}
    >
        <Tooltip/>
    </Sankey>
)};

export default ReChartsSankey;
