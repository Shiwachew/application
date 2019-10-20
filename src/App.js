import React, { useState } from 'react';
import uuidv4 from 'uuid/v4'
import { Container, Row, Col, Card, ButtonToolbar, Button } from 'react-bootstrap';

import Modal from './components/Modal'

const App = () => {
  const dummyData = [
    {
      id: uuidv4(),
      name: 'John Doe',
      email: 'johndoe@test.com',
      age: 22,
      phone_number: '0899123456',
      comunication_type: 'phone',
      english_level: 'B5',
      available_to_start: '2015/16/16',
      technical_skills: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam rerum',
      short_personal_presentation: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam rerum',
      study_from_home: true,
    },
    {
      id: uuidv4(),
      name: 'John Doe',
      email: 'johndoe@test.com',
      age: 23,
      phone_number: '0899123456',
      comunication_type: 'phone',
      english_level: 'B5',
      available_to_start: '2015/16/16',
      technical_skills: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam rerum',
      short_personal_presentation: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam rerum',
      study_from_home: true,
    },
    {
      id: uuidv4(),
      name: 'John Doe',
      email: 'johndoe@test.com',
      age: 24,
      phone_number: '0899123456',
      comunication_type: 'phone',
      english_level: 'B5',
      available_to_start: '2015/16/16',
      technical_skills: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam rerum',
      short_personal_presentation: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam rerum',
      study_from_home: true,
    }
  ]

  const [students, setStudents ] = useState(dummyData);
  const [modalShow, setModalShow] = useState(false);
  const [modalType, setModalType] = useState('new_student');
  const [modalStudent, setModalStudent] = useState({});

  const deleteStudent = (studentId) => {
    let newStudents = students;

    const studentIndex = newStudents.findIndex(student => student.id === studentId);

    newStudents.splice(studentIndex, 1);

    setStudents([...newStudents]);
  }

  const showModal = (modalType, modalStudent) => {
    setModalType(modalType)
    setModalShow(true)

    if ( modalType === 'update_student') {
      setModalStudent(modalStudent)
    }
  }
  
  return (
    <div className="App">
      <Container>
        <Row>
          <Col xs="12" style={{ margin: '1rem 0 0.5rem' }} >
            <Button variant="info" onClick={() => showModal('new_student')}>Add New Student</Button>
          </Col>

          {students.map( student => {
            return (
              <Col xs="12" style={{ margin: '0.5rem 0' }} key={student.id}>
                <Card bg="light">
                  <Card.Header>
                    <h4>
                      {student.name}
                    </h4>
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      <h6>Email</h6>
                      <p>{student.email}</p>

                      <h6>Age</h6>
                      <p>{student.age}</p>
                      
                      <h6>Phone Number</h6>
                      <p>{student.phone_number}</p>

                      <h6>Preffered Way of Communication</h6>
                      <p>{student.comunication_type}</p>

                      <h6>English Level</h6>
                      <p>{student.english_level}</p>

                      <h6>Available to Start</h6>
                      <p>{student.available_to_start}</p>

                      <h6>Technical Skills and Courses</h6>
                      <p>{student.technical_skills}</p>

                      <h6>Short Personal Presentation</h6>
                      <p>{student.short_personal_presentation}</p>

                      <h6>Study from home</h6>
                      <p>{student.study_from_home ? 'Yes' : 'No'}</p>
                    </Card.Text>

                    <ButtonToolbar>
                      <Button variant="info" onClick={() => showModal('update_student', student)}>Update Information</Button>
                      
                      <Button variant="danger" onClick={ () => deleteStudent(student.id) }>Delete</Button>
                    </ButtonToolbar>
                  </Card.Body>
                </Card>
              </Col>
            )
          }) }
        </Row>

        <Modal
          show={modalShow}
          onHide={() => setModalShow(false)}
          type={modalType}
          student={modalStudent}
        ></Modal>
      </Container>
    </div>
  );
}

export default App;
