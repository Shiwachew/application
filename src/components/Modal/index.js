import React, { useState, useRef } from 'react';
import { Button, Modal, Form, ButtonToolbar } from 'react-bootstrap';
import uuidv4 from 'uuid/v4';

const CustomModal = (props) => {
    const [validated, setValidated] = useState(false);

    const name = useRef(null)
    const email = useRef(null)
    const age = useRef(null)
    const phone_number = useRef(null)
    const type_email = useRef(null)
    const type_phone = useRef(null)
    const english_level = useRef(null)
    const date = useRef(null)
    const tech_skills = useRef(null)
    const personal_presentation = useRef(null)
    const study_from_home = useRef(null)

    const handleSubmit = event => {
      const form = event.currentTarget;

      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        setValidated(true);
      }
    };

    return (
      <Modal show={props.show}>
          <Modal.Header>
              <Modal.Title>{props.type === 'new_student' ? 'Add new student' : 'Update student information' }</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control required type="text" placeholder="Enter name" ref={name} />
              </Form.Group>

              <Form.Group controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control required type="email" placeholder="Enter email" ref={email} />
              </Form.Group>

              <Form.Group controlId="formGridAge">
                <Form.Label>Age</Form.Label>
                <Form.Control required type="number" placeholder="Age" ref={age} />
              </Form.Group>

              <Form.Group controlId="formGridPhoneNUmber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control required type="text" placeholder="Phone Number" ref={phone_number} />
              </Form.Group>

              <Form.Group controlId="formGridCommunicationType">
                <Form.Label>Preffered Way of Communication</Form.Label>

                <Form.Check
                  required
                  type='radio'
                  label="Email"
                  name="comunication_type"
                  id="communication_email"
                  ref={type_email}
                />
                <Form.Check
                  required
                  type='radio'
                  label="Phone"
                  name="comunication_type"
                  id="communication_phone"
                  ref={type_phone}
                />
              </Form.Group>

              <Form.Group controlId="formGridEnglishLevel">
                <Form.Label>English Level</Form.Label>

                <Form.Control required as="select" ref={english_level}>
                  <option>A1</option>
                  <option>A2</option>
                  <option>B1</option>
                  <option>B2</option>
                  <option>C1</option>
                  <option>C2</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="formGridDate">
                <Form.Label>Available date to start</Form.Label>
                <Form.Control requried type="text" placeholder="Enter date" ref={date}/>
              </Form.Group>

              <Form.Group controlId="formGridTechnicalSkills">
                <Form.Label>Technical Skills and Courses</Form.Label>
                <Form.Control as="textarea" placeholder="Technical Skills and Courses" ref={tech_skills} />
              </Form.Group>

              <Form.Group controlId="formGridShortPresentation">
                <Form.Label>Short Personal Presentation</Form.Label>
                <Form.Control as="textarea" placeholder="Short Personal Presentation" ref={personal_presentation}/>
              </Form.Group>

              <Form.Group controlId="formGridCommunicationType">
                <Form.Check
                  ref={study_from_home}
                  type='checkbox'
                  label="Study From Home"
                />
              </Form.Group>

              <ButtonToolbar>
                <Button variant="secondary" onClick={props.onHide}>
                  Close
                </Button>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </ButtonToolbar>
            </Form>
          </Modal.Body>
      </Modal>
    );
}

export default CustomModal;
