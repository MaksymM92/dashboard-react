import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/material";
import { DataTable } from "../../components/DataTable";
import { PieChart } from "../../components/PieChart/index.js";
import { DonatChart } from "../../components/DonatChart";
import { BarChart } from "../../components/BarChart";
import { Widget } from "../../components/Widget";
import './Home.css';

export const Home = () => {
    return (
        <section className="dashboard">
            <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={8} sm={12}>
                            <Widget title="Crypto price">
                                <BarChart/>
                            </Widget>
                        </Grid>
                        <Grid item xs={6} md={4} sm={12}>
                            <Widget title="Gainers">
                                <DonatChart/>
                            </Widget>
                        </Grid>
                        <Grid item xs={6} md={4} sm={12}>
                            <Widget title="Losers">
                                <PieChart/>
                            </Widget>
                        </Grid>
                        <Grid item xs={6} md={8} sm={12}>
                            <Widget title='Crypto market'>
                                <DataTable/>
                            </Widget>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </section>
    )
}

