"use client";

import ContentInput from "@/components/ContentInput";
import DateInput from "@/components/DateInput";
import { NoticeDisplay, NoticeInput } from "@/components/OtherNotice";
import { useProps } from "@/contexts/PropsContext";
import { convertHtml } from "@/utils/convert";
import { countCharacters } from "@/utils/countCharacters";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export function Editor() {
  const { setDisplayText, setIsWorking } = useProps();

  const [date, setDate] = useState(new Date());
  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setDate(newDate);
  };

  const [dsContent, setDsContent] = useState("");
  const handleDsContent = (event: ChangeEvent<HTMLInputElement>) => {
    const newDsContent = event.target.value;
    if (countCharacters(newDsContent) <= 150) {
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
    if (countCharacters(newDeContent) <= 150) {
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
    if (countCharacters(newBizContent) <= 150) {
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
    if (countCharacters(newCcContent) <= 150) {
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
    if (countCharacters(newNoticeTitle) <= 150) {
      setNoticeTitle(newNoticeTitle);
    }
  };

  const [noticeContent, setNoticeContent] = useState("");
  const handleNoticeContent = (event: ChangeEvent<HTMLInputElement>) => {
    const newNoticeContent = event.target.value;
    if (countCharacters(newNoticeContent) <= 150) {
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

  const handleNoticeDelete = (event: MouseEvent<HTMLButtonElement>) => {
    const id = Number(event.currentTarget.id.slice(12));
    const newNotice = otherNotice.filter((_, index) => index !== id);
    setOtherNotice(newNotice);
  };

  useEffect(() => {
    const newText = convertHtml(
      date,
      dsContent,
      deContent,
      bizContent,
      ccContent,
      otherNotice.concat([[noticeTitle, noticeContent]])
    );
    setDisplayText(newText);
  });

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container" style={{ height: "83vh", overflowY: "auto" }}>
        <h3 className="mt-4">定例会日時</h3>
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
        <NoticeInput
          noticeTitle={noticeTitle}
          handleNoticeTitle={handleNoticeTitle}
          noticeContent={noticeContent}
          handleNoticeContent={handleNoticeContent}
          handleNoticeAdd={handleNoticeAdd}
        />
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
        <br />
        <br />
      </div>
      <hr />
      <div style={{ height: "17vh", overflow: "hidden" }}>
        <center>
          <button
            type="button"
            className="btn btn-lg btn-outline-primary"
            onClick={() => setIsWorking(false)}
          >
            確定
          </button>
        </center>
      </div>
    </div>
  );
}
