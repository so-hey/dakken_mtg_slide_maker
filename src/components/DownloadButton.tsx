import Image from "next/image";

export function DownloadButton({ text }: { text: string }) {
  return (
    <>
      <style>{`
      .download-img-container {
        filter: invert(17%) sepia(91%) saturate(8000%) hue-rotate(90deg)
          brightness(100%) contrast(106%);
      }
      .download-btn:hover .download-img-container {
        filter: invert(100%) saturate(200%);
      }
    `}</style>
      <button
        className="btn btn-outline-success download-btn"
        type="button"
        style={{
          display: "flex",
          alignItems: " center",
          justifyContent: "center",
        }}
      >
        {text}
        <div className="download-img-container">
          <Image src="/images/download.svg" alt="" width={30} height={30} />
        </div>
      </button>
    </>
  );
}
