import { useProps } from "@/contexts/PropsContext";
import { DownloadButton } from "@/components/DownloadButton";

export function Download() {
  const { setIsWorking } = useProps();
  return (
    <div className="container-fluid">
      <div className="row mt-0 justify-content-center mh-100">
        <div className="col-10 col-lg-11 mh-100 mt-4">
          <button
            type="button"
            className="btn btn-outline-secondary"
            style={{
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
            }}
            onClick={() => setIsWorking(true)}
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span style={{ marginRight: "0.6vw" }}>戻る</span>
          </button>
          <div className="d-grid gap-2 col-5 mx-auto">
            <DownloadButton text="PDFをダウンロード" />
            <DownloadButton text="mdファイルをダウンロード" />
          </div>
        </div>
      </div>
    </div>
  );
}
