import { ChangeEvent, MouseEventHandler } from "react";

export function NoticeInput({
  noticeTitle,
  handleNoticeTitle,
  noticeContent,
  handleNoticeContent,
  handleNoticeAdd,
}: {
  noticeTitle: string;
  handleNoticeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  noticeContent: string;
  handleNoticeContent: (event: ChangeEvent<HTMLInputElement>) => void;
  handleNoticeAdd: () => void;
}) {
  return (
    <div>
      <div>
        <div className="input-group mb-1">
          <input
            type="text"
            className="form-control"
            id="Title"
            value={noticeTitle}
            onChange={handleNoticeTitle}
            placeholder="Title"
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={handleNoticeAdd}
          >
            追加
          </button>
        </div>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="Content"
            value={noticeContent}
            onChange={handleNoticeContent}
            placeholder="Content"
          />
        </div>
      </div>
    </div>
  );
}

export function NoticeDisplay({
  notice,
  handleNoticeDelete,
  index,
}: {
  notice: string[];
  handleNoticeDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
  index: number;
}) {
  return (
    <div>
      <div className="input-group mb-1">
        <input
          type="text"
          className="form-control"
          id="Title"
          value={notice[0]}
          placeholder="Title"
          disabled
        />
        <button
          type="button"
          className="btn btn-outline-danger"
          id={`deleteButton${index}`}
          onClick={handleNoticeDelete}
        >
          削除
        </button>
      </div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          id="Content"
          value={notice[1]}
          placeholder="Content"
          disabled
        />
      </div>
    </div>
  );
}
