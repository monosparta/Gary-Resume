import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HailIcon from '@mui/icons-material/Hail';
import Typography from '@mui/material/Typography';
import TimeCard from './TimeCard.js'
import FCUImg from '../img/FCU.jpg'
import FCUBImg from '../img/FCU_b.png'
import InjectImg from '../img/Inject.jpg'
import InjectBImg from '../img/Inject_b.png'
import TrunkStudioImg from '../img/TrunkStudio.jpg'
import TrunkStudioBImg from '../img/TrunkStudio_b.png'


export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            畢業
          </Typography>
          <TimeCard 
            img={FCUImg}
            imgb={FCUBImg} 
            motto="啟程與成長"
            paragraph1="剛進入資工系時，我對於程式完全是一竅不通，連基本的語言、語法都不了解，但我還是毅然決然踏上了這條路。"
            paragraph2="我第一個觸碰的程式語言是C，起初還能跟得上課程進度，但後來的Array、LinkedList讓我遇到了瓶頸，也曾思考為什麼自己要選擇資工，最後我告訴自己既然是自己的選擇，那麼就要想辦法做到最好。"
            paragraph3="漸漸的我學會了更多的語言、也學習到程式不光只是寫，還有使用者需求、設計、優化、維護這些必要且繁瑣的開發流程，以及團隊合作的重要性。"
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            醫療資訊行政
          </Typography>
          <TimeCard 
            img={InjectImg}
            imgb={InjectBImg} 
            motto="磨練與助人"
            paragraph1=""
            paragraph2=""
            paragraph3=""
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
          <TimelineDot color='success' variant="outlined">
            <HailIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'success.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            創科資訊-實習生
          </Typography>
          <TimeCard 
            img={TrunkStudioImg}
            imgb={TrunkStudioBImg}  
            motto="精進與重生"
            paragraph1=""
            paragraph2=""
            paragraph3=""
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}