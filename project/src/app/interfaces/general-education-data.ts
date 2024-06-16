export interface IGeneralEducatinoData {
  result: IResult[];
  totalItems: number;
}

export interface IResult {
  id: number;
  name: string;
  description: string;
  createTs: string;
  attachments: IAttachment[];
}

export interface IAttachment {
  id: number;
  name: string;
  contentType: string;
  author: string;
  createTs: string;
  fileSize: number;
}
