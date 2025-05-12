import {Box, Typography} from "@mui/material";
import  bgImg from "../assets/bg-img.png";
import accent from '../assets/accent.svg';
import './Home.css';
// import 

const Home = () => {
    //todo: agegroup filter
    //todo: table breakdown improve
    //todo: drill to detail download

    return (
      <>
        {/* <div style={{ position: "relative", overflow: "hidden"}}>
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
                        HIV Sentinel Events Pathways
                    </Typography>
                </Box>
            </div> */}
        <div class="banner">
          <div class="nav-links">
            <div class="tooltip-container">
              <a href="https://dwhanalytics.kenyahmis.org/superset/dashboard/1307">
                Real Time Dashboards
              </a>
              <div class="tooltip-text">
                Dashboards showing continuosly updated data to monitor HIV
                trends, detect gaps, and support immediate public health
                response
              </div>
            </div>
            <div class="tooltip-container">
              <a href="https://maps.kenyahmis.org">Hotspot Maps</a>
              <div class="tooltip-text">
                Maps showing geographic hotspots across various surveillance
                indicators, guiding targeted interventions and resource
                allocation
              </div>
            </div>
            <div class="tooltip-container">
              <a href="https://surveillance.kenyahmis.org/">
                Sentinel Events Pathways
              </a>
              <div class="tooltip-text">
                Dashboards that visualize patient journeys and flag sentinel
                events that point to possible clinical or programmatic gaps
                requiring public health action.
              </div>
            </div>
            <div class="tooltip-container">
              <a href="https://dwhanalytics.kenyahmis.org/superset/dashboard/1287/">
                Cohort Dashboards
              </a>
              <div class="tooltip-text">
                Dashboards that track individuals over time, highlighting gaps
                in care, treatment outcomes, and opportunities for public health
                action to improve HIV program performance.
              </div>
            </div>
            <div class="tooltip-container">
              <a>Epidemic Surveillance Report</a>
              <div class="tooltip-text">
                A report summarising public health responses to HIV surveillance
                data, highlighting actions taken, outcomes achieved, and areas
                for improvement to optimise intervention strategies.
              </div>
            </div>
          </div>
        </div>
      </>
    );

}
export default Home
