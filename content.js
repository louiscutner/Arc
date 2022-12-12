/* This runs after a web page loads */
const header =
  document.getElementById("root").children[0].children[2].children[0]
    .children[1];
const sidebar =
  document.getElementById("root").children[0].children[2].children[1]
    .children[0].children[1];
const top_popup =
  document.getElementById("root").children[0].children[2].children[1]
    .children[0].children[0].children[0].children[1].children[0].children[0]
    .children[0].children[0].children[0];
const classes_to_remove = [
  "xq xr ab fe xs",
  "dq ab q",
  "p q r ab ac",
  "h k gl gm gn",
  "m mb vt ab cm vu vv vw",
  "ab fe kv",
  "l bw kv",
  "p q dl ab ac",
  "m md ya ab cm yb yc yd",
  "m md xo ab cm xp xq xr",
  "m md uy ab cm uz va vb",
  "vl vm ab fe vn",
  "m ml uy ab cm uz ul va",
  "ue uf ab fe ug",
  "m ml yc ab cm yd ye yf",
  "uo up ab fe uq",
  "m ml tu ab cm tv tw tx",
  "um un ab fe uo",
  "m ml tw ab cm tx ty tz",
  "m ml uj ab cm uk ul um",
  "m ml tw ab cm tx ty tz",
  "m ml ty ab cm tz ua ub",
  "uc ud ab fe ue",
  "ab fe lf",
  "abr abs l",
  "rj rk l",
  "m ml tv ab cm tw tx ty",
  "m ml tw ab cm tx ty tz",
  "m ml ua ab cm ub uc ud",
  "l bw lf",
  "abw abx l",
  "wi wj ab fe wk",
  "m lj ub ab cm uc th ud",
  "el em en eo ep eq er bg es df l",
  "m lj tj ab cm tk tl tm",
  "m mv vb ab cm vc vd ve",
];
const reader_toggle = document.createElement("div");
const reader_svg =
  '<svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.52217 0C2.02555 0 0 2.01562 0 4.5V19.5C0 21.9844 2.02555 24 4.52217 24H18.0887H19.5961C20.4298 24 21.1034 23.3297 21.1034 22.5C21.1034 21.6703 20.4298 21 19.5961 21V18C20.4298 18 21.1034 17.3297 21.1034 16.5V1.5C21.1034 0.670312 20.4298 0 19.5961 0H18.0887H4.52217ZM4.52217 18H16.5813V21H4.52217C3.68839 21 3.01478 20.3297 3.01478 19.5C3.01478 18.6703 3.68839 18 4.52217 18ZM6.02956 6.75C6.02956 6.3375 6.36872 6 6.78325 6H15.8276C16.2421 6 16.5813 6.3375 16.5813 6.75C16.5813 7.1625 16.2421 7.5 15.8276 7.5H6.78325C6.36872 7.5 6.02956 7.1625 6.02956 6.75ZM6.78325 9H15.8276C16.2421 9 16.5813 9.3375 16.5813 9.75C16.5813 10.1625 16.2421 10.5 15.8276 10.5H6.78325C6.36872 10.5 6.02956 10.1625 6.02956 9.75C6.02956 9.3375 6.36872 9 6.78325 9Z" fill="black"/></svg>';
const paragraphs = document.getElementsByClassName("pw-post-body-paragraph");
const stop_svg =
  '<svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="14" height="14" rx="2" fill="black"/></svg>';
