import React, { Fragment } from "react";
import {
  Form,
  Button,
  Message,
  Segment,
  TextArea,
  Divider,
} from "semantic-ui-react";

const CommonInputs = ({
  user: { bio, facebook, instagram, youtube, twitter },
  handleChange,
  showSocialLinks,
  setShowSocialLinks,
}) => {
  return (
    <Fragment>
      <Form.Field
        required
        control={TextArea}
        name='bio'
        onChange={handleChange}
        placeholder='bio'
      />

      <Button
        content='Add Social Links'
        color='red'
        icon='at'
        type='button'
        onClick={() => setShowSocialLinks(!showSocialLinks)}
      />
    </Fragment>
  );
};

export default CommonInputs;
