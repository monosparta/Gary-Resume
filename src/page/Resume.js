import "./Resume.css";
import SkillBox from "../components/SkillBox.js";
import MyselfCard from "../components/MyselfCard.js"
import Timeline from "../components/Timeline.js"
import Grid from '@mui/material/Grid';

function Resume() {
  return (
    <div>
      <div className="Basic">
        <header className="Header">
        </header>
        <body>
          <div className="Body">
            <div className="Body-border">
              <Grid container justifyContent="center">
                <MyselfCard/>
              </Grid>
              <Grid container justifyContent="center">
                <Timeline/>
              </Grid>
              <Grid container spacing={1} columns={{ xs: 3, sm: 6, md: 12 }}>
                <Grid item xs={3}>
                  <SkillBox/>
                </Grid>
                <Grid item xs={3}>
                  <SkillBox/>
                </Grid>
                <Grid item xs={3}>
                  <SkillBox/>
                </Grid>
                <Grid item xs={3}>
                  <SkillBox/>
                </Grid>
              </Grid>
            </div>
          </div> 
        </body>
      </div>
    </div>
  );
}

export default Resume;