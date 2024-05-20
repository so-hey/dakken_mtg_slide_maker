"use client";

import useWindowSize from "@/hooks/windowSize";
import { useEffect, useState } from "react";

export function Display({ displayText }: { displayText: string }) {
  const { windowWidth } = useWindowSize();
  const [isInitiated, setIsInitiated] = useState(false);
  useEffect(() => {
    setIsInitiated(true);
  }, []);

  if (isInitiated) {
    return (
      <div>
        <style>
          {`
      .displayText .title {
        font-size: ${windowWidth * 0.038}px;
        font-weight: bold;
        text-align: center;
        padding-top: ${windowWidth * 0.07}px;
      }
      .displayText h1 {
        font-size: ${windowWidth * 0.02}px;
        font-weight: bold;
        margin-bottom: ${windowWidth * 0.015}px;
      }
      .displayText h2 {
        font-size: ${windowWidth * 0.018}px;
        font-weight: bold;
      }
      .displayText h3 {
        font-size: ${windowWidth * 0.015}px;
        font-weight: bold;
        margin: ${windowWidth * 0.008}px ${windowWidth * 0.015}px;
      }
      .displayText h4 {
        font-size: ${windowWidth * 0.012}px;
        font-weight: bold;
        margin: ${windowWidth * 0.007}px ${windowWidth * 0.012}px;
      }
      .displayText h5 {
        font-size: ${windowWidth * 0.01}px;
        font-weight: bold;
        margin: ${windowWidth * 0.006}px ${windowWidth * 0.01}px;
      }
      .displayText ul {
        margin: ${windowWidth * 0.008}px;
      }
      .displayText li {
        font-size: ${windowWidth * 0.012}px;
      }
      .displayText .box {
        height: ${windowWidth * 0.24}px;
        padding: 0 ${windowWidth * 0.01}px;
      }
      `}
        </style>
        <div
          className="displayText"
          dangerouslySetInnerHTML={{ __html: displayText }}
        ></div>
        <br />
        <br />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}
