import React, { Fragment, useState, useEffect, useRef } from "react";
import {
  Form,
  Button,
  Message,
  Segment,
  TextArea,
  Divider,
} from "semantic-ui-react";
import {
  HeaderMessage,
  FooterMessage,
} from "../components/Common/WelcomeMessage";

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    instagram: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const { name, email, password, bio } = user;
  const [showSocialLink, setShowSocialLinks] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formloading, setFormLoading] = useState(false);

  const [username, setUserName] = useState("");
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <Fragment>
      <HeaderMessage />
      <Form
        loading={formloading}
        error={errorMessage !== null}
        onSubmit={handleSubmit}>
        <Message
          error
          header='Opps!'
          content={errorMessage}
          onDismiss={() => setErrorMessage(null)}
        />
      </Form>

      <Segment>
        <Form.Input
          label='Name'
          placeholder='Name'
          name='name'
          value={name}
          onChange={handleChange}
          fluid
          icon='user'
          iconPosition='left'
          required
        />

        <Form.Input
          label='Email'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleChange}
          fluid
          icon='envelope'
          iconPosition='left'
          type='email'
          required
        />

        <Form.Input
          label='Password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleChange}
          fluid
          icon={{
            name: "eye",
            circular: true,
            link: true,
            onClick: () => setShowPassword(!showPassword),
          }}
          iconPosition='left'
          type={showPassword ? "text" : "password"}
          required
        />

        <Form.Input
          loading={usernameLoading}
          error={!usernameAvailable}
          required
          label='Username'
          placeholder='Username'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (regexUserName.test(e.target.value)) {
              setUsernameAvailable(true);
            } else {
              setUsernameAvailable(false);
            }
          }}
          fluid
          icon={usernameAvailable ? "check" : "close"}
          iconPosition='left'
        />
      </Segment>
      <FooterMessage />
    </Fragment>
  );
};

export default Signup;
