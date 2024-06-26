import { ChangeEventHandler } from "react";

export default function ContentInput({
  group,
  contents,
  handleContent,
}: {
  group: string;
  contents: string[];
  handleContent: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <>
      <div className="input-group mb-1">
        <span className="input-group-text" style={{ width: "4vw" }}>
          {group}
        </span>
        <input
          type="text"
          className="form-control"
          id={`${group}0`}
          value={contents[0]}
          placeholder="なし"
          onChange={handleContent}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" style={{ width: "4vw" }}></span>
        <input
          type="text"
          className="form-control"
          id={`${group}1`}
          value={contents[1]}
          placeholder="なし"
          onChange={handleContent}
        />
      </div>
    </>
  );
}
