export const openDocumentInNewTab = (base64Data: string, filename: string) => {
  const fileURL = `data:application/pdf;base64,${base64Data}`;
  const newTab = window.open();
  if (newTab) {
    newTab.document.write(
      `<html><body><embed width="100%" height="100%" src="${fileURL}" type="application/pdf"></body></html>`
    );
    newTab.document.title = filename;
  }
};
