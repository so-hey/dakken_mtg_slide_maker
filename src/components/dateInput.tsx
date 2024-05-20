import useWindowSize from "@/hooks/windowSize";
import { ChangeEvent, useEffect, useState } from "react";

export default function DateInput({
  handleDate,
}: {
  handleDate: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  const { windowWidth } = useWindowSize();
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-10">
          <div className="form-group row">
            <label
              className="col-form-label col-3"
              style={{
                fontSize: windowWidth * 0.01,
                fontWeight: "bold",
                textAlign: "right",
              }}
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
  );
}
