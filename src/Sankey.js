import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Plot from 'react-plotly.js';

const SankeyDiagram = () => {
    const [data, setData] = useState(null);
    const [filters, setFilters] = useState({
        County: '',
        SubCounty: '',
        Agency: '',
        Partner: '',
        CohortYearMonth: ''
    });

    useEffect(() => {
        axios.post('http://localhost:8000/sankey-data/', filters)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, [filters]);

    const handleChange = (e) => {
        setFilters({
            ...filters,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <div>
                <label>County: <input name="County" value={filters.County} onChange={handleChange} /></label>
                <label>SubCounty: <input name="SubCounty" value={filters.SubCounty} onChange={handleChange} /></label>
                <label>Agency: <input name="Agency" value={filters.Agency} onChange={handleChange} /></label>
                <label>Partner: <input name="Partner" value={filters.Partner} onChange={handleChange} /></label>
                <label>CohortYearMonth: <input name="CohortYearMonth" value={filters.CohortYearMonth} onChange={handleChange} /></label>
            </div>
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
                    layout={{ title: 'Sankey Diagram' }}
                />
            )}
        </div>
    );
};

export default SankeyDiagram;
