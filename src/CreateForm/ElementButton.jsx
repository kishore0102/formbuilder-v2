import { Button } from "antd";

export const ElementButton = ({
  elementName,
  elementIcon,
  clickEventAction,
}) => {
  return (
    <div style={{ paddingBottom: "10px" }}>
      <Button
        block
        icon={elementIcon}
        draggable
        style={{
          textAlign: "left",
          minHeight: "60px",
          overflow: "hidden",
          whiteSpace: "normal",
          backgroundColor: "#f9f9f9",
        }}
        onClick={(e) => clickEventAction(e)}
      >
        &nbsp;&nbsp;&nbsp;{elementName}
      </Button>
    </div>
  );
};
