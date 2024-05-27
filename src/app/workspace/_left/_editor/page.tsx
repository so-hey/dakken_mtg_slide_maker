"use client";

import ContentInput from "@/components/ContentInput";
import DateInput from "@/components/dateInput";
import { NoticeDisplay, NoticeInput } from "@/components/OtherNotice";
import { useProps } from "@/contexts/PropsContext";
import { convertHtml, convertMd } from "@/utils/convert";
import countCharacters from "@/utils/countCharacters";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export default function Editor() {
  const {
    date,
    setDisplayText,
    setIsWorking,
    setIsLoaded,
    setDownloadPdfUrl,
    setDownloadPptxUrl,
    setDownloadMdUrl,
  } = useProps();

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

  const handleoConfirmButton = async () => {
    const mdText = convertMd(
      date,
      dsContent,
      deContent,
      bizContent,
      ccContent,
      otherNotice
    );

    const fetchPdf = async () => {
      const response = await fetch(
        "https://marp-api-7dcd03599145.herokuapp.com/api/convertpdf",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
          body: mdText,
        }
      );
      console.log(response);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));

        setDownloadPdfUrl(url);

        return true;
      } else {
        return false;
      }
    };

    const fetchPptx = async () => {
      const response = await fetch(
        "https://marp-api-7dcd03599145.herokuapp.com/api/convertpptx",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
          body: mdText,
        }
      );
      console.log(response);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));

        setDownloadPptxUrl(url);

        return true;
      } else {
        return false;
      }
    };

    const fetchMd = async () => {
      const response = await fetch(
        "https://marp-api-7dcd03599145.herokuapp.com/api/convertmd",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
          },
          body: mdText,
        }
      );
      console.log(response);
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));

        setDownloadMdUrl(url);

        return true;
      } else {
        return false;
      }
    };

    setIsWorking(false);

    let result1 = false;
    let result2 = false;
    let result3 = false;
    while (!(result1 && result2 && result3)) {
      if (!result1 || result2) {
        [result1, result2] = await Promise.all([fetchPdf(), fetchPptx()]);
      } else if (!result1) {
        result1 = await fetchPdf();
      } else {
        result2 = await fetchPptx();
      }
      if (!result3) {
        result3 = await fetchMd();
      }
    }
    setIsLoaded(true);
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
  }, [
    date,
    dsContent,
    deContent,
    bizContent,
    ccContent,
    noticeTitle,
    noticeContent,
    otherNotice,
    setDisplayText,
  ]);

  useEffect(() => {
    setIsLoaded(false);
  }, [setIsLoaded]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container" style={{ height: "75vh", overflowY: "auto" }}>
        <h3 className="mt-4">定例会日時</h3>
        <DateInput />
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
      <div style={{ height: "20vh", overflow: "hidden" }}>
        <center>
          <button
            type="button"
            className="btn btn-lg btn-outline-primary"
            onClick={handleoConfirmButton}
          >
            確定
          </button>
        </center>
      </div>
    </div>
  );
}
