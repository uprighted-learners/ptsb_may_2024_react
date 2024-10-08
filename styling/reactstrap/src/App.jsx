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
  Popover,
  Fade,
  Toast,
  ToastHeader,
  ToastBody,
  UncontrolledAlert,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./App.css";

const MyButton = ({ children, color }) => {
  return <button style={{ background: color }}>{children}</button>;
};

function App() {
  const [isValid, setIsValid] = useState(false);
  const [showCollapse, setShowCollapse] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleCollapse = () => setShowCollapse((prev) => !prev);
  const toggleToast = () => setShowToast((prev) => !prev);
  const toggleModal = () => setShowModal((prev) => !prev);

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
      <div>
        <Button id="UncontrolledPopover" type="button">
          Launch Popover
        </Button>
        <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </UncontrolledPopover>
      </div>
      <Button color="primary" onClick={toggleToast}>
        Show/Hide Toast
      </Button>
      <Fade timeout={500} in={showToast}>
        <Toast isOpen={showToast}>
          <ToastHeader icon="primary" toggle={toggleToast}>
            New Message
          </ToastHeader>
          <ToastBody>Error signing up?</ToastBody>
        </Toast>
      </Fade>
      <UncontrolledAlert color="info">
        I am an alert and I can be dismissed
      </UncontrolledAlert>
      <h2>Spinners</h2>
      <Spinner size="lg" type="grow" className="m-5" color="primary" />
      <Spinner size="sm" type="border" className="m-5" color="success" />

      <Button outline={true} color="info" onClick={toggleModal}>
        Toggle Modal
      </Button>

      <Modal centered={true} isOpen={showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Modal Title</ModalHeader>
        <ModalBody>Enter user info</ModalBody>

        <ModalFooter>
          <Button>something</Button>
          <Button color="danger" onClick={toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default App;