const gear_svg =
  '<svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9612 4.55636C14.054 4.7943 13.9757 5.05958 13.7755 5.22915L12.5193 6.3067C12.5513 6.5337 12.5687 6.76617 12.5687 7.00137C12.5687 7.23657 12.5513 7.46904 12.5193 7.69603L13.7755 8.77359C13.9757 8.94315 14.054 9.20844 13.9612 9.44638C13.8335 9.77183 13.6798 10.0836 13.5028 10.3845L13.3665 10.606C13.175 10.9068 12.9603 11.1912 12.7253 11.4593C12.5542 11.6562 12.2698 11.7218 12.0146 11.6452L10.3986 11.1612C10.0099 11.4429 9.58053 11.6781 9.12216 11.8558L8.75952 13.4175C8.7015 13.6663 8.49842 13.8633 8.23152 13.9043C7.83117 13.9672 7.41921 14 6.99855 14C6.57789 14 6.16593 13.9672 5.76558 13.9043C5.49868 13.8633 5.2956 13.6663 5.23758 13.4175L4.87494 11.8558C4.41657 11.6781 3.98721 11.4429 3.59846 11.1612L1.98545 11.648C1.73015 11.7246 1.44584 11.6562 1.27468 11.462C1.03969 11.194 0.825008 10.9096 0.633535 10.6087L0.497184 10.3872C0.320216 10.0863 0.166458 9.77457 0.0388097 9.44911C-0.0540255 9.21117 0.0243042 8.94589 0.22448 8.77632L1.48066 7.69877C1.44874 7.46904 1.43134 7.23657 1.43134 7.00137C1.43134 6.76617 1.44874 6.5337 1.48066 6.3067L0.22448 5.22915C0.0243042 5.05958 -0.0540255 4.7943 0.0388097 4.55636C0.166458 4.2309 0.320216 3.91912 0.497184 3.61828L0.633535 3.39676C0.825008 3.09592 1.03969 2.81149 1.27468 2.54347C1.44584 2.34655 1.73015 2.28091 1.98545 2.35749L3.60136 2.84157C3.99011 2.55988 4.41947 2.32467 4.87785 2.1469L5.24048 0.585271C5.2985 0.336394 5.50158 0.13948 5.76848 0.0984567C6.16883 0.0328189 6.58079 0 7.00145 0C7.42211 0 7.83407 0.0328189 8.23442 0.0957218C8.50132 0.136745 8.7044 0.333659 8.76242 0.582536L9.12506 2.14417C9.58343 2.32194 10.0128 2.55714 10.4015 2.83884L12.0175 2.35476C12.2728 2.27818 12.5571 2.34655 12.7282 2.54073C12.9632 2.80875 13.1779 3.09318 13.3694 3.39402L13.5057 3.61555C13.6827 3.91639 13.8364 4.22817 13.9641 4.55362L13.9612 4.55636ZM7.00145 9.18929C8.28374 9.18929 9.32233 8.2102 9.32233 7.00137C9.32233 5.79254 8.28374 4.81344 7.00145 4.81344C5.71916 4.81344 4.68057 5.79254 4.68057 7.00137C4.68057 8.2102 5.71916 9.18929 7.00145 9.18929Z" fill="black"/></svg>';
const cross_svg =
  '<svg width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.79283 1.19546C7.06614 0.922146 7.06614 0.478291 6.79283 0.204982C6.51952 -0.0683273 6.07567 -0.0683273 5.80236 0.204982L3.5 2.50953L1.19546 0.207168C0.922146 -0.0661409 0.478291 -0.0661409 0.204982 0.207168C-0.0683273 0.480478 -0.0683273 0.924332 0.204982 1.19764L2.50953 3.5L0.207168 5.80454C-0.0661409 6.07785 -0.0661409 6.52171 0.207168 6.79502C0.480478 7.06833 0.924332 7.06833 1.19764 6.79502L3.5 4.49047L5.80454 6.79283C6.07785 7.06614 6.52171 7.06614 6.79502 6.79283C7.06833 6.51952 7.06833 6.07567 6.79502 5.80236L4.49047 3.5L6.79283 1.19546Z" fill="black"/></svg>';
