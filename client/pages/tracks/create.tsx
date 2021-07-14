import { Grid, Card, Box, Button, TextField } from "@material-ui/core";
import { useRouter } from "next/router";
import React from "react";
import FileUpload from "../../components/FileUpload";
import StrepWrapper from "../../components/StrepWrapper";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [picture, setPicture] = React.useState(null);
  const [audio, setAudio] = React.useState(null);

  const back = () => {
    if (activeStep <= 2) {
      setActiveStep((prev) => prev - 1);
    }
  };

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep((prev) => prev + 1);
    }
  };

  return (
    <MainLayout>
      <StrepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label="Название трека" />
            <TextField style={{ marginTop: 10 }} label="Название исполнителя" />
            <TextField
              style={{ marginTop: 10 }}
              label="Слова к треку"
              multiline
              rows={3}
            />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Загрузите изображение</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Загрузите аудио</Button>
          </FileUpload>
        )}
      </StrepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={next}>Next</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
