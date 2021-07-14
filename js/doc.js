function fetchData() {
  return fetch("./data.json");
}

async function main() {
  const res = await fetchData();
  const data = await res.json();
  const documents = data.documents;

  const curDocId = localStorage.getItem("curDoc");
  const curDoc = documents.find((item) => item.id === curDocId);

  renderData(curDoc);
}

function renderData(doc) {
  const docFrameEle = document.getElementById("docFrame");

  docFrameEle.setAttribute("src", doc.url);
}

main();