const unchecked_svg =
  '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="15" rx="7.5" fill="black"/><path d="M7.5 15C11.6426 15 15 11.6426 15 7.5C15 3.35742 11.6426 0 7.5 0C3.35742 0 0 3.35742 0 7.5C0 11.6426 3.35742 15 7.5 15ZM10.8105 6.12305L7.06055 9.87305C6.78516 10.1484 6.33984 10.1484 6.06738 9.87305L4.19238 7.99805C3.91699 7.72266 3.91699 7.27734 4.19238 7.00488C4.46777 6.73242 4.91309 6.72949 5.18555 7.00488L6.5625 8.38184L9.81445 5.12695C10.0898 4.85156 10.5352 4.85156 10.8076 5.12695C11.0801 5.40234 11.083 5.84766 10.8076 6.12012L10.8105 6.12305Z" fill="#F4F4F4"/></svg>';
const checked_svg =
  '<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="15" height="15" rx="7.5" fill="white"/><path d="M7.5 15C11.6426 15 15 11.6426 15 7.5C15 3.35742 11.6426 0 7.5 0C3.35742 0 0 3.35742 0 7.5C0 11.6426 3.35742 15 7.5 15ZM10.8105 6.12305L7.06055 9.87305C6.78516 10.1484 6.33984 10.1484 6.06738 9.87305L4.19238 7.99805C3.91699 7.72266 3.91699 7.27734 4.19238 7.00488C4.46777 6.73242 4.91309 6.72949 5.18555 7.00488L6.5625 8.38184L9.81445 5.12695C10.0898 4.85156 10.5352 4.85156 10.8076 5.12695C11.0801 5.40234 11.083 5.84766 10.8076 6.12012L10.8105 6.12305Z" fill="black"/></svg>';

let font_family_selected = 0;
const font_families = ["font1", "font2", "font3", "font4"];

let text_colour_selected = 0;
const text_colours = [
  "textcolour1",
  "textcolour2",
  "textcolour3",
  "textcolour4",
];

let bg_colour_selected = 0;
const bg_colours = ["bgcolour1", "bgcolour2", "bgcolour3", "bgcolour4"];

const highlight1_colours = [
  "highlight1a",
  "highlight1b",
  "highlight1c",
  "highlight1d",
];
const highlight2_colours = [
  "highlight2a",
  "highlight2b",
  "highlight2c",
  "highlight2d",
];

let settings_open = false;

let global_word_id = [];
let global_line_id = [];
let global_para_id = [];
let global_para_og_content = [];

let selected_word = null;
let selected_word_start = null;
let selected_word_end = null;
let selected_line = null;

// User defined constants
let reader_mode = false;
let show_words = true;
let show_lines = true;
let words_length = 5;
let lines_length = 3;

// Add reader view button
reader_toggle.innerHTML = reader_svg;
reader_toggle.children[0].id = "reader_toggle";
header.append(reader_toggle);

// Handle hover over line
function onmouseoverLineSpan() {}

function onmouseoutLineSpan() {}

