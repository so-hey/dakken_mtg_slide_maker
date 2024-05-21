"use client";

import { useProps } from "@/contexts/PropsContext";

export function Display() {
  const { displayText } = useProps();

  return (
    <div>
      <style jsx>{`
        .displayText .title {
          font-size: 3.8vw;
          font-weight: bold;
          text-align: center;
          padding-top: 7vw;
        }
        .displayText h1 {
          font-size: 2vw;
          font-weight: bold;
          margin-bottom: 1.5vw;
        }
        .displayText h2 {
          font-size: 1.8vw;
          font-weight: bold;
        }
        .displayText h3 {
          font-size: 1.5vw;
          font-weight: bold;
          margin: 0.8vw 1.5vw;
        }
        .displayText h4 {
          font-size: 1.2vw;
          font-weight: bold;
          margin: 0.7vw 1.2vw;
        }
        .displayText h5 {
          font-size: 1vw
          font-weight: bold;
          margin: 0.6vw 1vw;
        }
        .displayText ul {
          margin: 0.8vw;
        }
        .displayText li {
          font-size: 1.2vw;
        }
        .displayText .box {
          height: 24vw;
          padding: 0 1vw;
        }
      `}</style>
      <div
        className="displayText"
        dangerouslySetInnerHTML={{ __html: displayText }}
      ></div>
      <br />
      <br />
    </div>
  );
}
