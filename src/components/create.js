import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

export default function Create() {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [checkbox, setCheckbox] = useState(false);
  const postData = () => {
    axios.post(`https://dummyjson.com/products/add`, {
      title,
      description,
      checkbox,
    });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>title</label>
          <input
            placeholder="title"
            onChange={(e) => settitle(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>description</label>
          <input
            placeholder="description"
            onChange={(e) => setdescription(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckbox(!checkbox)}
          />
        </Form.Field>
        <Button onClick={postData} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
