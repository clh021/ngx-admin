export class RecordModel {
  id: number;
  user_id: number;
  category_id: number;
  content: string;
}
export class TableDefaultModel {
  posts : {
    columns : Array <string>,
    records : Array <RecordModel>,
  }
}
