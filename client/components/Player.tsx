import React, {useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@material-ui/icons";
import {Grid, IconButton} from "@material-ui/core";
import styles from '../styles/Player.module.scss'
import {ITrack} from "../types/track";
import TrackProgress from "./TrackProgress";
// import {useTypedSelector} from "../hooks/useTypedSelector";
// import {useActions} from "../hooks/useActions";



const Player = () => {
    const track:ITrack = {_id: '1', name:'Needed You', artist:'Illenium', text:"some text", listens: 4, audio: "https://localhost:5000/audio/66e08092-5e59-4636-8262-24a0b6582e8a.mp3", picture: "http://localhost:5000/image/2458f495-ca2f-43aa-80d6-ca623cabc794.jpg", comments: []}
    const active = false


    return (
        <div className={styles.player}>
            <IconButton onClick={e => e.stopPropagation()}>
                {!active
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
                <div>{track?.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track?.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={()=>({})}/>
            <VolumeUp style={{marginLeft: 'auto'}}/>
            <TrackProgress left={0} right={100} onChange={()=>({})}/>
        </div>
    );
};

export default Player;


// let audio;

// const Player = () => {
//     const {pause, volume, active, duration, currentTime} = useTypedSelector(state => state.player)
//     const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()

//     useEffect(() => {
//         if (!audio) {
//             audio = new Audio()
//         } else {
//             setAudio()
//             play()
//         }
//     }, [active])

//     const setAudio = () => {
//         if (active) {
//             audio.src = 'http://localhost:5000/' + active.audio
//             audio.volume = volume / 100
//             audio.onloadedmetadata = () => {
//                 setDuration(Math.ceil(audio.duration))
//             }
//             audio.ontimeupdate = () => {
//                 setCurrentTime(Math.ceil(audio.currentTime))
//             }
//         }
//     }

//     const play = () => {
//         if (pause) {
//             playTrack()
//             audio.play()
//         } else {
//             pauseTrack()
//             audio.pause()
//         }
//     }

//     const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
//         audio.volume = Number(e.target.value) / 100
//         setVolume(Number(e.target.value))
//     }
//     const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
//         audio.currentTime = Number(e.target.value)
//         setCurrentTime(Number(e.target.value))
//     }

//     if (!active) {
//         return null
//     }

//     return (
//         <div className={styles.player}>
//             <IconButton onClick={play}>
//                 {pause
//                     ? <PlayArrow/>
//                     : <Pause/>
//                 }
//             </IconButton>
//             <Grid container direction="column" style={{width: 200, margin: '0 20px'}}>
//                 <div>{active?.name}</div>
//                 <div style={{fontSize: 12, color: 'gray'}}>{active?.artist}</div>
//             </Grid>
//             <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
//             <VolumeUp style={{marginLeft: 'auto'}}/>
//             <TrackProgress left={volume} right={100} onChange={changeVolume}/>
//         </div>
//     );
// };

// export default Player;