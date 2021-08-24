import React from "react";

export const MultilineTextfield = ({
  formContents,
  propertyIdToBeRendered,
  updatePropertyIdToBeRendered,
}) => {
  let propertyIdToBeRenderedBorderColor = "1px solid #bbbbbb";
  if (propertyIdToBeRendered === formContents.id) {
    propertyIdToBeRenderedBorderColor = "2px solid #ffa600";
  }
  return (
    <React.Fragment>
      <div style={{ paddingBottom: "10px" }}></div>
      <div
        style={{
          borderRadius: "5px",
        }}
      >
        <a
          href="#!"
          style={{ border: propertyIdToBeRenderedBorderColor }}
          key={formContents.id}
          className="list-group-item list-group-item-action"
          onClick={() => {
            updatePropertyIdToBeRendered(formContents.id);
          }}
        >
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
              <textarea
                className="form-control"
                id={formContents.id}
                name={formContents.id}
                rows={formContents.rows}
                disabled={formContents.disabled}
                style={{
                  resize: "none",
                }}
              />
            </div>
            <div className="row">
              <label
                className="instruction"
                style={{ fontStyle: "italic", color: "#888888" }}
              >
                #&nbsp;{formContents.placeholder}
              </label>
            </div>
          </div>
        </a>
      </div>
      <div style={{ paddingBottom: "10px" }}></div>
    </React.Fragment>
  );
};
