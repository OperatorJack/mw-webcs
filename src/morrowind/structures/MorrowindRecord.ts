import MorrowindSubRecord from "./MorrowindSubrecord";

export default class MorrowindRecord {
  Name: string;
  Size: number;
  UnkownHeader: number;
  Flags: number;
  SubRecords: MorrowindSubRecord[];

  constructor(
    name: string,
    size: number,
    unknownHeader: number,
    flags: number,
    SubRecords: any
  ) {
    this.Name = name;
    this.Size = size;
    this.UnkownHeader = unknownHeader;
    this.Flags = flags;
    this.SubRecords = SubRecords;
  }
}
