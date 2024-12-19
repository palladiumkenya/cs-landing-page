import Plot from 'react-plotly.js';
import { Table, TableBody, TableCell, Typography, TableContainer, Paper, TableHead, TableRow } from '@mui/material'
import {useState} from "react";

const D3ChartsSankey = ({data}) => {
    const nodes = [];
    const links = { source: [], target: [], value: [] };
    const [selectedNode, setSelectedNode] = useState(null)
    const [nodeBreakdowns, setNodeBreakdowns] = useState([])


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
            align: 'center',
            pad: 15,
            thickness: 3,
            line: {
                // color: 'black',
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

    // Handle node clicks
    const handleNodeClick = (event) => {
        console.log(event)
        if (event.points && event.points[0].pointNumber !== undefined) {
            const clickedNodeIndex = event.points[0].pointNumber;
            const clickedNode = nodes[clickedNodeIndex];
            console.log(nodes)

            // Filter breakdowns for the clicked node
            const breakdowns = data.sankeyData.filter(
                item => item.from === clickedNode || item.to === clickedNode
            );
console.log(clickedNode)
            // Update the state with the clicked node and its breakdowns
            setSelectedNode(clickedNode);
            setNodeBreakdowns(breakdowns);
        }
    };

    return (
        <div>
            {/* Sankey Diagram */}
            <Plot
                data={[plotData]}
                layout={layout}
                useResizeHandler
                style={{ width: '100%' }}
                onClick={handleNodeClick} // Add click handler
            />

            {/* Tables for Selected Node */}
            {selectedNode && (
                <div style={{ marginTop: 20 }}>
                    <Typography variant="h6" gutterBottom>
                        Breakdown for Node: {selectedNode}
                    </Typography>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>From</strong></TableCell>
                                    <TableCell><strong>To</strong></TableCell>
                                    <TableCell><strong>Weight</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {nodeBreakdowns.map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{row.from}</TableCell>
                                        <TableCell>{row.to}</TableCell>
                                        <TableCell>{row.weight}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    )
}

export default D3ChartsSankey
