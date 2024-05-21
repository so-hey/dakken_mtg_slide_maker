import { ChangeEventHandler } from "react";

export default function ContentInput({
  group,
  content,
  handleContent,
}: {
  group: string;
  content: string;
  handleContent: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="input-group mb-3">
      <span
        className="input-group-text"
        id="inputGroup-sizing-default"
        style={{ width: "4vw" }}
      >
        {group}
      </span>
      <input
        type="text"
        className="form-control"
        value={content}
        placeholder="なし"
        onChange={handleContent}
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-default"
      />
    </div>
  );
}
