"use client";

import { useProps } from "@/contexts/PropsContext";

export default function Right() {
  const { displayText } = useProps();

  return (
    <div className="col-sm-6 mh-100" style={{ overflowY: "auto" }}>
      <div
        className="displayText"
        dangerouslySetInnerHTML={{ __html: displayText }}
      ></div>
      <br />
      <br />
      <br />
    </div>
  );
}
