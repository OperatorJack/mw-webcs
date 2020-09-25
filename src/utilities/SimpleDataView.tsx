export class SimpleDataView {
  dataview: DataView;

  constructor(buffer: ArrayBuffer) {
    this.dataview = new DataView(buffer);
  }

  getBuffer = () => {
    return this.dataview.buffer;
  };

  setBuffer = (buffer: ArrayBuffer) => {
    this.dataview = new DataView(buffer);
  };

  getByteLength = () => {
    return this.dataview.buffer.byteLength;
  };

  getString = (offset: number, length: number) => {
    var end =
      typeof length == "number" ? offset + length : this.dataview.byteLength;
    var text = "";
    var val = -1;

    while (offset < this.dataview.byteLength && offset < end) {
      val = this.dataview.getUint8(offset++);
      if (val == 0) break;
      text += String.fromCharCode(val);
    }

    return text;
  };

  getFloat32 = (offset: number, littleEndian: boolean = true) => {
    return this.dataview.getFloat32(offset, littleEndian);
  };

  getUint32 = (offset: number, littleEndian: boolean = true) => {
    return this.dataview.getUint32(offset, littleEndian);
  };

  getInt32 = (offset: number, littleEndian: boolean = true) => {
    return this.dataview.getInt32(offset, littleEndian);
  };

  getUint64 = (offset: number, littleEndian: boolean = true) => {
    return this.dataview.getBigUint64(offset, littleEndian);
  };
}
