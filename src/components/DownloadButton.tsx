export function DownloadButton({ text }: { text: string }) {
  return (
    <button
      className="btn btn-outline-success"
      type="button"
      style={{
        display: "flex",
        alignItems: " center",
        justifyContent: "center",
      }}
    >
      {text}
      <span className="material-symbols-outlined">download</span>
    </button>
  );
}
