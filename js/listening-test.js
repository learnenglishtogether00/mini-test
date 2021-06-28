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
  const listenDocFrameEle = document.getElementById("listenDocFrame");
  const transcriptFrameEle = document.getElementById("transcriptFrame");
  const part1audioFrameEle = document.getElementById("part1audioFrame");
  const part2audioFrameEle = document.getElementById("part2audioFrame");
  const part3audioFrameEle = document.getElementById("part3audioFrame");
  const part4audioFrameEle = document.getElementById("part4audioFrame");

  listenDocFrameEle.setAttribute("src", exam.docURL);
  transcriptFrameEle.setAttribute("src", exam.transcriptURL);
  part1audioFrameEle.setAttribute("src", exam.part1AudioURL);
  part2audioFrameEle.setAttribute("src", exam.part2AudioURL);
  part3audioFrameEle.setAttribute("src", exam.part3AudioURL);
  part4audioFrameEle.setAttribute("src", exam.part4AudioURL);
}

main();
