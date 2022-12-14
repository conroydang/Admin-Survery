import { IShared } from './shared.model';
export interface ISurveyPages<A> {
  pages:A,
  showQuestionNumbers: "on",
  pageNextText: "Next",
  showPrevButton: true,
  firstPageIsStarted: true,
  // startSurveyText: string,
  // completedHtml: string,
  // showPreviewBeforeComplete: string,
  completeText: "Thank you for surveying"
}
export interface ISurvey extends IShared {

          name?: string,
          title?: string,
          type?: string,
          visibleIf?: string,
          choices?: [
              { value: string, text: string},

          ],
          isRequired?: boolean,
          rateMin?:string,
          rateMax?:string

};


