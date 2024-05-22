"use client";

import { useProps } from "@/contexts/PropsContext";

export default function Right() {
  const { displayText } = useProps();

  return (
    <div className="col-sm-6 mh-100" style={{ overflowY: "auto" }}>
      <div>
        <style>{`
        .displayText .title {
          font-size: min(3.8vw, 53.2px) !important;
          font-weight: bold;
          text-align: center;
          padding-top: min(7vw, 98px);
        }
        .displayText h1 {
          font-size: min(2vw, 28px) !important;
          font-weight: bold;
          margin-bottom: min(1.5vw, 21px);
        }
        .displayText h2 {
          font-size: min(1.8vw, 25.2px) !important;
          font-weight: bold;
        }
        .displayText h3 {
          font-size: min(1.5vw, 21px) !important;
          font-weight: bold;
          margin: min(0.8vw, 11.2px) min(1.5vw, 21px);
        }
        .displayText h4 {
          font-size: min(1.2vw, 16.8px) !important;
          font-weight: bold;
          margin: min(0.7vw, 9.8px) min(1.2vw, 16.8px);
        }
        .displayText h5 {
          font-size: min(1vw, 14px) !important;
          font-weight: bold;
          margin: min(0.6vw, 8.4px) min(1vw, 14px);
        }
        .displayText ul {
          margin: min(0.8vw, 11.2px);
        }
        .displayText li {
          font-size: min(1.2vw, 16.8px) !important;
        }
        .displayText .box {
          height: min(24vw, 336px);
          padding: 0 min(1vw, 14px);
        }
      `}</style>
        <div
          className="displayText"
          dangerouslySetInnerHTML={{ __html: displayText }}
        ></div>
        <br />
        <br />
      </div>
    </div>
  );
}
