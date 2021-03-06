import React from "react";
import { Card, IconButton, Grid } from "@material-ui/core";
import { ITrack } from "../types/track";
import styles from "../styles/TrackItem.module.scss";
import { Delete, Pause, PlayArrow } from "@material-ui/icons";
import { useRouter } from "next/router";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {

    const router = useRouter();
  return (
    <Card className={styles.track} onClick={()=> router.push('/tracks/' + track._id)}>
      <IconButton onClick={e => e.stopPropagation()} style={{marginRight:10}}>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img width={70} height={70} src={track.picture} />
      <Grid container direction="column" style={{width:200, margin: '0 20px'}}>
        <div>{track.name}</div>
        <div style={{fontSize:12, color:'grey'}}>{track.artist}</div>
      </Grid>
      {active && <div>02:75 / 03:22</div>}
      <IconButton onClick={e => e.stopPropagation()} style={{marginLeft:'auto'}}>
          <Delete />
      </IconButton>
    </Card>
  );
};

export default TrackItem;
