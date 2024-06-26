"use client";

import ContentInput from "@/components/ContentInput";
import DateInput from "@/components/dateInput";
import { NoticeDisplay, NoticeInput } from "@/components/OtherNotice";
import SelectThemeButton from "@/components/SelectThemeButton";
import { useProps } from "@/contexts/PropsContext";
import { convertHtml, convertMd } from "@/utils/convert";
import countCharacters from "@/utils/countCharacters";
import sanitize from "@/utils/sanitize";
import path from "path";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export default function TemplateEditor() {
  const {
    date,
    dsContent,
    setDsContent,
    deContent,
    setDeContent,
    bizContent,
    setBizContent,
    ccContent,
    setCcContent,
    otherNotice,
    setOtherNotice,
    setDisplayText,
    setIsWorking,
    setIsLoaded,
    setDownloadPdfUrl,
    setDownloadPptxUrl,
    setDownloadMdUrl,
    selectedTheme,
  } = useProps();

  const handleDsContent = (event: ChangeEvent<HTMLInputElement>) => {
    const id = Number(event.currentTarget.id.slice(-1));
    const newDsContent = event.target.value;
    const nextDsContent = [...dsContent];
    nextDsContent[id] = newDsContent;
    setDsContent(nextDsContent);
  };

  const handleDeContent = (event: ChangeEvent<HTMLInputElement>) => {
    const id = Number(event.currentTarget.id.slice(-1));
    const newDeContent = event.target.value;
    const nextDeContent = [...deContent];
    nextDeContent[id] = newDeContent;
    setDeContent(nextDeContent);
  };

  const handleBizContent = (event: ChangeEvent<HTMLInputElement>) => {
    const id = Number(event.currentTarget.id.slice(-1));
    const newBizContent = event.target.value;
    const nextBizContent = [...bizContent];
    nextBizContent[id] = newBizContent;
    setBizContent(nextBizContent);
  };

  const handleCcContent = (event: ChangeEvent<HTMLInputElement>) => {
    const id = Number(event.currentTarget.id.slice(-1));
    const newCcContent = event.target.value;
    const nextCcContent = [...ccContent];
    nextCcContent[id] = newCcContent;
    setCcContent(nextCcContent);
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
    setNoticeContent(newNoticeContent);
  };

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
    // const fetchUrl = path.join(
    //   "https://master.d3gxele5odjd0f.amplifyapp.com",
    //   "api"
    // );
    const fetchUrl = "http://localhost:3001/api";
    const mdText = convertMd(
      date,
      dsContent.map((text) => sanitize(text)),
      deContent.map((text) => sanitize(text)),
      bizContent.map((text) => sanitize(text)),
      ccContent.map((text) => sanitize(text)),
      otherNotice
        .concat([[noticeTitle, noticeContent]])
        .map((texts) => texts.map((text) => sanitize(text))),
      selectedTheme
    );

    const fetchPdf = async () => {
      console.log(fetchUrl + "/convertpdf");
      const response = await fetch(fetchUrl + "/convertpdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mdText: mdText, theme: selectedTheme }),
      });
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
      console.log(fetchUrl + "/convertpptx");
      const response = await fetch(fetchUrl + "/convertpptx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mdText: mdText, theme: selectedTheme }),
      });
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
      console.log(fetchUrl + "/convertmd");
      const response = await fetch(fetchUrl + "/convertmd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mdText: mdText }),
      });
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
    let cnt = 0;
    while (!(result1 && result2 && result3) && cnt < 3) {
      if (!(result1 || result2)) {
        [result1, result2] = await Promise.all([fetchPdf(), fetchPptx()]);
      } else if (!result1) {
        result1 = await fetchPdf();
      } else {
        result2 = await fetchPptx();
      }
      if (!result3) {
        result3 = await fetchMd();
      }
      cnt += 1;
    }
    setIsLoaded(true);
  };

  useEffect(() => {
    const newText = convertHtml(
      date,
      dsContent.map((text) => sanitize(text)),
      deContent.map((text) => sanitize(text)),
      bizContent.map((text) => sanitize(text)),
      ccContent.map((text) => sanitize(text)),
      otherNotice
        .concat([[noticeTitle, noticeContent]])
        .map((texts) => texts.map((text) => sanitize(text)))
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
    setIsWorking(true);
    setIsLoaded(false);

    return () => {
      setIsWorking(false);
    };
  }, [setIsWorking, setIsLoaded]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="container" style={{ height: "75vh", overflowY: "auto" }}>
        <hr />
        <h3>定例会日時</h3>
        <DateInput />
        <hr />
        <h3>部門報告</h3>
        <ContentInput
          group="DS"
          contents={dsContent}
          handleContent={handleDsContent}
        />
        <ContentInput
          group="DE"
          contents={deContent}
          handleContent={handleDeContent}
        />
        <ContentInput
          group="BIZ"
          contents={bizContent}
          handleContent={handleBizContent}
        />
        <ContentInput
          group="CC"
          contents={ccContent}
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
      <hr style={{ marginTop: 0 }} />
      <div
        className="container text-center"
        style={{ height: "20vh", overflow: "hidden" }}
      >
        <div className="row">
          <div className="col" style={{ width: "min(15vw, 18px)" }}>
            <SelectThemeButton theme={"dark"} />
            <SelectThemeButton theme={"light"} />
          </div>
          <div className="col-md-auto">
            <button
              type="button"
              className="btn btn-lg btn-outline-primary"
              onClick={handleoConfirmButton}
            >
              確定
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
