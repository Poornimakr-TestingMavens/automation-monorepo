import{expect} from "@playwright/test";
import { pdfHelper } from "../utils/pdfHelper";
export class pdfPage{
    constructor(private pdfPath:string){

    }
    async validatePdfContainsText(expectedText: string) {
    const pdfText = await pdfHelper.readPdf(this.pdfPath);
    expect(pdfText).toContain(expectedText);
  }
   async validateMultipleTexts(expectedTexts: string[]) {
    const pdfText = await pdfHelper.readPdf(this.pdfPath);
    for (const text of expectedTexts) {
      expect(pdfText).toContain(text);
    }
   }

}