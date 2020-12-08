import { Fragment } from "react";
import DashBoardMenu from "../../../components/DashBoardMenu";
import { Container, Row } from "../../styles";

function ProjectConfigurations() {
  return (
    <Fragment>
      <Row>
        <DashBoardMenu />
        <Container>Project Configurations</Container>
      </Row>
    </Fragment>
  );
}

export default ProjectConfigurations;
