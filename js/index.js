function fetchData() {
  return fetch("./data.json");
}

async function main() {
  const res = await fetchData();
  const data = await res.json();
  const exams = data.exams;

  renderTestList(exams);
}

function handleOpenMiniTest(examId) {
  window.localStorage.setItem("curTest", examId);
  window.location = "./mode.html";
}

function renderTestList(exams) {
  const testListEle = document.getElementById("test-list");

  for (const exam of exams) {
    const liEle = createTestItem(exam);
    testListEle.appendChild(liEle);
  }

  function createTestItem(exam) {
    const liEle = document.createElement("li");
    const btnEle = document.createElement("button");

    btnEle.setAttribute("class", "btn btn-link fs-3 text-decoration-none");
    btnEle.setAttribute("id", `test-${exam.id}-btn`);
    btnEle.addEventListener("click", function () {
      handleOpenMiniTest(exam.id);
    });
    btnEle.innerHTML += exam.name;
    liEle.appendChild(btnEle);
    return liEle;
  }
}

main();