// Handle hover over word
function onmouseoverWordSpan() {
  if (show_words === true) {
    // unhighlight previous words
    if (selected_word !== null) {
      for (let i = 0; i < selected_word.length; i++) {
        document
          .getElementById(selected_word[i])
          .classList.remove(highlight1_colours[text_colour_selected]);
      }
      document
        .getElementById(selected_word_start)
        .classList.remove("wordStart");
      document.getElementById(selected_word_end).classList.remove("wordEnd");
    }
    if (selected_line !== null) {
      for (let i = 0; i < selected_line.length; i++) {
        document
          .getElementById(selected_line[i])
          .classList.remove(highlight2_colours[text_colour_selected]);
      }
    }
    // highlight new word
    if (show_lines === true) {
      this.classList.add(highlight1_colours[text_colour_selected]);
      selected_word = [];
      selected_word.push(this.id);
    }

    let new_word_index = null;
    const new_word_para = this.parentNode.parentNode.id;

    // find index of new word
    for (let i = 0; i < global_word_id.length; i++) {
      if (global_word_id[i] === this.id) {
        new_word_index = i;
      }
    }
    let word_start = new_word_index;
    let word_end = new_word_index;

    // add new lines
    selected_line = [];
    let new_line_index = null;
    const lines_before = Math.floor((lines_length - 1) / 2);
    const lines_after = lines_length - lines_before - 1;
    for (let i = 0; i < global_line_id.length; i++) {
      if (global_line_id[i] === this.parentNode.id) {
        new_line_index = i;
      }
    }
    for (
      let i = new_line_index - lines_before;
      i < new_line_index + lines_after + 1;
      i++
    ) {
      if (
        i >= 0 &&
        document.getElementById(global_line_id[i]).parentNode.id ===
          new_word_para
      ) {
        document
          .getElementById(global_line_id[i])
          .classList.add(highlight2_colours[text_colour_selected]);
        selected_line.push(global_line_id[i]);
      }
    }

    if (words_length > 1) {
      const words_before = Math.floor((words_length - 1) / 2);
      const words_after = words_length - words_before - 1;

      if (show_lines === true) {
        // highlight words before
        if (words_before > 0) {
          for (let i = 1; i < words_before + 1; i++) {
            if (
              new_word_index - i >= 0 &&
              new_word_para ===
                document.getElementById(global_word_id[new_word_index + i])
                  .parentNode.parentNode.id
            ) {
              if (
                selected_line !== null &&
                selected_line.includes(
                  document.getElementById(global_word_id[new_word_index - i])
                    .parentNode.id
                )
              ) {
                document
                  .getElementById(global_word_id[new_word_index - i])
                  .classList.add(highlight1_colours[text_colour_selected]);
                selected_word.push(global_word_id[new_word_index - i]);
              }
              word_start = new_word_index - i;
            }
          }
        }

        // highlight words after
        if (words_after > 0) {
          for (let i = 1; i < words_after + 1; i++) {
            if (
              new_word_index + i < global_word_id.length &&
              new_word_para ===
                document.getElementById(global_word_id[new_word_index + i])
                  .parentNode.parentNode.id
            ) {
              if (
                selected_line !== null &&
                selected_line.includes(
                  document.getElementById(global_word_id[new_word_index + i])
                    .parentNode.id
                )
              ) {
                document
                  .getElementById(global_word_id[new_word_index + i])
                  .classList.add(highlight1_colours[text_colour_selected]);
                selected_word.push(global_word_id[new_word_index + i]);
                word_end = new_word_index + i;
              }
            }
          }
        }
      }
    }
    if (show_lines === true) {
      document
        .getElementById(global_word_id[word_start])
        .classList.add("wordStart");
      document
        .getElementById(global_word_id[word_end])
        .classList.add("wordEnd");
      selected_word_start = global_word_id[word_start];
      selected_word_end = global_word_id[word_end];
    } else {
      selected_word = null;
    }
  }
}

function onmouseoutWordSpan() {}

changeReaderMode = () => {
  if (!reader_mode) {
    // Hide elements
    sidebar.style.display = "none";
    top_popup.style.display = "none";
    for (let i = 0; i < classes_to_remove.length; i++) {
      if (document.getElementsByClassName(classes_to_remove[i]) !== undefined) {
        for (let j = 0; j < classes_to_remove[i].length; j++) {
          if (
            document.getElementsByClassName(classes_to_remove[i])[j] !==
            undefined
          ) {
            document.getElementsByClassName(classes_to_remove[i])[
              j
            ].style.display = "none";
          }
        }
      }
    }
    reformatContent();
    document.getElementById("menubar").style.display = "flex";
  } else {
    sidebar.style.display = "flex";
    top_popup.style.display = "flex";
    for (let i = 0; i < classes_to_remove.length; i++) {
      if (document.getElementsByClassName(classes_to_remove[i]) !== undefined) {
        for (let j = 0; j < classes_to_remove[i].length; j++) {
          if (
            document.getElementsByClassName(classes_to_remove[i])[j] !==
            undefined
          ) {
            document.getElementsByClassName(classes_to_remove[i])[
              j
            ].style.display = "flex";
          }
        }
      }
    }
    revertContent();
  }
  reader_mode = !reader_mode;
};

