import { Fragment } from "react";
import DashBoardMenu from "../../../components/DashBoardMenu";
import { Container, Row } from "../../styles";

function Credentials() {
  return (
    <Fragment>
      <Row>
        <DashBoardMenu />

        <Container>Credentials</Container>
      </Row>
    </Fragment>
  );
}

export default Credentials;
