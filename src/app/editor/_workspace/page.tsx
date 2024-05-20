"use client";
import { convertHtml } from "@/utils/convert";
import { ChangeEvent, useEffect, useState } from "react";

export function WorkSpace({
  confirmButton,
  setDisplayText,
}: {
  confirmButton: () => void;
  setDisplayText: (text: string) => void;
}) {
  const [date, setDate] = useState(new Date());
  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setDate(newDate);
  };

  const [dsContent, setDsContent] = useState("");
  const handleDsContent = (event: ChangeEvent<HTMLInputElement>) => {
    const newDsContent = event.target.value;
    if (newDsContent.length <= 30) {
      if (newDsContent == "") {
        setDsContent("");
      } else {
        setDsContent(newDsContent);
      }
    }
  };

  const [deContent, setDeContent] = useState("");
  const handleDeContent = (event: ChangeEvent<HTMLInputElement>) => {
    const newDeContent = event.target.value;
    if (newDeContent.length <= 30) {
      if (newDeContent == "") {
        setDeContent("");
      } else {
        setDeContent(newDeContent);
      }
    }
  };

  const [bizContent, setBizContent] = useState("");
  const handleBizContent = (event: ChangeEvent<HTMLInputElement>) => {
    const newBizContent = event.target.value;
    if (newBizContent.length <= 30) {
      if (newBizContent == "") {
        setBizContent("");
      } else {
        setBizContent(newBizContent);
      }
    }
  };

  const [ccContent, setCcContent] = useState("");
  const handleCcContent = (event: ChangeEvent<HTMLInputElement>) => {
    const newCcContent = event.target.value;
    if (newCcContent.length <= 30) {
      if (newCcContent == "") {
        setCcContent("");
      } else {
        setCcContent(newCcContent);
      }
    }
  };

  const [noticeTitle, setNoticeTitle] = useState("");
  const handleNoticeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    const newNoticeTitle = event.target.value;
    setNoticeTitle(newNoticeTitle);
  };

  const [noticeContent, setNoticeContent] = useState("");
  const handleNoticeContent = (event: ChangeEvent<HTMLInputElement>) => {
    const newNoticeContent = event.target.value;
    setNoticeContent(newNoticeContent);
  };

  const [otherNotice, setOtherNotice] = useState<string[][]>([]);
  const handleOtherNotice = () => {
    setOtherNotice([...otherNotice, [noticeTitle, noticeContent]]);
  };

  useEffect(() => {
    setDisplayText(
      convertHtml(
        date,
        dsContent,
        deContent,
        bizContent,
        ccContent,
        otherNotice
      )
    );
  });

  const windowHeight = window.innerHeight;
  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className="container"
        style={{ height: `${windowHeight * 0.85}px`, overflowY: "auto" }}
      >
        <div className="container">
          <div className="row mt-4">
            <div className="col-10">
              <div className="form-group row">
                <label
                  className="col-form-label col-3"
                  style={{ fontSize: 18, fontWeight: "200" }}
                >
                  日付：
                </label>
                <div className="col-8">
                  <input
                    type="date"
                    className="form-control"
                    id="dateInput"
                    onChange={handleDate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3>部門報告</h3>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            DS
          </span>
          <input
            type="text"
            className="form-control"
            value={dsContent}
            placeholder="なし"
            onChange={handleDsContent}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            DE
          </span>
          <input
            type="text"
            className="form-control"
            value={deContent}
            placeholder="なし"
            onChange={handleDeContent}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            BIZ
          </span>
          <input
            type="text"
            className="form-control"
            value={bizContent}
            placeholder="なし"
            onChange={handleBizContent}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            CC
          </span>
          <input
            type="text"
            className="form-control"
            value={ccContent}
            placeholder="なし"
            onChange={handleCcContent}
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <hr />
        <div style={{ display: "flex", marginBottom: ".5rem" }}>
          <h3>その他連絡事項</h3>
          <div style={{ margin: "0 0 0 auto" }}>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={confirmButton}
            >
              追加
            </button>
          </div>
        </div>
        <div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="Title"
              onChange={handleOtherNotice}
              placeholder="Title"
            />
          </div>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="Content"
              onChange={handleOtherNotice}
              placeholder="Content"
            />
          </div>
        </div>
      </div>
      <hr />
      <div style={{ height: `${windowHeight * 0.1}px`, overflow: "hidden" }}>
        <center>
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={confirmButton}
          >
            確定
          </button>
        </center>
      </div>
    </div>
  );
}
