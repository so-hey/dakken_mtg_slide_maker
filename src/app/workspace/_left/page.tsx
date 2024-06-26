"use client";

import { useProps } from "@/contexts/PropsContext";
import Download from "./_download/page";
import TemplateEditor from "./_template/page";
import MarkdownEditor from "./_markdown/page";

export default function Left() {
  const { currentEditor, isWorking } = useProps();

  return (
    <div className="col-sm-6 border-end mh-100" style={{ overflow: "hidden" }}>
      {isWorking ? (
        currentEditor === "template" ? (
          <TemplateEditor />
        ) : (
          <MarkdownEditor />
        )
      ) : (
        <Download />
      )}
    </div>
  );
}
