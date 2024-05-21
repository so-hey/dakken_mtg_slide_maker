import useWindowSize from "@/hooks/windowSize";
import { ChangeEvent, useEffect, useState } from "react";

export default function DateInput({
  handleDate,
}: {
  handleDate: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-12">
          <div className="form-group row">
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
