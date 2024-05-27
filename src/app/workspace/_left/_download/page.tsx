import { useProps } from "@/contexts/PropsContext";
import { DownloadButton } from "@/components/DownloadButton";

const dateToFlieName = (date: Date) => {
  return `${date.getFullYear()}${(date.getMonth() + 1).toString().padStart(2, "0")}${date.getDate().toString().padStart(2, "0")}`;
};

export default function Download() {
  const {
    date,
    setIsWorking,
    isLoaded,
    downloadPdfUrl,
    downloadPptxUrl,
    downloadMdUrl,
  } = useProps();

  const downloadPDF = async () => {
    const link = document.createElement("a");
    link.href = downloadPdfUrl;
    link.setAttribute("download", `${dateToFlieName(date)}.pdf`);
    link.click();
    link.remove();
  };

  const downloadPptx = async () => {
    const link = document.createElement("a");
    link.href = downloadPptxUrl;
    link.setAttribute("download", `${dateToFlieName(date)}.pptx`);
    link.click();
    link.remove();
  };

  const downloadMd = async () => {
    const link = document.createElement("a");
    link.href = downloadMdUrl;
    link.setAttribute("download", `${dateToFlieName(date)}.md`);
    link.click();
    link.remove();
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
                text="pdfファイルをダウンロード"
                handleClick={downloadPDF}
              />
              <DownloadButton
                text="pptxファイルをダウンロード"
                handleClick={downloadPptx}
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