handleCloseReaderView = () => {
  reader_mode = !reader_mode;
  revertContent();
  document.getElementById("menubar").style.display = "none";
  sidebar.style.display = "flex";
  top_popup.style.display = "flex";
  for (let i = 0; i < classes_to_remove.length; i++) {
    if (document.getElementsByClassName(classes_to_remove[i]) !== undefined) {
      for (let j = 0; j < classes_to_remove[i].length; j++) {
        if (
          document.getElementsByClassName(classes_to_remove[i])[j] !== undefined
        ) {
          document.getElementsByClassName(classes_to_remove[i])[
            j
          ].style.display = "flex";
        }
      }
    }
  }
};

handleOpenSettings = () => {
  if (settings_open) {
    document.getElementById("settings").style.display = "none";
  } else {
    document.getElementById("settings").style.display = "flex";
  }
  settings_open = !settings_open;
};

revertContent = () => {
  for (let j = 0; j < paragraphs.length; j++) {
    paragraphs[j].innerHTML = global_para_og_content[j];
  }
  global_para_og_content = [];
};

reformatContent = () => {
  // Prepare paragraph text
  for (let j = 0; j < paragraphs.length; j++) {
    // Arrays for paragraph
    let lines = [];
    let wordIndexes = [];
    let words = [];
    let para_og_content = "";

    // Constants for finding words
    let start = 0;
    let startTypeFunc = false;
    let bracket_count = 0;

    // Split paragraph into words
    for (let i = 0; i < paragraphs[j].innerHTML.length; i++) {
      // Check for links in text
      if (paragraphs[j].innerHTML[i] === "<" && startTypeFunc === false) {
        startTypeFunc = true;
        bracket_count = 0;
      }
      // Handle link
      if (startTypeFunc === true) {
        if (paragraphs[j].innerHTML[i] === ">") {
          if (bracket_count === 1) {
            if (paragraphs[j].innerHTML[i + 1] === " ") {
              wordIndexes.push({ start: start, end: i + 1 });
              start = i + 1;
              startTypeFunc = false;
            } else {
              wordIndexes.push({ start: start, end: i + 2 });
              start = i + 2;
              startTypeFunc = false;
            }
          } else {
            bracket_count = 1;
          }
        }
      }
      // Handle word
      else if (
        paragraphs[j].innerHTML[i] === " " &&
        paragraphs[j].innerHTML[i - 1] !== ">" &&
        i !== start
      ) {
        wordIndexes.push({ start: start, end: i });
        start = i;
        // Handle word at end of paragraph
      } else if (i === paragraphs[j].innerHTML.length - 1) {
        wordIndexes.push({ start: start, end: i + 1 });
      }
    }

    // Using word start and end positions create array of words
    for (let i = 0; i < wordIndexes.length; i++) {
      const word = paragraphs[j].innerHTML.slice(
        wordIndexes[i].start,
        wordIndexes[i].end
      );
      words.push(word);
    }

    // Store original paragraph content, and clear paragraph
    para_og_content = paragraphs[j].innerHTML;
    global_para_og_content.push(para_og_content);
    paragraphs[j].innerHTML = "";

    // Create a div with the new paragraph content called para
    let para_test = document.createElement("div");
    para_test.classList.add("para");

    // Create a span for each word, and add this to para
    for (let k = 0; k < words.length; k++) {
      const wordSpan = document.createElement("span");
      wordSpan.innerHTML = words[k];
      wordSpan.classList.add("word-span");
      para_test.append(wordSpan);
    }

    // Append para to the paragraph
    paragraphs[j].append(para_test);

    // add text colour
    const textTags = [
      "span",
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "figcaption",
      "a",
      "div",
    ];
    for (let i = 0; i < textTags.length; i++) {
      const all = document.getElementsByTagName(textTags[i]);
      for (let i = 0; i < all.length; i++) {
        all[i].classList.add(font_families[font_family_selected]);
      }
    }

    // Store the positions of each span (i.e. word), to know which word is on which line
    let currentLeft = null;
    let line_start = 0;
    let line_end = null;
    const spans = paragraphs[j].getElementsByClassName("word-span");
    for (let i = 0; i < spans.length; i++) {
      // Handle first word in paragraph
      if (currentLeft === null) {
        currentLeft = spans[i].offsetLeft;
        // Handle end of line
      } else if (spans[i].offsetLeft < currentLeft) {
        line_end = i - 1;
        lines.push({
          start: line_start,
          end: line_end,
          top: spans[line_start].offsetTop,
          left: spans[line_start].offsetLeft,
        });
        line_start = i;
        currentLeft = spans[i].offsetLeft;
        line_end = null;
        // Handle end of paragraph
      } else if (i === spans.length - 1) {
        line_end = i;
        lines.push({
          start: line_start,
          end: line_end,
          top: spans[line_start].offsetTop,
          left: spans[line_start].offsetLeft,
        });
        currentLeft = null;
        line_start = 0;
        line_end = null;
        // Handle word in middle of line
      } else if (spans[i].offsetLeft > currentLeft) {
        currentLeft = spans[i].offsetLeft;
      }
    }

    // Remove content of paragraph, to put line spans in
    paragraphs[j].innerHTML = "";

    // Create paragraph div
    let para = document.createElement("div");
    para.classList.add("para");
    para.id = "para-" + j;
    global_para_id.push("para-" + j);

    // For each line, create a line span, with each word as a span inside it
    for (let i = 0; i < lines.length; i++) {
      // Create line span
      const lineSpan = document.createElement("span");
      lineSpan.classList.add("line-span");
      lineSpan.id = "line-" + j + "-" + i;
      global_line_id.push("line-" + j + "-" + i);
      lineSpan.onmouseover = onmouseoverLineSpan;
      lineSpan.onmouseleave = onmouseoutLineSpan;

      // Loop through words inside line, and create span for each, then add to line span
      for (let k = lines[i].start; k < lines[i].end + 1; k++) {
        const wordSpan = document.createElement("span");
        wordSpan.innerHTML = words[k];
        wordSpan.id = "word-" + j + "-" + i + "-" + k;
        global_word_id.push("word-" + j + "-" + i + "-" + k);
        wordSpan.onmouseover = onmouseoverWordSpan;
        wordSpan.onmouseleave = onmouseoutWordSpan;
        wordSpan.classList.add("word-span");
        lineSpan.append(wordSpan);
      }
      para.append(lineSpan);
    }
    paragraphs[j].append(para);
  }

  // add text colour
  const textTags = [
    "span",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "figcaption",
    "a",
    "div",
  ];
  for (let i = 0; i < textTags.length; i++) {
    const all = document.getElementsByTagName(textTags[i]);
    for (let i = 0; i < all.length; i++) {
      all[i].classList.add(text_colours[text_colour_selected]);
      all[i].classList.add(font_families[font_family_selected]);
    }
  }
  document
    .getElementsByClassName("l")[0]
    .classList.add(bg_colours[bg_colour_selected]);
};

