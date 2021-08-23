import React from "react";

export const OneLineTextfield = ({ formContents }) => {
  return (
    <React.Fragment>
      <div style={{ paddingBottom: "10px" }}></div>
      <div style={{ border: "1px solid #bbbbbb", borderRadius: "5px" }}>
        <a href="#!" className="list-group-item list-group-item-action">
          <div style={{ padding: "7px" }}>
            <div className="row" style={{ paddingBottom: "7px" }}>
              <label>
                <b>
                  {formContents.label}&nbsp;&nbsp;
                  {formContents.required ? (
                    <span className="text-danger">*</span>
                  ) : (
                    <span></span>
                  )}
                </b>
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
                id={formContents.id}
                type="text"
                name={formContents.id}
                disabled={formContents.disabled}
              />
            </div>
            <div className="row">
              <label
                className="instruction"
                style={{ fontStyle: "italic", color: "#888888" }}
              >
                {formContents.placeholder}
              </label>
            </div>
          </div>
        </a>
      </div>
      <div style={{ paddingBottom: "10px" }}></div>
    </React.Fragment>
  );
};
