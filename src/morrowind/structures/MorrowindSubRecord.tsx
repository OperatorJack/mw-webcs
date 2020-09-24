export default class MorrowindSubRecord {
  Name: string;
  Size: number;
  Data: any;

  constructor(name: string, size: number, data: any) {
    this.Name = name;
    this.Size = size;
    this.Data = data;
  }
}
