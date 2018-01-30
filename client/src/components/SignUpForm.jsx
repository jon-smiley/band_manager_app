import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Jumbotron  from "./Jumbotron";
import { Row, Container } from "./Grid";
import { Input, FormBtn } from "./Form";

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
  <Container fluid >
    <Row style={{fontSize:18, color:"black"}}>
      <Jumbotron>
        <Row>
          <form action="/" onSubmit={onSubmit}>
            <h2>Sign Up</h2>

            {errors.summary && <h4>{errors.summary}</h4>}

            <Input
              placeholder="Username"
              name="username"
              // errorText={errors.username}
              onChange={onChange}
              value={user.username}
            />

            <Input
              placeholder="Password"
              type="password"
              name="password"
              onChange={onChange}
              // errorText={errors.password}
              value={user.password}
              // https://www.chromium.org/developers/design-documents/create-amazing-password-forms
              // autocomplete="current-password"
            />

            <FormBtn primary="true">
              Create New Account
            </FormBtn>

            <p>Already have an account? <Link to={'/login'}>Log in</Link></p>

          </form>
        </Row>
      </Jumbotron>
    </Row>
  </Container>
);

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default SignUpForm;
