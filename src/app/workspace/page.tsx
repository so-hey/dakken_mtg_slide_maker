"use client";

import Left from "./_left/page";
import Right from "./_right/page";
import { PropsProvider } from "../../contexts/PropsContext";

export default function WorkSpace() {
  return (
    <PropsProvider>
      <InternalCompornent />
    </PropsProvider>
  );
}

const InternalCompornent = () => {
  return (
    <div
      className="row mh-100"
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Left />

      <Right />
    </div>
  );
};
