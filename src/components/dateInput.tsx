import { useProps } from "@/contexts/PropsContext";
import { ChangeEvent } from "react";

export default function DateInput() {
  const { date, setDate } = useProps();
  const handleDate = (event: ChangeEvent<HTMLInputElement>) => {
    const newDate = new Date(event.target.value);
    setDate(newDate);
  };
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
