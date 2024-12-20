import React, { useEffect, useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import SankeyModule from 'highcharts/modules/sankey';
import axios from 'axios';
import Grid from "@mui/material/Grid2";
import CustomizedDataGrid from "./components/CustomizedDataGrid";
import Stack from "@mui/material/Stack";

SankeyModule(Highcharts);

const HighchartSankey = () => {
    const [data, setData] = useState([]);
    const [selectedNodeData, setSelectedNodeData] = useState([]); // For storing breakdown data
    const [selectedNode, setSelectedNode] = useState(''); // For storing the selected node name
    const [loading, setLoading] = useState(false); // For storing the selected node name

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const raw = JSON.stringify({});
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow",
                // mode: 'no-cors',
            };

            let response = await fetch("https://dwh.nascop.org/sankey-data/sankey-data/", requestOptions)

            response = await  response.json()
            // const response = await axios({
            //     method: 'post',
            //     url: 'http://dwh.nascop.org/sankey-data/',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     data: {
            //         // Your POST data here
            //     },
            //     maxRedirects: 5 // This ensures Axios follows up to 5 redirects
            // });
            setData(response);
            console.log(response)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleNodeClick = async (event) => {
        const nodeName = event.point.name; // Get the node name
        let breakdown = []; // Get the breakdown data for the node
        setLoading(true)
        try{
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "node": nodeName
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            let response = await fetch("https://dwh.nascop.org/sankey-data/sankey-data/breakdown", requestOptions)
            breakdown = await response.json()
            breakdown = breakdown.map((table) => ({
                ...table,
                rows: table.rows.map((row, index) => ({ ...row, id: row.id || index}))
            }))
            setSelectedNode(nodeName);
            setSelectedNodeData(breakdown);
        } catch (err){
            console.error(err)
        }
        setLoading(false)
    };

    const highchartsOptions = {
        chart: {
            type: 'sankey'
        },
        title: {
            text: 'Highcharts Sankey Diagram'
        },
        plotOptions: {
            series: {
                events: {
                    click: handleNodeClick // Handle node click event
                }
            }
        },
        series: [
            {
                keys: ['from', 'to', 'weight'],
                data: data?.sankeyData || [],
                type: 'sankey',
                name: 'Case breakdown'
            }
        ]
    };


    return (
        <Box>
            <HighchartsReact highcharts={Highcharts} options={highchartsOptions} />
            {selectedNode && (
                <Box mt={4}>
                    <Typography variant="h6" gutterBottom>
                        Breakdown
                    </Typography>
                    <Grid container spacing={2} columns={12}>
                        {selectedNodeData.map((node, id)=>
                            <>
                                <Stack>
                                <Typography variant={"h6"}>{node?.tableTitle}</Typography>
                                <Grid key={id}>
                                    <CustomizedDataGrid
                                        columns={node.columns}
                                        rows={node.rows}
                                        loading={loading}
                                    />
                                </Grid>
                                </Stack>
                            </>
                        )}
                    </Grid>

                </Box>
            )}
        </Box>
    );
};

export default HighchartSankey;
