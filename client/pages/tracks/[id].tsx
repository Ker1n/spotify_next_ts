import { Button, Grid, TextField } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
  const track: ITrack = {
    _id: "1",
    name: "Needed You",
    artist: "Illenium",
    text: "some text",
    listens: 4,
    audio:
      "https://localhost:5000/audio/66e08092-5e59-4636-8262-24a0b6582e8a.mp3",
    picture:
      "http://localhost:5000/image/2458f495-ca2f-43aa-80d6-ca623cabc794.jpg",
    comments: [],
  };
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{ fontSize: 26 }}
        onClick={() => router.push("/tracks")}
      >
        К Списку
      </Button>
      <Grid style={{ margin: "20px 0px" }}>
        <img src={track.picture} width={200} height={200} />
        <div>
          <h1>Название трека - {track.name}</h1>
          <h2>Исполнитель - {track.artist}</h2>
          <h3>Прослушиваний - {track.listens}</h3>
        </div>
      </Grid>
      <h1>Слова к треку</h1>
      <p>{track.text}</p>
      <h2>Комментарии</h2>
      <Grid>
        <TextField label="Ваше имя" fullWidth />
        <TextField
          label="Ваше Коменнтарий"
          fullWidth
          multiline
          rows={4}
          style={{ marginTop: 20 }}
        />
        <Button style={{ marginTop: 20, marginBottom: 20 }}>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
              <div>Автор - {comment.username}</div>
              <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
