function fetchData() {
  return fetch("./data.json");
}

async function main() {
  const res = await fetchData();
  const data = await res.json();
  const exams = data.exams;

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
