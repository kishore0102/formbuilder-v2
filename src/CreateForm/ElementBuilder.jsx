import { Button, Card } from "antd";
import { OneLineTextfield } from "./elements/OneLineTextfield";

export const ElementBuilder = ({ formDetails, formContents }) => {
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
                <span style={{ fontSize: "large" }}>Form Name :</span>
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
          <Button danger>Reset</Button>
        </div>
        <br />

        {formContents.map((input) => {
          if (input.type === "oneLineTextfield") {
            return <OneLineTextfield key={input.id} formContents={input} />;
          } else {
            return <span key={input.id}></span>;
          }
        })}
      </Card>
    </div>
  );
};
