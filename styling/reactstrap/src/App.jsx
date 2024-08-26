import { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  FormText,
  Collapse,
  Card,
  CardBody,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";
import "./App.css";

const MyButton = ({ children, color }) => {
  return <button style={{ background: color }}>{children}</button>;
};

function App() {
  const [isValid, setIsValid] = useState(false);
  const [showCollapse, setShowCollapse] = useState(false);

  const toggleCollapse = () => setShowCollapse((prev) => !prev);

  return (
    <>
      {/* <MyButton color={"red"} >
      Submit
    </MyButton>
    <MyButton color={"green"} >
      Signup
    </MyButton> */}

      <h1>Reactstrap</h1>
      <h2>Buttons</h2>

      <Button color="primary" size="sm">
        Submit
      </Button>
      <Button color="success" size="sm">
        Submit
      </Button>
      <Button color="danger" size="lg">
        Submit
      </Button>

      <Form className="form-col">
        <h2>Inputs</h2>
        <FormGroup floating>
          <Input
            required
            valid={isValid}
            invalid={!isValid}
            onKeyUp={(e) => {
              setIsValid(e.target.validity.valid);
            }}
            name="email"
            type="email"
            placeholder="email"
            minLength={8}
            id="example1"
          />

          <Label htmlFor="example1">Email</Label>

          <FormFeedback tooltip valid>
            Will show if input is valid
          </FormFeedback>
          <FormText>Example help text, that remains unchanged</FormText>
          <Button type="submit" color="success">
            Submit
          </Button>
        </FormGroup>
      </Form>
      <FormGroup>
        <Label htmlFor="exampleDate"> Date</Label>
        <Input id="exampleDate" name="date" type="date" />
      </FormGroup>

      <Button onClick={toggleCollapse} color="warning">
        Toggle collapse
      </Button>
      <Collapse isOpen={showCollapse}>
        <Card>
          <CardBody>Yay this is a card</CardBody>
        </Card>
      </Collapse>

      <PopoverHeader>Popover Title</PopoverHeader>
      <PopoverBody>I will popup as a small message window</PopoverBody>


      <Button></Button>
    </>
  );
}

export default App;
