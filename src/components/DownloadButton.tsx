export function DownloadButton({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => Promise<void>;
}) {
  return (
    <button
      className="btn btn-outline-success"
      type="button"
      onClick={handleClick}
    >
      {text}
      <span className="material-symbols-outlined">download</span>
    </button>
  );
}
