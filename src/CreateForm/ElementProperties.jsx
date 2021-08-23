import { Card } from "antd";

export const ElementProperties = () => {
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
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "left",
          }}
        >
          <label>
            <b>
              <i>Properties : </i>
            </b>
          </label>
        </div>
        <br />
      </Card>
    </div>
  );
};
