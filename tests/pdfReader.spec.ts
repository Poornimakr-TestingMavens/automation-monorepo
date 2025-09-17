import { test } from "@playwright/test";
import { pdfPage } from "../pages/pdfReader";
import * as pdfValidations from "../data/test-data.json";
import * as testConfig from "../environment/config.json";

test("Validate country, capital, and currency data in PDF (from JSON)", async () => {
  const PdfPage = new pdfPage(testConfig.pdfPath);

  // Single validation from JSON
  await PdfPage.validatePdfContainsText(pdfValidations.singleValidation);

  // Multiple validations from JSON
  await PdfPage.validateMultipleTexts(pdfValidations.multipleValidations);
});
