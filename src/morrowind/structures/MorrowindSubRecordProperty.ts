import { MorrowindSubRecordPropertyDataTypes } from "./MorrowindSubRecordPropertyDataTypes";

export default class MorrowindSubRecordProperty {
  Bytes: number | null;
  Type: MorrowindSubRecordPropertyDataTypes;
  Text: string;
  Description: string;

  constructor(
    bytes: number | null,
    type: MorrowindSubRecordPropertyDataTypes,
    text: string,
    description: string
  ) {
    this.Bytes = bytes;
    this.Type = type;
    this.Text = text;
    this.Description = description;
  }
}
