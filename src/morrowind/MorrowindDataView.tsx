import { SimpleDataView } from "../utilities/SimpleDataView";

export class MorrowindDataView {
  dataview: SimpleDataView;

  constructor(buffer: ArrayBuffer) {
    this.dataview = new SimpleDataView(buffer);
  }

  getBuffer = () => {
    return this.dataview.getBuffer();
  };

  setBuffer = (buffer: ArrayBuffer) => {
    this.dataview = new SimpleDataView(buffer);
  };

  getByteLength = () => {
    return this.dataview.getByteLength();
  };

  getString = (offset: number, length: number) => {
    return this.dataview.getString(offset, length);
  };

  getNumber = (offset: number) => {
    return this.dataview.getUint32(offset);
  };

  getBigInt = (offset: number) => {
    return this.dataview.getUint64(offset);
  };
}
