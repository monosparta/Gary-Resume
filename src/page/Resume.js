import "./Resume.css";
import SkillBox from "../components/SkillBox";
import MyselfCard from "../components/MyselfCard.js"
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
            </div>
          </div> 
        </body>
      </div>
    </div>
  );
}

export default Resume;
