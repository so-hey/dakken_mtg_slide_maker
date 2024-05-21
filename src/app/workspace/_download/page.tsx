import { useProps } from "@/contexts/PropsContext";
import Image from "next/image";
import { DownloadButton } from "@/components/DownloadButton";

export function Download() {
  const { setIsWorking } = useProps();
  return (
    <div className="container-fluid">
      <div className="row mt-0 justify-content-center mh-100">
        <div className="col-10 col-lg-11 mh-100 mt-4">
          <style>{`
          .back-img-container {
            filter: invert(40%) sepia(0%) saturate(11%) hue-rotate(143deg) brightness(100%) contrast(93%);
          }
          .back-btn:hover .back-img-container {
            filter: invert(100%) saturate(200%);
          }
          `}</style>
          <button
            type="button"
            className="btn btn-outline-secondary back-btn"
            style={{
              display: "flex",
              alignItems: " center",
              justifyContent: "center",
            }}
            onClick={() => setIsWorking(true)}
          >
            <div className="back-img-container">
              <Image src="/images/back.svg" alt="" width={30} height={30} />
            </div>
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
