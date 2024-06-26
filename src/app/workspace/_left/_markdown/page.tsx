"use client";

import ContentInput from "@/components/ContentInput";
import DateInput from "@/components/dateInput";
import { NoticeDisplay, NoticeInput } from "@/components/OtherNotice";
import SelectThemeButton from "@/components/SelectThemeButton";
import { useProps } from "@/contexts/PropsContext";
import { convertHtml, convertMd } from "@/utils/convert";
import countCharacters from "@/utils/countCharacters";
import path from "path";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";

export default function MarkdownEditor() {
  const {
    setDisplayText,
    setIsWorking,
    setIsLoaded,
    setDownloadPdfUrl,
    setDownloadPptxUrl,
    setDownloadMdUrl,
    selectedTheme,
  } = useProps();

  const handleoConfirmButton = async () => {
    const fetchUrl = path.join("http://localhost:3001", "api");
    const mdText = "";

    const fetchPdf = async () => {
      console.log(path.join(fetchUrl, "convertpdf"));
      const response = await fetch("http://localhost:3001/api/convertpdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mdText: mdText, theme: selectedTheme }),
      });
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
      const response = await fetch("http://localhost:3001/api/convertpptx", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mdText: mdText, theme: selectedTheme }),
      });
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
      const response = await fetch("http://localhost:3001/api/convertmd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mdText: mdText }),
      });
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
    const newText = "";
    setDisplayText(newText);
  }, [setDisplayText]);

  useEffect(() => {
    setIsLoaded(false);
  }, [setIsLoaded]);

  return (
    <div style={{ overflow: "hidden" }}>
      <div
        className="container"
        style={{ height: "80vh", overflowY: "auto" }}
      ></div>
      <hr style={{ marginTop: 0 }} />
      <div
        className="container text-center"
        style={{ height: "15vh", overflow: "hidden" }}
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
