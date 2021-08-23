import React from "react";

export const OneLineTextfieldProperty = ({
  formContents,
  updateFormContentForId,
}) => {
  return (
    <React.Fragment>
      <div style={{ paddingBottom: "10px" }}></div>
      <div style={{ padding: "7px" }}>
        <div className="row" style={{ paddingBottom: "7px" }}>
          <label>
            <b>Label Name :</b>
          </label>
        </div>
        <div
          className="row"
          style={{
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <input
            className="form-control"
            id="property_label_id"
            type="text"
            name="property_label_name"
            defaultValue={formContents.label}
            onChange={(e) => {
              let contents = formContents;
              contents.label = e.target.value;
              updateFormContentForId(contents);
            }}
          />
        </div>
      </div>
      <div style={{ padding: "7px" }}>
        <div className="row" style={{ paddingBottom: "7px" }}>
          <label>
            <b>Placeholder value :</b>
          </label>
        </div>
        <div
          className="row"
          style={{
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <input
            className="form-control"
            id="property_placeholder_id"
            type="text"
            name="property_placeholder_name"
            defaultValue={formContents.placeholder}
            onChange={(e) => {
              let contents = formContents;
              contents.placeholder = e.target.value;
              updateFormContentForId(contents);
            }}
          />
        </div>
      </div>
      <div style={{ padding: "7px" }}>
        <div className="row" style={{ paddingBottom: "7px" }}>
          <label>
            <b>Minimum length :</b>
          </label>
        </div>
        <div
          className="row"
          style={{
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <input
            className="form-control"
            id="property_minlength_id"
            type="number"
            name="property_minlength_name"
            defaultValue={formContents.minlength}
            onChange={(e) => {
              let contents = formContents;
              contents.minlength = e.target.value;
              updateFormContentForId(contents);
            }}
          />
        </div>
      </div>
      <div style={{ padding: "7px" }}>
        <div className="row" style={{ paddingBottom: "7px" }}>
          <label>
            <b>Maximum length :</b>
          </label>
        </div>
        <div
          className="row"
          style={{
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <input
            className="form-control"
            id="property_maxlength_id"
            type="number"
            name="property_maxlength_name"
            defaultValue={formContents.maxlength}
            onChange={(e) => {
              let contents = formContents;
              contents.maxlength = e.target.value;
              updateFormContentForId(contents);
            }}
          />
        </div>
      </div>
      <div
        style={{
          padding: "7px",
          display: "flex",
          alignContent: "space-between",
        }}
      >
        <div className="row" style={{ paddingBottom: "7px" }}>
          <label>
            <b>Required : &nbsp;&nbsp;&nbsp;</b>
          </label>
        </div>
        <div
          className="row"
          style={{
            paddingBottom: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              defaultChecked={formContents.required}
              onChange={(e) => {
                let contents = formContents;
                contents.required = e.target.checked;
                updateFormContentForId(contents);
              }}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
