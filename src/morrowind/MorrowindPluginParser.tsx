import { MorrowindDataView } from "./MorrowindDataView";
import MorrowindRecord from "./structures/MorrowindRecord";
import MorrowindSubRecord from "./structures/MorrowindSubRecord";
import { MorrowindSubRecordDefinitions } from "./MorrowindSubRecordDefinitions";

export class MorrowindPluginParser {
  dataview: MorrowindDataView;

  constructor(dataview: MorrowindDataView) {
    this.dataview = dataview;
  }

  private integerSize: number = 4;
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
      console.log(groupName + " not found.");
      return "Not Implemented";
    }
    let definitions: any = (MorrowindSubRecordDefinitions as any)[groupName][
      propertyName
    ];

    if (definitions == null) {
      return "Not Implemented";
    }

    definitions.forEach((defintion: any) => {
      let bytes: number = defintion.bytes;
      let text: string = defintion.text;

      var property;
      if (defintion.type == "n") {
        property = {
          Name: text,
          Value: this.dataview.getNumber(position),
        };
        position += this.integerSize;
      } else if (defintion.type == "n64") {
        property = {
          Name: text,
          Value: this.dataview.getBigInt(position),
        };
        position += this.bigIntegerSize;
      } else if (defintion.type == "s") {
        property = {
          Name: text,
          Value: this.dataview.getString(position, bytes ?? offset),
        };
        position += bytes;
      } else {
        property = {};
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
    while (position <= offset) {
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
