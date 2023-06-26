import "../css/Layout.css"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function EmailInput () {
  return (
    <FloatingLabel controlId="email" label="Email address" className="mb-3">
      <Form.Control type="email" placeholder="name@example.com" name="email-input" required />
    </FloatingLabel>
  );
}

function PasswordInput () {
  return (
    <FloatingLabel controlId="password" label="Password" className="mb-3">
      <Form.Control type="password" placeholder="Your password" name="password-input" required />
    </FloatingLabel>
  )
}

function RePasswordInput () {
  return (
    <FloatingLabel controlId="re-password" label="Confirm Password" className="mb-3">
      <Form.Control type="password" placeholder="Confirm Password" name="re-password-input" required />
    </FloatingLabel>
  )
}

function LinkSignup () {
  return (
    <div className="link-sign-up">
      <a href="/">Login here if you had an account!</a>
    </div>
  )
}

function SubmitButton () {
  return (
    <Button variant="primary" type="submit">Login</Button>
  )
}

export default function SignupForm () {
  return (
    <Form className="login-form">
      <EmailInput />
      <PasswordInput/>
      <RePasswordInput />
      <LinkSignup />
      <SubmitButton />
    </Form>
  );
}