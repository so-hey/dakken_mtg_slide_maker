import { ReactNode } from "react";

export default function Main({ content }: { content: ReactNode }) {
  return (
    <main
      className="d-flex vh-100 justify-content-center"
      style={{ backgroundColor: "#EEE" }}
    >
      <div className="row container-xxl" style={{ backgroundColor: "white" }}>
        {content}
      </div>
    </main>
  );
}
