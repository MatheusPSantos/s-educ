import DashBoardMenu from "../../../components/DashBoardMenu";

import { Fragment } from "react";
import { Row, Container } from "../../styles";

function Theme() {
  return (
    <Fragment>
      <Row>
        <DashBoardMenu />
        <Container>Theme</Container>
      </Row>
    </Fragment>
  );
}

export default Theme;
