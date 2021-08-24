import { Card } from "antd";
import { MultilineTextFieldProperty } from "./properties/MultilineTextfieldProperty";
import { NumberTextfieldProperty } from "./properties/NumberTextfieldProperty";
import { OneLineTextfieldProperty } from "./properties/OneLineTextfieldProperty";

export const ElementProperties = ({
  propertyIdToBeRendered,
  formContents,
  updateFormContentForId,
  deleteFormContentForId,
}) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        style={{
          width: "100%",
          height: "85vh",
          border: "none",
          overflowX: "auto",
          overflowY: "scroll",
        }}
      >
        <div
          className="d-flex justify-content-between"
          style={{
            width: "100%",
          }}
        >
          <label>
            <b>
              <i>Properties : </i>
            </b>
          </label>

          {propertyIdToBeRendered !== null && propertyIdToBeRendered !== "" ? (
            <button
              id="property_delete_button_id"
              type="button"
              className="btn btn-danger"
              style={{
                width: "200px",
              }}
              onClick={() => {
                deleteFormContentForId();
              }}
            >
              Delete this !!!
            </button>
          ) : (
            <span></span>
          )}
        </div>
        <br />

        {formContents.map((input) => {
          if (
            input.type === "oneLineTextfield" &&
            input.id === propertyIdToBeRendered
          ) {
            return (
              <OneLineTextfieldProperty
                key={input.id}
                formContents={input}
                updateFormContentForId={updateFormContentForId}
              />
            );
          } else if (
            input.type === "numberTextfield" &&
            input.id === propertyIdToBeRendered
          ) {
            return (
              <NumberTextfieldProperty
                key={input.id}
                formContents={input}
                updateFormContentForId={updateFormContentForId}
              />
            );
          } else if (
            input.type === "textarea" &&
            input.id === propertyIdToBeRendered
          ) {
            return (
              <MultilineTextFieldProperty
                key={input.id}
                formContents={input}
                updateFormContentForId={updateFormContentForId}
              />
            );
          } else {
            return <span key={input.id}></span>;
          }
        })}
      </Card>
    </div>
  );
};
