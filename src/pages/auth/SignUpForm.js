import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../styles/App.module.css";

import { Form, Button, Image, Col, Row, Container } from "react-bootstrap";
import loginImage from "../../assets/login.jpg";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      {/* Image on the Left */}
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={loginImage}
          alt="Sign Up"
          fluid
        />
      </Col>

      {/* Form on the Right */}
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4`}>
          <h1 className={styles.Header}>Sign Up</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none" >username</Form.Label>
              <Form.Control className={styles.Input} type="text" placeholder="Enter your username" name="username"/>
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">password1</Form.Label>
              <Form.Control className={styles.Input} type="password" placeholder="Enter your Password" name="password1" />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">password2</Form.Label>
              <Form.Control className={styles.Input} type="password" placeholder="Confirm your Password" name="password2" />
            </Form.Group>

            <div className="d-flex justify-content-between align-items-center">
              <Form.Text className="text-muted" style={{ textAlign: "left" }}>
                Enjoy the best platform on the web!
              </Form.Text>
              <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
                      type="submit">
                Sign up
              </Button>
            </div>
          </Form>
        </Container>

        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
    </Row>
  );
};

export default SignUpForm;
