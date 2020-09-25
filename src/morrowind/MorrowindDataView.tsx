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

  getFloat = (offset: number) => {
    return this.dataview.getFloat32(offset);
  };

  getNumber = (offset: number) => {
    return this.dataview.getInt32(offset);
  };

  getBigInt = (offset: number) => {
    return this.dataview.getUint64(offset);
  };
}
