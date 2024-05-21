"use client";
import { Editor } from "./_editor/page";
import { Display } from "./_display/page";
import { Download } from "./_download/page";
import { PropsProvider, useProps } from "@/contexts/PropsContext";

export default function WorkSpace() {
  return (
    <PropsProvider>
      <InternalCompornent />
    </PropsProvider>
  );
}

const InternalCompornent = () => {
  const { isWorking } = useProps();
  return (
    <div className="container-fluid" style={{ backgroundColor: "#EEE" }}>
      <div className="row mt-0 justify-content-center mh-100">
        <div
          className="col-10 col-lg-11 mh-100"
          style={{ backgroundColor: "white" }}
        >
          <div
            className="row mh-100"
            style={{
              display: "flex",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <div
              className="col-sm-6 border-end mh-100"
              style={{ overflow: "hidden" }}
            >
              {isWorking ? <Editor /> : <Download />}
            </div>
            <div className="col-sm-6 mh-100" style={{ overflowY: "auto" }}>
              <Display />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
