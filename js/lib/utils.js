function formatExamsData(exams) {
  const FILTER_PDF_EXAM_KEYS = ["docURL", "answerKeyURL", "transcriptURL"];
  const FORM_KEY = "formURL";

  return exams.map((exam) => {
    let formattedExam = { ...exam };

    for (const key in exam) {
      if (FILTER_PDF_EXAM_KEYS.includes(key)) {
        formatExamsData[key] = formatPdfURL(exam[key]);
      }

      if (key === FORM_KEY) {
        formatExamsData[FORM_KEY] = formatFormURL(exam[FORM_KEY]);
      }
    }

    return formattedExam;
  });
}

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

function formatFormURL(formURL) {
  return formURL.replace("/edit?usp=sharing", "/viewform?embedded=true");
}
