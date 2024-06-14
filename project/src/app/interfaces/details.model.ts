export interface IDetails {
  key: string;
  description: string;
  files: File[];
  links: string[];
}

export interface File {
  id: number;
  name: string;
  contentType: string;
  author: string;
  createTs: string;
  fileSize: number;
}
