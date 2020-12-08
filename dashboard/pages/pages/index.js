import { Fragment } from "react";
import DashBoardMenu from "../../components/DashBoardMenu";
import { Container, Row } from "../styles";

function Pages() {
  return (
    <Fragment>
      <Row>
        <DashBoardMenu />
        <Container>Pages</Container>
      </Row>
    </Fragment>
  );
}

export default Pages;
