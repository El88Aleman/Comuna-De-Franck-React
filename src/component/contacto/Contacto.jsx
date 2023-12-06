import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function Contacto() {
  return (
    <Form
      style={{
        marginTop: "100px",
        marginLeft: "10px",
        marginRight: "10px",
        marginBottom: "10px",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="Email" placeholder="Email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Nombre y Apellido</Form.Label>
          <Form.Control
            type="Nombre y Apellido"
            placeholder="Nombre y Apellido"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Dirección</Form.Label>
        <Form.Control placeholder="Rivavia 1243" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Depto/Piso</Form.Label>
        <Form.Control placeholder="Departamento/ Piso" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Ciudad/Localidad</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Provincia</Form.Label>
          <Form.Select defaultValue="Santa Fe">
            <option>Santa Fe</option>
            <option>Buenos Aires</option>
            <option>Chaco</option>
            <option>Entre Rios</option>
            <option>Formosa</option>
            <option>Catamarca</option>
            <option>La Rioja</option>
            <option>Cordoba</option>
            <option>San Juan</option>
            <option>Mendoza</option>
            <option>Jujuy</option>
            <option>Salta</option>
            <option>Chubut</option>
            <option>Neuquen</option>
            <option>Tucumán</option>
            <option>Santa Cruz</option>
            <option>Misiones</option>
            <option>Tierra del Fuego</option>
            <option>La Pampa</option>
            <option>San Luis</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>C.P</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Deseo ser contactado por..</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="No soy un robot" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
}

export default Contacto;
