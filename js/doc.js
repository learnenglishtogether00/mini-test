function fetchData() {
  return fetch("./data.json");
}

async function main() {
  const res = await fetchData();
  const data = await res.json();
  const documents = formatDocumentsData(data.documents);

  const curDocId = localStorage.getItem("curDoc");
  const curDoc = documents.find((item) => item.id === curDocId);

  renderData(curDoc);
}

function renderData(doc) {
  const docFrameEle = document.getElementById("docFrame");

  docFrameEle.setAttribute("src", doc.url);
}

main();

function formatDocumentsData(documents) {
  return documents.map((document) => {
    return {
      ...document,
      url: formatPdfURL(document.url),
    };
  });
}

function formatPdfURL(pdfURL) {
  return pdfURL.replace("/view?usp", "/preview?usp");
}
