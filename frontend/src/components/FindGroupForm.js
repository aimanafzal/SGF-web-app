import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class FindGroup extends React.Component {
  state = {
    pk: 0,
    title: "",
  };

  componentDidMount() {
    if (this.props.user) {
      const { pk, title } = this.props.state;
      this.setState({ pk, title });
    }
  }

  onChange = e => {
    // this.setState({ [e.target.title]: e.target.value });
    if (e.target.name === "title"){
      this.setState({
        title: e.target.value
      })
    }
  };

  sendPost = e => {
    e.preventDefault();
    axios.post(API_URL+'sendGroup/', this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    }).catch(console.log('there was an error'));
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.sendPost}>
          <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <Button>Save</Button>
      </Form>
    );
  }
}

export default FindGroup;