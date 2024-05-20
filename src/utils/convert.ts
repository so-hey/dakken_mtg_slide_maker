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
  if (otherNotice) {
    for (let [title, content] of otherNotice) {
      if (title != "・" || content != "・") {
        if (title.length <= 25) {
          replaceText += `<h3>${title}</h3>`;
        } else if (title.length <= 30) {
          replaceText += `<h4>${title}</h4>`;
        } else {
          replaceText += `<h5>${title}</h5>`;
        }
        replaceText += `<ul><li>${content}</li></ul>`;
      }
    }
  }
  if (replaceText == "") {
    replaceText = "<h3>今日はなし</h3>";
  }
  htmlText = htmlText.replace("{otherNotice}", replaceText);

  return htmlText;
}

export async function convertMd(
  date: string,
  dsContent: string,
  deContent: string,
  bizContent: string,
  ccContent: string,
  otherNotice: string[][]
) {
  let mdText = `---\nmarp: true\nclass: invert\ntheme: dakken_style\nauthor: dakken\npaginate: true\nmath: mathjax\n---\n\n<div class="title">DA研定例会</div>\n\n# <center>{date}</center>\n\n---\n\n# 部門報告\n\n### DS部門\n\n- {dsContent}\n\n### DE部門\n\n- {deContent}\n\n### BIZ部門\n\n- {bizContent}\n\n### CC部門\n\n- {ccContent}\n\n---\n\n# その他連絡事項\n\n{otherNotice}\n`;
  mdText = mdText
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
    replaceText = "今日はなし";
  }
  mdText = mdText.replace("{otherNotice}", replaceText);

  return mdText;
}
