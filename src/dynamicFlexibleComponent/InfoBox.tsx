import { ReactNode } from "react";
type HintBoxProps = {
  mode: "hint";
  children: ReactNode;
};
type WarningBoxProps = {
  mode: "warning";
  severity?: "low" | "medium" | "high";
  children: ReactNode;
};
type InfoBoxProps = HintBoxProps | WarningBoxProps;

function InfoBox(props: InfoBoxProps) {
  // info , warning
  if (props.mode == "hint") {
    return (
      <aside
        className="infobox infobox--hint"
        style={{
          color: "yellowgreen",
          background: "yellow",
          height: "50px",
          padding: "6px",
          margin: "2px",
          border: "2px solid grey",
          borderRadius: "5px",
          textAlign: "center",
        }}
      >
        <p>{props.children}</p>
      </aside>
    );
  }
  return (
    <aside
      className="infobox infobox--warning"
      style={{
        color: "black",
        background: "red",
        height: "50px",
        padding: "6px",
        margin: "2px",
        border: "2px solid grey",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      {/* <h2>warning</h2> */}
      {props.severity}
      <h2>{props.children}</h2>
    </aside>
  );
}

export default InfoBox;
