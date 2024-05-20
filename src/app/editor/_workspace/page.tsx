"use client";
import ContentInput from "@/components/contentInput";
import DateInput from "@/components/dateInput";
import { NoticeDisplay, NoticeInput } from "@/components/otherNotice";
import { convertHtml } from "@/utils/convert";
import { ChangeEvent, MouseEventHandler, useEffect, useState } from "react";

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
    if (newNoticeTitle.length <= 30) {
      setNoticeTitle(newNoticeTitle);
    }
  };

  const [noticeContent, setNoticeContent] = useState("");
  const handleNoticeContent = (event: ChangeEvent<HTMLInputElement>) => {
    const newNoticeContent = event.target.value;
    if (newNoticeContent.length <= 30) {
      setNoticeContent(newNoticeContent);
    }
  };

  const [otherNotice, setOtherNotice] = useState<string[][]>([]);
  const handleNoticeAdd = () => {
    if (noticeTitle != "" && noticeContent != "") {
      setOtherNotice([...otherNotice, [noticeTitle, noticeContent]]);
      setNoticeTitle("");
      setNoticeContent("");
      console.log(otherNotice);
    }
  };

  const handleNoticeDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.id.slice(12));
    console.log(id);
  };

  const [windowHeight, setWindowHeight] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };
    handleResize();

    setDisplayText(
      convertHtml(
        date,
        dsContent,
        deContent,
        bizContent,
        ccContent,
        otherNotice.concat([[noticeTitle, noticeContent]])
      )
    );
  });

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className="container"
        style={{ height: `${windowHeight * 0.85}px`, overflowY: "auto" }}
      >
        <DateInput handleDate={handleDate} />
        <hr />
        <h3>部門報告</h3>
        <ContentInput
          group="DS"
          content={dsContent}
          handleContent={handleDsContent}
        />
        <ContentInput
          group="DE"
          content={deContent}
          handleContent={handleDeContent}
        />
        <ContentInput
          group="BIZ"
          content={bizContent}
          handleContent={handleBizContent}
        />
        <ContentInput
          group="CC"
          content={ccContent}
          handleContent={handleCcContent}
        />
        <hr />
        <h3>その他連絡事項</h3>
        <div>
          {otherNotice.map((notice, index) => {
            return (
              <div key={index}>
                <NoticeDisplay
                  notice={notice}
                  handleNoticeDelete={handleNoticeDelete}
                  index={index}
                />
              </div>
            );
          })}
        </div>
        <NoticeInput
          noticeTitle={noticeTitle}
          handleNoticeTitle={handleNoticeTitle}
          noticeContent={noticeContent}
          handleNoticeContent={handleNoticeContent}
          handleNoticeAdd={handleNoticeAdd}
        />
      </div>
      <hr />
      <div style={{ height: `${windowHeight * 0.1}px`, overflow: "hidden" }}>
        <center>
          <button
            type="button"
            className="btn btn-lg btn-outline-primary"
            onClick={confirmButton}
          >
            確定
          </button>
        </center>
      </div>
    </div>
  );
}
