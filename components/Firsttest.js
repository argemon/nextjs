import React from 'react';
import {
  PDFDocument,
  PDFText,
  PDFTable,
  PDFTableRow,
  PDFTableColumn,
  PDFColumn,
  PDFColumns,
  pdf,
  StyleSheet,
} from 'react-pdfmake';

export default function Pdf() {
  const file = React.useMemo(() => {
    return pdf(
      <PDFDocument
        pageSize="A5"
        pageOrientation="portrait"
        pageBreakBefore={(currentNode, followingNodesOnPage) => {
          return (
            currentNode.headlineLevel === 1 && followingNodesOnPage.length === 0
          );
        }}
        styles={{
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 0, 0, 10],
          },
          subheader: {
            fontSize: 16,
            bold: true,
            margin: [0, 10, 0, 5],
          },
          tableExample: {
            margin: [0, 15, 0, 15],
          },
          tableHeader: {
            bold: true,
            fontSize: 8,
            color: 'black',
            alignContent: 'center',
          },
        }}
      >

        <PDFTable
          headerRows={1}
          style="tableExample"
          pageOrientation="portrait"
         >
          <PDFTableRow>
            <PDFTableColumn style="tableHeader">ENVELOPE DE PAGAMENTO MENSAL</PDFTableColumn>
       
          </PDFTableRow>
          <PDFTableRow>
            <PDFTableColumn>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. 
            </PDFTableColumn>
          </PDFTableRow>
          <PDFTableRow>
            <PDFTableColumn>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. 
            </PDFTableColumn>
          </PDFTableRow>
        </PDFTable>
      </PDFDocument>
    );
  }, []);
  return (
    <>
      <button onClick={() => file.print()}>Print PDF</button>
      <button onClick={() => file.download()}>Download PDF</button>
      <button onClick={() => file.open()}>Open PDF</button>
    </>
  );
}