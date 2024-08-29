import React, { useRef, useCallback, useState, useEffect } from "react";
import { Button, Countdown, Dropdown, Modal, Navbar } from "react-daisyui";

const DaisyUI = () => {
  const [countdown, setCountdown] = useState({});

  const countdownDate = new Date("10/16/2024").getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const dateObj = { days, hours, minutes, seconds };

      setCountdown(dateObj);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);
  const ref = useRef();

  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  return (
    <div className="m-4 border-purple-500 text-7xl font-bond text-fuschsia-500 shadow-outline">
      <h1>Vanilla DaisyUI</h1>

      <button className="btn btn-primary btn-md gap-2">
        DaisyUI+Tailwind Button
      </button>
      <Button size="lg" color="secondary">
        React DaisyUI Button
      </Button>

      <Navbar className="my-32 px-2 font-sans bg-base-300 rounded-box">
        <Navbar.Start className="px-2 lg:flex-none">
          <span className="text-lg font-bold">My Nav</span>
        </Navbar.Start>

        <Navbar.End>
          <Dropdown>
            <Dropdown.Toggle
              className="btn btn-ghost rounded-btn"
              button={false}
            >
              Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu className="w-52 mt-4">
              <Dropdown.Item>Item 1</Dropdown.Item>
              <Dropdown.Item>Item 2</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Navbar>

      <Button onClick={handleShow}>Open Modal</Button>

      <Modal ref={ref} backdrop={true}>
        <Modal.Header className="font-bond text-lg">Hello!</Modal.Header>
        <Modal.Body>Press ESC key or click outside to close</Modal.Body>
      </Modal>
      <h2 className="text-4xl mb-4">Capstone Presentation</h2>
      <div className="flex justify-center gap-3">
        <Countdown className="font-mono text-5xl" value={countdown.days}>
        
        </Countdown>
        <Countdown className="font-mono text-5xl" value={countdown.minutes}>
          minutes
        </Countdown>
        <Countdown className="font-mono text-5xl" value={countdown.seconds}>
          seconds
        </Countdown>
      </div>
    </div>
  );
};

export default DaisyUI;
