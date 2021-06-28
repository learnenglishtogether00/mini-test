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
  const answerKeyFrameEle = document.getElementById("answerKeyFrame");

  answerKeyFrameEle.setAttribute("src", exam.answerKeyURL);
}

main();