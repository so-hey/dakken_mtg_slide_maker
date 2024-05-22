"use client";

import { useProps } from "../../../contexts/PropsContext";
import Download from "./_download/page";
import Editor from "./_editor/page";

export default function Left() {
  const { isWorking } = useProps();

  return (
    <div className="col-sm-6 border-end mh-100" style={{ overflow: "hidden" }}>
      {isWorking ? <Editor /> : <Download />}
    </div>
  );
}
