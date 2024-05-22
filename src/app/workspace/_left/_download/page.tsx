import { useProps } from "../../../../contexts/PropsContext";
import { DownloadButton } from "../../../../components/DownloadButton";

const dateToFlieName = (date: Date) => {
  return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;
};

export default function Download() {
  const { date, setIsWorking, isLoaded } = useProps();

  const downloadPDF = async () => {
    const response = await fetch("/api/getPDF", {
      method: "GET",
    });
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${dateToFlieName(date)}.pdf`;
      a.click();
    }
  };

  const downloadMd = async () => {
    const response = await fetch("/api/getMd", {
      method: "GET",
    });
    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${dateToFlieName(date)}.md`;
      a.click();
    }
  };

  return (
    <div className="container-fluid">
      <div className="row mt-0 justify-content-center mh-100">
        <div className="col-10 col-lg-11 mh-100 mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary col-2"
            onClick={() => setIsWorking(true)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span>戻る</span>
          </button>
          <br />
          <br />
          {isLoaded ? (
            <div className="d-grid gap-2 col-8 mx-auto">
              <DownloadButton
                text="PDFをダウンロード"
                handleClick={downloadPDF}
              />
              <DownloadButton
                text="mdファイルをダウンロード"
                handleClick={downloadMd}
              />
            </div>
          ) : (
            <div className="d-grid gap-2 col-1 mx-auto">
              <br />
              <div className="loading"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
