import { Col, Container, Row } from "react-bootstrap";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Row className="my-4">
          <Col>
            <h1>Quiz Interactif</h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
