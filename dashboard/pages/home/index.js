import { Fragment } from "react";

import { Container, Row } from "../styles";
import DashBoardMenu from "../../components/DashBoardMenu";

function Home() {
  return (
    <Fragment>
      <Row>
        <DashBoardMenu />
        <Container>Bem vindo</Container>
      </Row>
    </Fragment>
  );
}

export default Home;