handleChangeFont = (int) => {
  font_family_selected = int;
  revertContent();
  reformatContent();
};

handleColourChange = (int) => {
  let old_int = bg_colour_selected;
  bg_colour_selected = int;
  text_colour_selected = int;
  const textTags = [
    "span",
    "p",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "figcaption",
    "a",
    "div",
  ];
  for (let i = 0; i < textTags.length; i++) {
    const all = document.getElementsByTagName(textTags[i]);
    for (let i = 0; i < all.length; i++) {
      all[i].classList.add(text_colours[text_colour_selected]);
      all[i].classList.remove(text_colours[old_int]);
    }
  }
  document
    .getElementsByClassName("l")[0]
    .classList.add(bg_colours[bg_colour_selected]);
  document.getElementsByClassName("l")[0].classList.remove(bg_colours[old_int]);
  if (selected_word !== null) {
    for (let i = 0; i < selected_word.length; i++) {
      document
        .getElementById(selected_word[i])
        .classList.remove(highlight1_colours[old_int]);
    }
    document.getElementById(selected_word_start).classList.remove("wordStart");
    document.getElementById(selected_word_end).classList.remove("wordEnd");
  }
  if (selected_line !== null) {
    for (let i = 0; i < selected_line.length; i++) {
      document
        .getElementById(selected_line[i])
        .classList.remove(highlight2_colours[old_int]);
    }
  }
  selected_word = null;
  selected_word_start = null;
  selected_word_end = null;
  selected_line = null;
};

