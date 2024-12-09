import React, {useEffect, useState} from 'react';
import {  Tab, Box } from '@mui/material';
import {TabContext, TabList, TabPanel} from '@mui/lab';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import SankeyModule from "highcharts/modules/sankey";
import axios from 'axios';
import GoogleChartsSankey from "./GoogleChartsSankey";
import D3ChartsSankey from "./D3ChartsSankey";
import ReChartsSankey from "./ReChartsSankey";
import VizXChartsSankey from "./VizXSankey";

SankeyModule(Highcharts);

const TabsComponent = () => {
    const [value, setValue] = useState("1");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        fetchData();
    };

    const fetchData = async () => {
        try {
            const response = await axios.post('https://dwh.kenyahmis.org/sankey-data', {});
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
            data: data ? data?.sankeyData : [],
            type: 'sankey',
            Name: 'Case breakdown'
        }]
    };

    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Highcharts" value="1" />
                        <Tab label="Google Charts" value="2" />
                        <Tab label="Plotly Charts" value="3" />
                        <Tab label="ReCharts" value="4" />
                        {/*<Tab label="VizX Charts" value="5" />*/}
                    </TabList>
                </Box>
                <TabPanel value="1">
                    {data && <HighchartsReact highcharts={Highcharts} options={highchartsOptions} />}
                </TabPanel>
                <TabPanel value="2">
                    <GoogleChartsSankey data={data}/>
                </TabPanel>
                <TabPanel value="3">
                    <D3ChartsSankey data={data}/>
                </TabPanel>
                <TabPanel value="4">
                    <ReChartsSankey data={data}/>
                </TabPanel>
                {/*<TabPanel value="5">*/}
                {/*    <VizXChartsSankey data={data}/>*/}
                {/*</TabPanel>*/}


            </TabContext>


        </Box>
    );
};

export default TabsComponent;
