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
    propertyIdToBeRendered: null,
    formDetails: {
      formName: null,
      formId: null,
    },
    formContents: [],
  };

  componentDidMount = () => {
    let timestamp = new Date().getTime();
    let formName = "form_" + timestamp;
    let formId = "user_" + timestamp;
    let formDetails = {
      formName,
      formId,
    };
    this.setState({ formDetails });
  };

  resetFormContents = () => {
    this.setState({ formContents: [] });
    this.setState({ propertyIdToBeRendered: null });
    this.setState({ count: 0 });
  };

  updateFormContentForId = (contents) => {
    let idUpdated = contents.id;
    let formContents = this.state.formContents;
    for (let i = 0; i < formContents.length; i++) {
      if (formContents[i].id === idUpdated) {
        formContents[i] = contents;
      }
    }
    this.setState({ formContents });
  };

  deleteFormContentForId = () => {
    let formContents = this.state.formContents;
    formContents = formContents.filter(
      (input) => input.id !== this.state.propertyIdToBeRendered
    );
    this.setState({ formContents });
    this.setState({ propertyIdToBeRendered: null });
  };

  updatePropertyIdToBeRendered = (id) => {
    this.setState({ propertyIdToBeRendered: id });
  };

  addOneLineTextFieldToFormContents = (e) => {
    let textField = {
      type: "oneLineTextfield",
      id: this.state.formDetails.formId + "_" + this.state.count,
      placeholder: "Default placeholder_" + this.state.count,
      label: "Default Label_" + this.state.count,
      minlength: 0,
      maxlength: 255,
      required: false,
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
      placeholder: "Default placeholder_" + this.state.count,
      label: "Default label_" + this.state.count,
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
      placeholder: "Default placeholder_" + this.state.count,
      label: "Default label_" + this.state.count,
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
              propertyIdToBeRendered={this.state.propertyIdToBeRendered}
              updatePropertyIdToBeRendered={this.updatePropertyIdToBeRendered}
              resetFormContents={this.resetFormContents}
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
            <ElementProperties
              propertyIdToBeRendered={this.state.propertyIdToBeRendered}
              formContents={this.state.formContents}
              updateFormContentForId={this.updateFormContentForId}
              deleteFormContentForId={this.deleteFormContentForId}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
