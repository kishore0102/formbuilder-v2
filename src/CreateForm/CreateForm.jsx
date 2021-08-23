import React from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.css";
import "./CreateForm.css";
import { Row, Col } from "antd";
import { ElementSidebar } from "./ElementSidebar";
import { ElementBuilder } from "./ElementBuilder";
import { ElementProperties } from "./ElementProperties";

export class CreateForm extends React.Component {
  state = {
    count: 0,
    formDetails: {
      formName: null,
      formId: null,
    },
    formContents: [],
  };

  componentDidMount = () => {
    let formName = prompt("Please enter the form name", "Form Name");
    let timestamp = new Date().getTime();
    let formId = "user_" + timestamp;
    console.log("id = " + formId);
    let formDetails = {
      formName,
      formId,
    };
    this.setState({ formDetails });
  };

  addOneLineTextFieldToFormContents = (e) => {
    let textField = {
      type: "oneLineTextfield",
      id: this.state.formDetails.formId + "_" + this.state.count,
      placeholder: "# Default placeholder",
      label: "Default Label",
      minlength: 0,
      maxlength: 255,
      required: true,
      disabled: true,
    };
    let formContents = this.state.formContents;
    formContents.push(textField);
    this.setState({ formContents });
    this.setState({ count: this.state.count + 1 });
  };

  addMultiLineTextFieldToFormContents = (e) => {
    let textField = {
      type: "textArea",
      id: this.state.formDetails.formId + "_" + this.state.count,
      placeholder: "# Default placeholder",
      label: "Default label",
      minlength: 0,
      maxlength: null,
      size: 0,
      required: true,
      disabled: true,
    };
    let formContents = this.state.formContents;
    formContents.push(textField);
    this.setState({ formContents });
    this.setState({ count: this.state.count + 1 });
  };

  addNumberTextFieldToFormContents = (e) => {
    let textField = {
      type: "numberTextfield",
      id: this.state.formDetails.formId + "_" + this.state.count,
      placeholder: "Default placeholder",
      label: "Default label",
      cols: 5,
      rows: 5,
      minlength: 0,
      maxlength: null,
      required: true,
      disabled: true,
    };
    let formContents = this.state.formContents;
    formContents.push(textField);
    this.setState({ formContents });
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <React.Fragment>
        <Row style={{ paddingTop: "10px" }}>
          <Col
            span={6}
            style={{
              paddingLeft: "20px",
              paddingTop: "10px",
              height: "85vh",
              borderRadius: "25px",
            }}
          >
            <ElementSidebar
              addOneLineTextFieldToFormContents={
                this.addOneLineTextFieldToFormContents
              }
              addMultiLineTextFieldToFormContents={
                this.addMultiLineTextFieldToFormContents
              }
              addNumberTextFieldToFormContents={
                this.addNumberTextFieldToFormContents
              }
            />
          </Col>
          <Col
            span={9}
            style={{
              paddingLeft: "20px",
              paddingTop: "10px",
              height: "85vh",
              borderRadius: "25px",
            }}
          >
            <ElementBuilder
              formDetails={this.state.formDetails}
              formContents={this.state.formContents}
            />
          </Col>
          <Col
            span={9}
            style={{
              paddingLeft: "20px",
              paddingTop: "10px",
              paddingRight: "20px",
              height: "85vh",
              borderRadius: "25px",
            }}
          >
            <ElementProperties />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