handleChangeWords = () => {
  const newVal = document.getElementById("row8b").value;
  words_length = newVal;
};

toggleWords = () => {
  if (show_words === true) {
    if (show_lines === true) {
      show_lines = false;
      document.getElementById("row7b").innerHTML = unchecked_svg;
      if (selected_word !== null) {
        for (let i = 0; i < selected_word.length; i++) {
          document
            .getElementById(selected_word[i])
            .classList.remove(highlight1_colours[text_colour_selected]);
        }
        document
          .getElementById(selected_word_start)
          .classList.remove("wordStart");
        document.getElementById(selected_word_end).classList.remove("wordEnd");
      }
    } else {
      show_lines = true;
      document.getElementById("row7b").innerHTML = checked_svg;
    }
  }
};

handleChangeLines = () => {
  const newVal = document.getElementById("row10b").value;
  lines_length = newVal;
};

toggleLines = () => {
  if (show_words === true) {
    if ((show_lines = true)) {
      show_lines = false;
      document.getElementById("row7b").innerHTML = unchecked_svg;
    }
    show_words = false;
    document.getElementById("row9b").innerHTML = unchecked_svg;
    if (selected_word !== null) {
      for (let i = 0; i < selected_word.length; i++) {
        document
          .getElementById(selected_word[i])
          .classList.remove(highlight1_colours[text_colour_selected]);
      }
      document
        .getElementById(selected_word_start)
        .classList.remove("wordStart");
      document.getElementById(selected_word_end).classList.remove("wordEnd");
    }
    if (selected_line !== null) {
      for (let i = 0; i < selected_line.length; i++) {
        document
          .getElementById(selected_line[i])
          .classList.remove(highlight2_colours[text_colour_selected]);
      }
    }
    selected_word = null;
    selected_word_start = null;
    selected_word_end = null;
    selected_line = null;
  } else {
    if (show_lines === false) {
      show_lines = true;
      document.getElementById("row7b").innerHTML = checked_svg;
    }
    show_words = true;
    document.getElementById("row9b").innerHTML = checked_svg;
  }
};

// menu button
const menu_bar = document.createElement("div");
const stop_button = document.createElement("div");
const settings_button = document.createElement("div");
stop_button.innerHTML = stop_svg;
settings_button.innerHTML = gear_svg;
menu_bar.append(stop_button);
menu_bar.append(settings_button);
menu_bar.id = "menubar";
menu_bar.style.display = "none";
document.getElementsByTagName("main")[0].parentNode.append(menu_bar);
stop_button.onclick = handleCloseReaderView;
settings_button.onclick = handleOpenSettings;

// settings pannel
const settings = document.createElement("div");
settings.id = "settings";
settings.style.display = "none";

const row1 = document.createElement("div");
row1.id = "row1";
const row1a = document.createElement("div");
row1a.id = "row1a";
row1a.innerHTML = "Settings";
const row1b = document.createElement("div");
row1b.id = "row1b";
row1b.innerHTML = cross_svg;
row1b.onclick = handleOpenSettings;
row1.append(row1a);
row1.append(row1b);

const spacer1 = document.createElement("div");
spacer1.id = "spacer1";
spacer1.className = "spacer";

