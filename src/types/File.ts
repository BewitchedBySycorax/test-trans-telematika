export type File = {
  id: number;
  title: string | null;
  secret: string | null;
  pdf_data: Buffer;
}
