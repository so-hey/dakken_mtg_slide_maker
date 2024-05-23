import countCharacters from "./countCharacters";

const dateToText = (date: Date) => {
  return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日(${dayToJapanese(date.getDay())})`;
};

const dayToJapanese = (day: number) => {
  switch (day) {
    case 0:
      return "日";
    case 1:
      return "月";
    case 2:
      return "火";
    case 3:
      return "水";
    case 4:
      return "木";
    case 5:
      return "金";
    case 6:
      return "土";
  }
};

export function convertHtml(
  date: Date,
  dsContent: string,
  deContent: string,
  bizContent: string,
  ccContent: string,
  otherNotice: string[][]
) {
  let htmlText = `
<hr>
<div class="box">
<div class="title">DA研定例会</div>
<center>
<h1>{date}</h1>
</center>
</div>
<hr>
<div class="box">
<h1>部門報告</h1>
<h3>DS部門</h3>
<ul>
<li>{dsContent}</li>
</ul>
<h3>DE部門</h3>
<ul>
<li>{deContent}</li>
</ul>
<h3>BIZ部門</h3>
<ul>
<li>{bizContent}</li>
</ul>
<h3>CC部門</h3>
<ul>
<li>{ccContent}</li>
</ul>
</div>
<hr>
<div class="box">
<h1>その他連絡事項</h1>
{otherNotice}
</div>
<hr>`;

  htmlText = htmlText
    .replace("{date}", dateToText(date))
    .replace("{dsContent}", dsContent === "" ? "なし" : dsContent)
    .replace("{deContent}", deContent === "" ? "なし" : deContent)
    .replace("{bizContent}", bizContent === "" ? "なし" : bizContent)
    .replace("{ccContent}", ccContent === "" ? "なし" : ccContent);

  let replaceText = "";
  otherNotice.map((notice, index) => {
    if (index % 4 == 0 && index != 0) {
      replaceText += '</div><hr><div class="box"><br />';
    }
    const [title, content] = notice;
    if (title != "" || content != "") {
      if (countCharacters(title) <= 120) {
        replaceText += `<h3>${title}</h3>`;
      } else {
        replaceText += `<h4>${title}</h4>`;
      }
      replaceText += `<ul><li>${content}</li></ul>`;
    }
  });
  if (replaceText == "") {
    replaceText = "<h3>なし</h3>";
  }
  htmlText = htmlText.replace("{otherNotice}", replaceText);

  return htmlText;
}

export function convertMd(
  date: Date,
  dsContent: string,
  deContent: string,
  bizContent: string,
  ccContent: string,
  otherNotice: string[][]
) {
  let mdText = `---
marp: true
class: invert
author: dakken
paginate: true
math: mathjax
---

<style>
section {
  position: relative;
}
section::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: url("data:image/jpeg;base64,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");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.02;
  z-index: -1;
}
section::after {
  content: attr(data-marpit-pagination) " / " attr(data-marpit-pagination-total);
}
.title {
  font-size: 80px;
  text-align: center;
  font-weight: 600;
  color: #cae7fe;
}
ul {
  list-style: none;
}
</style>

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

{otherNotice}`;

  mdText = mdText
    .replace("{date}", dateToText(date))
    .replace("{dsContent}", dsContent === "" ? "なし" : dsContent)
    .replace("{deContent}", deContent === "" ? "なし" : deContent)
    .replace("{bizContent}", bizContent === "" ? "なし" : bizContent)
    .replace("{ccContent}", ccContent === "" ? "なし" : ccContent);

  let replaceText = "";
  otherNotice.map((notice, index) => {
    if (index % 4 == 0 && index != 0) {
      replaceText += `---
      
      `;
    }
    const [title, content] = notice;
    if (title != "" || content != "") {
      if (countCharacters(title) <= 120) {
        replaceText += `### ${title}
        
        `;
      } else {
        replaceText += `#### ${title}
        
        `;
      }
      replaceText += `- ${content}
      
      `;
    }
  });
  if (replaceText == "") {
    replaceText = `### なし
    
    `;
  }
  mdText = mdText.replace("{otherNotice}", replaceText);

  return mdText;
}