const row2 = document.createElement("div");
row2.id = "row2";
row2.innerHTML = "Font";

const row3 = document.createElement("div");
row3.id = "row3";
const row3a = document.createElement("div");
row3a.id = "row3a";
row3a.innerHTML = "Aa";
row3a.onclick = () => handleChangeFont(0);
const row3b = document.createElement("div");
row3b.id = "row3b";
row3b.innerHTML = "Aa";
row3b.onclick = () => handleChangeFont(1);
const row3c = document.createElement("div");
row3c.id = "row3c";
row3c.innerHTML = "Aa";
row3c.onclick = () => handleChangeFont(2);
const row3d = document.createElement("div");
row3d.id = "row3d";
row3d.innerHTML = "Aa";
row3d.onclick = () => handleChangeFont(3);
row3.append(row3a);
row3.append(row3b);
row3.append(row3c);
row3.append(row3d);

const spacer2 = document.createElement("div");
spacer2.id = "spacer2";
spacer2.className = "spacer";

const row5 = document.createElement("div");
row5.id = "row5";
row5.innerHTML = "Colour Scheme";

const row6 = document.createElement("div");
row6.id = "row6";
const row6a = document.createElement("div");
row6a.id = "row6a";
row6a.onclick = () => handleColourChange(0);
const row6b = document.createElement("div");
row6b.id = "row6b";
row6b.onclick = () => handleColourChange(1);
const row6c = document.createElement("div");
row6c.id = "row6c";
row6c.onclick = () => handleColourChange(2);
const row6d = document.createElement("div");
row6d.id = "row6d";
row6d.onclick = () => handleColourChange(3);
row6.append(row6a);
row6.append(row6b);
row6.append(row6c);
row6.append(row6d);

const spacer3 = document.createElement("div");
spacer3.id = "spacer3";
spacer3.className = "spacer";

const row7 = document.createElement("div");
row7.id = "row7";
const row7a = document.createElement("div");
row7a.id = "row7a";
row7a.innerHTML = "Word Highlight";
const row7b = document.createElement("div");
row7b.id = "row7b";
row7b.innerHTML = checked_svg;
row7b.onclick = toggleWords;
row7.append(row7a);
row7.append(row7b);

const row8 = document.createElement("div");
row8.id = "row8";
const row8a = document.createElement("div");
row8a.id = "row8a";
row8a.innerHTML = "#Words";
const row8b = document.createElement("input");
row8b.type = "range";
row8b.min = "1";
row8b.max = "10";
row8b.value = "3";
row8b.id = "row8b";
row8b.oninput = handleChangeWords;
row8.append(row8a);
row8.append(row8b);

const spacer4 = document.createElement("div");
spacer4.id = "spacer4";
spacer4.className = "spacer";

const row9 = document.createElement("div");
row9.id = "row9";
const row9a = document.createElement("div");
row9a.id = "row9a";
row9a.innerHTML = "Lines Highlight";
const row9b = document.createElement("div");
row9b.id = "row9b";
row9b.innerHTML = checked_svg;
row9b.onclick = toggleLines;
row9.append(row9a);
row9.append(row9b);

const row10 = document.createElement("div");
row10.id = "row10";
const row10a = document.createElement("div");
row10a.id = "row10a";
row10a.innerHTML = "#Lines";
const row10b = document.createElement("input");
row10b.type = "range";
row10b.min = "1";
row10b.max = "10";
row10b.value = "3";
row10b.id = "row10b";
row10b.oninput = handleChangeLines;
row10.append(row10a);
row10.append(row10b);

settings.append(row1);
settings.append(spacer1);
settings.append(row2);
settings.append(row3);
settings.append(spacer2);
settings.append(row5);
settings.append(row6);
settings.append(spacer3);
settings.append(row7);
settings.append(row8);
settings.append(spacer4);
settings.append(row9);
settings.append(row10);
document.getElementsByTagName("main")[0].parentNode.append(settings);

reader_toggle.addEventListener("click", changeReaderMode);
