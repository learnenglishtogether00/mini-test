function fetchData() {
  return fetch("./data.json");
}

async function main() {
  const res = await fetchData();
  const data = await res.json();
  const exams = formatExamsData(data.exams);
  // console.log({ exams });

  const curTest = localStorage.getItem("curTest");
  const curExam = exams.find((item) => item.id === curTest);

  renderData(curExam);
}

function renderData(exam) {
  const docFrameEle = document.getElementById("docFrame");
  const audioFrameEle = document.getElementById("audioFrame");
  const formFrameEle = document.getElementById("formFrame");

  docFrameEle.setAttribute("src", exam.docURL);
  audioFrameEle.setAttribute("src", exam.fullAudioURL);
  formFrameEle.setAttribute("src", exam.formURL);
}

main();

function formatExamsData(exams) {
  const FILTER_PDF_EXAM_KEYS = ["docURL", "answerKeyURL", "transcriptURL"];
  const FORM_KEY = "formURL";

  return exams.map((exam) => {
    let formattedExam = { ...exam };

    for (const key in exam) {
      if (FILTER_PDF_EXAM_KEYS.includes(key)) {
        formattedExam[key] = formatPdfURL(exam[key]);
      }

      if (key === FORM_KEY) {
        formattedExam[FORM_KEY] = formatFormURL(exam[FORM_KEY]);
      }
    }

    return formattedExam;
  });
}

function formatPdfURL(pdfURL) {
  return pdfURL.replace("/view?usp", "/preview?usp");
}

function formatFormURL(formURL) {
  return formURL.replace("/edit?usp=sharing", "/viewform?embedded=true");
}
