import { MorrowindDataView } from "./MorrowindDataView";
import MorrowindRecord from "./structures/MorrowindRecord";
import MorrowindSubRecord from "./structures/MorrowindSubRecord";
import { MorrowindSubRecordDefinitions } from "./MorrowindSubRecordDefinitions";
import MorrowindSubRecordProperty from "./structures/MorrowindSubRecordProperty";
import { MorrowindSubRecordPropertyDataTypes } from "./structures/MorrowindSubRecordPropertyDataTypes";

export class MorrowindPluginParser {
  dataview: MorrowindDataView;

  constructor(dataview: MorrowindDataView) {
    this.dataview = dataview;
  }

  private integerSize: number = 4;
  private floatSize: number = 4;
  private bigIntegerSize: number = 8;

  private parseSubRecordProperties(
    groupName: string,
    propertyName: string,
    position: number,
    offset: number
  ): any {
    let properties: any = [];

    let defintionGroup: any = (MorrowindSubRecordDefinitions as any)[groupName];
    if (defintionGroup == null) {
      return "Not Implemented";
    }
    let definitions: any = (MorrowindSubRecordDefinitions as any)[groupName][
      propertyName
    ];

    if (definitions == null) {
      return "Not Implemented";
    }

    definitions.forEach((defintion: MorrowindSubRecordProperty) => {
      let bytes: number | null = defintion.Bytes;
      let text: string = defintion.Text;

      var property;
      switch (defintion.Type) {
        case MorrowindSubRecordPropertyDataTypes.Number:
          property = {
            Name: text,
            Value: this.dataview.getNumber(position),
          };
          position += this.integerSize;
          break;

        case MorrowindSubRecordPropertyDataTypes.BigInt:
          property = {
            Name: text,
            Value: this.dataview.getBigInt(position),
          };
          position += this.bigIntegerSize;
          break;

        case MorrowindSubRecordPropertyDataTypes.Float:
          property = {
            Name: text,
            Value: this.dataview.getFloat(position),
          };
          position += this.floatSize;
          break;

        case MorrowindSubRecordPropertyDataTypes.String:
          property = {
            Name: text,
            Value: this.dataview.getString(position, bytes ?? offset),
          };
          position += bytes ?? offset;
          break;

        default:
          property = {
            Name: "UNDEFINED",
            Value: "UNDEFINED",
          };
      }

      properties.push(property);
    });

    return properties;
  }

  private parseSubRecordData(
    groupName: string,
    position: number,
    offset: number
  ): MorrowindSubRecord[] {
    let SubRecords: MorrowindSubRecord[] = [];
    let finalPosition: number = position + offset;
    while (position < finalPosition) {
      let name: string = this.dataview.getString(position, 4);
      position += 4;
      let size: number = this.dataview.getNumber(position);
      position += this.integerSize;
      let data: any = this.parseSubRecordProperties(
        groupName,
        name,
        position,
        size
      );
      position += size;

      var SubRecord = new MorrowindSubRecord(name, size, data);

      SubRecords.push(SubRecord);
    }

    return SubRecords;
  }

  parse(): MorrowindRecord[] {
    var endOfFile = false;
    var position = 0;
    var records = [];
    while (endOfFile === false) {
      let name: string = this.dataview.getString(position, 4);
      position += 4;
      let size: number = this.dataview.getNumber(position);
      position += this.integerSize;
      let unknownHeader: number = this.dataview.getNumber(position);
      position += this.integerSize;
      let flags: number = this.dataview.getNumber(position);
      position += this.integerSize;
      let SubRecords: MorrowindSubRecord[] = this.parseSubRecordData(
        name,
        position,
        size
      );
      position += size;

      var record = new MorrowindRecord(
        name,
        size,
        unknownHeader,
        flags,
        SubRecords
      );

      records.push(record);

      if (position >= this.dataview.getByteLength()) {
        endOfFile = true;
      }
    }

    return records;
  }

  toJSON(obj: any): string {
    return JSON.stringify(
      obj,
      (key, value) => (typeof value === "bigint" ? value.toString() : value) // return everything else unchanged
    );
  }
}
