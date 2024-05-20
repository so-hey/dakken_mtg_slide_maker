import fs from "fs";

const dateToFlieName = (date: Date) => {
  return `${date.getFullYear}${date.getMonth() + 1}${date.getDate().toString().padStart(2, "0")}`;
};

export function writeMdFile(
  date: string,
  dsContent: string,
  deContent: string,
  bizContent: string,
  ccContent: string,
  otherNotice: string[][],
  flieName: string
) {
  let pdfText = `---
marp: true
class: invert
theme: dakken_style
author: dakken
paginate: true
math: mathjax
---

<div class="title">DA研定例会</div>

# <center>{date}</center>

---

# 部門報告

### DS部門

- {dsContent}

### DE部門

- {deContent}

### BIZ部門

- {bizContent}

### CC部門

- {ccContent}

---

# その他連絡事項

{otherNotice}
`;
  pdfText = pdfText
    .replace("{date}", date)
    .replace("{dsContent}", dsContent)
    .replace("{deContent}", deContent)
    .replace("{bizContent}", bizContent)
    .replace("{ccContent}", ccContent);

  let replaceText = "";
  if (otherNotice) {
    for (let [title, content] of otherNotice) {
      if (title != "・" || content != "・") {
        replaceText += `### ${title}\n\n`;
        replaceText += `- ${content}\n\n`;
      }
    }
  }
  if (replaceText == "") {
    replaceText = "なし";
  }
  pdfText = pdfText.replace("{otherNotice}", replaceText);

  fs.writeFileSync(pdfText, `${flieName}.md`);
}
