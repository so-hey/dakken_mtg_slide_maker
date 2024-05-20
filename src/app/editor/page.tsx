"use client";
import { useState } from "react";
import { WorkSpace } from "./_workspace/page";
import { Display } from "./_display/page";
import { convertHtml, convertMd } from "@/utils/convert";

export default function Editor() {
  const [displayText, setDisplayText] = useState(
    convertHtml(new Date(), "", "", "", "", [])
  );

  const confirmButton = () => {};

  return (
    <div className="container-fluid">
      <div className="row mt-0 justify-content-center mh-100">
        <div className="col-10 col-lg-11 mh-100">
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
              <WorkSpace
                confirmButton={confirmButton}
                setDisplayText={setDisplayText}
              />
            </div>
            <div className="col-sm-6 mh-100" style={{ overflowY: "auto" }}>
              <Display displayText={displayText} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
