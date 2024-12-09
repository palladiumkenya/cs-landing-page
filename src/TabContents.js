import React, { useState } from 'react';
import { AppBar, Tabs, Tab, Box } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Plot from 'react-plotly.js';
import axios from 'axios';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
};

const TabsComponent = () => {
    const [value, setValue] = useState(0);
    const [data, setData] = useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        fetchData();
    };

    const fetchData = async () => {
        try {
            const response = await axios.post('http://localhost:8000/sankey-data/', {});
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const highchartsOptions = {
        chart: {
            type: 'sankey'
        },
        title: {
            text: 'Highcharts Sankey Diagram'
        },
        series: [{
            keys: ['from', 'to', 'weight'],
            data: data ? data.links.map(link => [
                data.nodes[link.source],
                data.nodes[link.target],
                link.value
            ]) : []
        }]
    };

    return (
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="sankey tabs">
                    <Tab label="Highcharts" />
                    <Tab label="Plotly" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                {data && <HighchartsReact highcharts={Highcharts} options={highchartsOptions} />}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {data && (
                    <Plot
                        data={[{
                            type: 'sankey',
                            orientation: 'h',
                            node: {
                                pad: 15,
                                thickness: 20,
                                line: {
                                    color: 'black',
                                    width: 0.5
                                },
                                label: data.nodes,
                                color: 'blue'
                            },
                            link: {
                                source: data.links.map(link => link.source),
                                target: data.links.map(link => link.target),
                                value: data.links.map(link => link.value)
                            }
                        }]}
                        layout={{ title: 'Plotly Sankey Diagram' }}
                    />
                )}
            </TabPanel>
        </div>
    );
};

export default TabsComponent;
