import {Box, CardMedia, Typography} from "@mui/material";
import  bgImg from "../assets/bg-img.png";
import Grid from "@mui/material/Grid2";
import Card from '@mui/material/Card';
import CardContent from "@mui/material/CardContent";
import CardActionArea from '@mui/material/CardActionArea';
import accent from '../assets/accent.svg';

const Home = () => {
    //todo: agegroup filter
    //todo: table breakdown improve
    //todo: drill to detail download

    return (
        <>
            <div style={{ position: "relative", overflow: "hidden"}}>
                <img
                    src={accent}
                    alt="Accent SVG"
                    style={{
                        position: "absolute",
                        right: "-240px", // Move the SVG half outside the viewport
                        top: "50%",
                        transform: "translateY(-40%)",
                        width: "500px", // Adjust width to ensure half is visible
                        height: "500px", // Adjust height accordingly
                        clipPath: "inset(0 43% 0 0)",
                        zIndex: 0,
                    }}
                />
                <Box
                    sx={{
                        backgroundImage: `url(${bgImg})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        height: "290px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: "7%",
                        mb: 1,
                        position: "relative",
                        zIndex: 1
                    }}
                >
                    <Typography variant="body1" sx={{fontSize: "4rem"}}>
                        HIV Case Surveillance Dashboards
                    </Typography>
                    <Typography variant="body1" gutterBottom sx={{fontSize: "1.2rem"}}>
                        Everything you need to know about HIV Case Surveillance - from real-time trends and longitudinal tracking of cohorts to geographic hotspots and public health response reports- all in one place.
                    </Typography>
                </Box>
                <Typography gutterBottom variant="h3" sx={{display: "flex", ml: 3}}>
                    Our Products
                </Typography>
                <Grid
                    container
                    spacing={2}
                    columns={12}
                    mb={1}
                    sx={{ mx: 10 }}
                    style={{position: "relative", zIndex: 1}}
                >
                    <Grid item size={{lg: 3}}>
                        <Card variant="outlined" sx={{width: "100%", minHeight: "250px", boxShadow: 6}}>
                            <CardActionArea href={"https://dwhanalytics.kenyahmis.org/superset/dashboard/1287/"} target={"_blank"}>
                                <CardMedia
                                    sx={{height: 90, objectFit: "contain", objectPosition: "top center"}}
                                    component="img"
                                    image="/assets/cohort-dashboards.png"
                                    title="cohort dashboards"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: "1.2rem"}}>
                                        Longitudinal Tracking Dashboards
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'text.secondary',
                                        display: "flex",
                                        alignItems: "flex-start",
                                    }}>
                                        Dashboards that track individuals over time, highlighting gaps in care, treatment outcomes, and opportunities for public health action to improve HIV program performance.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item size={{lg: 3}}>
                        <Card variant="outlined" sx={{width: "100%", minHeight: "250px", boxShadow: 6}}>
                            <CardActionArea href={"https://dwhanalytics.kenyahmis.org/superset/dashboard/1307/"} target={"_blank"}>
                                <CardMedia
                                    sx={{height: 90, objectFit: "contain", objectPosition: "top center"}}
                                    component="img"
                                    image="/assets/real-time.png"
                                    title="real time"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{ fontSize: "1.2rem"}}>
                                        Real-Time HIV Surveillance Dashboards
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'text.secondary',
                                        display: "flex",
                                        alignItems: "flex-start",
                                    }}>
                                        Dashboards delivering continuously updated data to monitor HIV trends, detect gaps, and support immediate public health actions.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item size={{lg: 3}}>
                        <Card variant="outlined" sx={{width: "100%", boxShadow: 6, minHeight: "250px"}}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{height: 90, objectFit: "contain", objectPosition: "top center"}}
                                    component="img"
                                    image="/assets/hotspot.png"
                                    title="hotspot maps"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{ fontSize: "1.2rem"}}>
                                        Geographic Hotspot Maps
                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'text.secondary',
                                        display: "flex",
                                        alignItems: "flex-start",
                                    }}>
                                        Maps that visualize geographic hotspots across various surveillance indicators, guiding targeted interventions and resource allocation.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item size={{lg: 3}} >
                        <Card variant="outlined" sx={{width: "100%", boxShadow: 6, minHeight: "250px"}}>
                            <CardActionArea>
                                <CardMedia
                                    sx={{height: 90, objectFit: "contain", objectPosition: "top center"}}
                                    component="img"
                                    image="/assets/report.png"
                                />
                                <CardContent>
                                    <Typography gutterBottom component="div" sx={{fontSize: "1.2rem"}}>
                                        Public Health Response Report

                                    </Typography>
                                    <Typography variant="body2" sx={{
                                        color: 'text.secondary',
                                        display: "flex",
                                        alignItems: "flex-start",
                                    }}>
                                        A report summarizing public health responses to HIV surveillance data, highlighting actions taken, outcomes achieved, and areas for improvement to optimize intervention strategies.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </>
    )

}
export default Home
