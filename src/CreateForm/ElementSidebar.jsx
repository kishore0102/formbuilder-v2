import { Card } from "antd";
import { MdTextFields } from "react-icons/md";
import { AiOutlineNumber } from "react-icons/ai";
import { FaTextHeight } from "react-icons/fa";
import { ElementButton } from "./ElementButton";

export const ElementSidebar = ({
  addOneLineTextFieldToFormContents,
  addMultiLineTextFieldToFormContents,
  addNumberTextFieldToFormContents,
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
            justifyContent: "left",
          }}
        >
          <label>
            <b>
              <i>Elements : </i>
            </b>
          </label>
        </div>
        <br />
        <ElementButton
          elementName={"One Line Textfield"}
          elementIcon={<MdTextFields />}
          clickEventAction={addOneLineTextFieldToFormContents}
        />
        <ElementButton
          elementName={"Multi Line Textfield"}
          elementIcon={<FaTextHeight />}
          clickEventAction={addMultiLineTextFieldToFormContents}
        />
        <ElementButton
          elementName={"Number only Textfield"}
          elementIcon={<AiOutlineNumber />}
          clickEventAction={addNumberTextFieldToFormContents}
        />
      </Card>
    </div>
  );
};
