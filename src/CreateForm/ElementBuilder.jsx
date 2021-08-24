import { Button, Card } from "antd";
import { MultilineTextfield } from "./elements/MultilineTextField";
import { NumberTextfield } from "./elements/NumberTextfield";
import { OneLineTextfield } from "./elements/OneLineTextfield";

export const ElementBuilder = ({
  formDetails,
  formContents,
  propertyIdToBeRendered,
  updatePropertyIdToBeRendered,
  resetFormContents,
}) => {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        style={{
          width: "100%",
          height: "85vh",
          overflowX: "auto",
          overflowY: "scroll",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <label>
            <b>
              <i>
                <span>Form Name :</span>
              </i>
            </b>
          </label>
          <input
            id="formNameFieldId"
            type="text"
            name="formNameFieldName"
            defaultValue={formDetails.formName}
            disabled
            size={30}
          />
          <Button type="primary">Save Form</Button>
          <Button
            danger
            onClick={() => {
              let response = window.confirm(
                "Are you sure about the resetting this form ?"
              );
              if (!response) return;
              resetFormContents();
            }}
          >
            Reset
          </Button>
        </div>
        <br />

        {formContents.map((input) => {
          if (input.type === "oneLineTextfield") {
            return (
              <OneLineTextfield
                key={input.id}
                formContents={input}
                propertyIdToBeRendered={propertyIdToBeRendered}
                updatePropertyIdToBeRendered={updatePropertyIdToBeRendered}
              />
            );
          } else if (input.type === "numberTextfield") {
            return (
              <NumberTextfield
                key={input.id}
                formContents={input}
                propertyIdToBeRendered={propertyIdToBeRendered}
                updatePropertyIdToBeRendered={updatePropertyIdToBeRendered}
              />
            );
          } else if (input.type === "textarea") {
            return (
              <MultilineTextfield
                key={input.id}
                formContents={input}
                propertyIdToBeRendered={propertyIdToBeRendered}
                updatePropertyIdToBeRendered={updatePropertyIdToBeRendered}
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
