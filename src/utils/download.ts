const dateToFlieName = (date: Date) => {
  return `${date.getFullYear}${date.getMonth() + 1}${date.getDate().toString().padStart(2, "0")}`;
};

export function downloadPDF(date: Date) {
  let element = document.createElement("a");

  element.href = "/public/files/new.pdf";

  element.download = `${dateToFlieName(date)}.pdf`;

  element.click();
}

export function downloadMd() {}
