import { Container } from "@material-ui/core";
import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Player from '../components/Player';


const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      <Container style={{marginTop: 10}}>
          {children}
        </Container>
        <Player />
    </div>
  );
};

export default MainLayout;
