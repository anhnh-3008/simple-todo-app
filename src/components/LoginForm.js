import "../css/Layout.css";
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

function RememberCheckbox () {
  return (
    <Form.Check className="mb-3"
                type="switch"
                id="custom-switch"
                label="Remember me"
                name="is_remember"
    />
  )
}

function LinkSignup () {
  return (
    <div className="link-sign-up">
      <a href="/signup">Sign in if you don't have an account!</a>
    </div>
  )
}

function SubmitButton () {
  return (
    <Button variant="primary" type="submit">Login</Button>
  )
}

export default function LoginForm () {
  return (
    <Form className="login-form">
      <EmailInput />
      <PasswordInput />
      <RememberCheckbox />
      <LinkSignup />
      <SubmitButton />
    </Form>
  );
}
