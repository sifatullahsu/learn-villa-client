import React from 'react';
import { Accordion } from 'react-bootstrap';

const FaqPage = () => {
  return (
    <div className='container my-5'>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <h2 className='text-center mb-4'>FAQ</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Can Learn Villa accept offline payment?</Accordion.Header>
            <Accordion.Body>
              Yes, we accept offline payment.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Can I purchase multiple courses?</Accordion.Header>
            <Accordion.Body>
              Yes you can.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Where Learn Villa was located?</Accordion.Header>
            <Accordion.Body>
              Ashulia, Savar, Dhaka, Bangladesh.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Can I logged in with github?</Accordion.Header>
            <Accordion.Body>
              Yes you can. We only except google, github.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqPage;