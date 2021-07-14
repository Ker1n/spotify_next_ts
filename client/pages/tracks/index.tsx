import { Grid, Card, Box, Button } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import TrackList from "../../components/TrackList";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";

import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";




const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {_id: '1', name:'Needed You', artist:'Illenium', text:"some text", listens: 4, audio: "https://localhost:5000/audio/66e08092-5e59-4636-8262-24a0b6582e8a.mp3", picture: "http://localhost:5000/image/2458f495-ca2f-43aa-80d6-ca623cabc794.jpg", comments: []},
    {_id: '2', name:'goa', artist:'Ashley Wallbridge', text:"some text", listens: 4, audio: "https://localhost:5000/audio/fd798374-1b51-48b6-8f92-fcb8afa051d4.mp3", picture: "http://localhost:5000/image/3fc0e2d1-a880-42ab-8a2f-3ada2f888406.jpg", comments: []},
    {_id: '3', name:'Long Way Home', artist:'Gareth Emery', text:"some text", listens: 4, audio: "https://localhost:5000/audio/fad74883-3e28-4297-8542-0c1f30c852e3.mp3", picture: "http://localhost:5000/image/d3f55205-8847-42cc-90c0-8f90e1519385.jpg", comments: []},
    {_id: '4', name:"You'll Be OK", artist:'Gareth Emery', text:"some text", listens: 4, audio: "https://localhost:5000/audio/587d645b-3041-4fa0-8747-0df7086dce67.mp3", picture: "http://localhost:5000/image/d7be7664-f988-4830-a286-64e8252a5828.jpg", comments: []}
  ]

  
 
  return (
    <>
    
      <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={()=> router.push('/tracks/create')}>Download</Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>   
      </MainLayout>
    </>
  );
};

export default Index;
