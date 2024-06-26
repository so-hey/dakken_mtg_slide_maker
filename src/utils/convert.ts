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
  dsContent: string[],
  deContent: string[],
  bizContent: string[],
  ccContent: string[],
  otherNotice: string[][]
) {
  let text = htmlText;

  text = text.replace("{date}", dateToText(date));

  const replaceAll = (
    text: string,
    placeholder: string,
    contents: string[]
  ) => {
    if (contents[0] === "" && contents[1] === "") {
      text = text.replace(placeholder, "なし");
    } else if (contents[0] === "") {
      text = text.replace(placeholder, contents[1]);
    } else if (contents[1] === "") {
      text = text.replace(placeholder, contents[0]);
    } else {
      text = text.replace(
        placeholder,
        `${contents[0]}</li>\n\n<li>${contents[1]}`
      );
    }
    return text;
  };

  text = replaceAll(text, "{dsContent}", dsContent);
  text = replaceAll(text, "{deContent}", deContent);
  text = replaceAll(text, "{bizContent}", bizContent);
  text = replaceAll(text, "{ccContent}", ccContent);

  let replaceText = "";
  otherNotice.map((notice, index) => {
    const [title, content] = notice;
    if (title != "" || content != "") {
      if (index % 2 == 0 && index != 0) {
        replaceText +=
          '</div><hr><div class="box"><br /><h1>その他連絡事項</h1>';
      }
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
  text = text.replace("{otherNotice}", replaceText);

  return text;
}

export function convertMd(
  date: Date,
  dsContent: string[],
  deContent: string[],
  bizContent: string[],
  ccContent: string[],
  otherNotice: string[][],
  theme: string
) {
  let text: string;
  if (theme == "light") {
    text = lightDerective + mdText;
  } else {
    text = darkDerective + mdText;
  }

  text = text.replace("{date}", dateToText(date));

  const replaceAll = (
    text: string,
    placeholder: string,
    contents: string[]
  ) => {
    if (contents[0] === "" && contents[1] === "") {
      text = text.replace(placeholder, "なし");
    } else if (contents[0] === "") {
      text = text.replace(placeholder, contents[1]);
    } else if (contents[1] === "") {
      text = text.replace(placeholder, contents[0]);
    } else {
      text = text.replace(placeholder, `${contents[0]}\n\n- ${contents[1]}`);
    }
    return text;
  };

  text = replaceAll(text, "{dsContent}", dsContent);
  text = replaceAll(text, "{deContent}", deContent);
  text = replaceAll(text, "{bizContent}", bizContent);
  text = replaceAll(text, "{ccContent}", ccContent);

  let replaceText = "";
  otherNotice.map((notice, index) => {
    const [title, content] = notice;
    if (title != "" || content != "") {
      if (index % 2 == 0 && index != 0) {
        replaceText += `</div>\n\n---\n\n<div class="subtitle">その他連絡事項</div>\n\n<div class="content">\n\n`;
      }
      if (countCharacters(title) <= 120) {
        replaceText += `### ${title}\n\n`;
      } else {
        replaceText += `#### ${title}\n\n`;
      }
      replaceText += `- ${content}\n\n`;
    }
  });
  if (replaceText == "") {
    replaceText = `### なし\n\n`;
  }
  text = text.replace("{otherNotice}", replaceText);

  return text;
}

const htmlText = `
<hr>
<div class="box">
<div class="title">DA研定例会</div>
<div style="text-align:center">
<h1>{date}</h1>
</div>
</div>
<hr>
<div class="box">
<h1>部門報告</h1>
<h3>DS部門</h3>
<ul>
<li>{dsContent}</li>
</ul>
<br>
<h3>DE部門</h3>
<ul>
<li>{deContent}</li>
</ul>
</div>
<hr>
<div class="box">
<h1>部門報告</h1>
<h3>BIZ部門</h3>
<ul>
<li>{bizContent}</li>
</ul>
<br>
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
<hr>
<div class="box" style="padding-top:min(10vw, 120px)">
<div style="text-align:center">
<h1>他に何か連絡がある人はいませんか？</h1>
</div>
</div>
<hr>
`;

const mdText = `
<div class="title">DA研定例会</div>

# <div style="text-align:center">{date}</div>

---

<div class="subtitle">部門報告</div>

<div class="content">

## DS部門

- {dsContent}

## DE部門

- {deContent}

</div>

---

<div class="subtitle">部門報告</div>

<div class="content">

## BIZ部門

- {bizContent}

## CC部門

- {ccContent}

</div>

---

<div class="subtitle">その他連絡事項</div>

<div class="content">

{otherNotice}</div>

---

<div style="text-align:center">

# 他に何か連絡がある人はいませんか？

</div>

`;

const lightDerective = `---
marp: true
theme: dakken_light_theme
author: dakken
paginate: true
math: mathjax
---
`;

const darkDerective = `---
marp: true
theme: dakken_dark_theme
class: invert
author: dakken
paginate: true
math: mathjax
---
`;
