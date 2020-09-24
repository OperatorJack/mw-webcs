import { MorrowindDataType } from "./structures/MorrowindDataType";
import MorrowindSubRecordProperty from "./structures/MorrowindSubRecordProperty";
import { MorrowindSubRecordPropertyDataTypes } from "./structures/MorrowindSubRecordPropertyDataTypes";

export const MorrowindSubRecordDefinitions = {
  TES3: {
    HEDR: [
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Float,
        "Version",
        "Float. Version. 1.2."
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Unknown",
        "Long. Unknown."
      ),
      new MorrowindSubRecordProperty(
        32,
        MorrowindSubRecordPropertyDataTypes.String,
        "Author",
        "String. Author."
      ),
      new MorrowindSubRecordProperty(
        256,
        MorrowindSubRecordPropertyDataTypes.String,
        "Plugin Description",
        "String. Plugin Description."
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Records",
        "Long. Number of records."
      ),
    ],
    MAST: [
      new MorrowindSubRecordProperty(
        null,
        MorrowindSubRecordPropertyDataTypes.String,
        "Master File",
        "Variable length string. Master File."
      ),
    ],
    DATA: [
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Master Size",
        "Long. Master Size."
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Master Size Split",
        "Long. Master Size, split due to JSON."
      ),
    ],
  },
  GMST: {
    NAME: [
      new MorrowindSubRecordProperty(
        null,
        MorrowindSubRecordPropertyDataTypes.String,
        "Setting ID",
        "Variable length string. GMST Setting ID."
      ),
    ],
    STRV: [
      new MorrowindSubRecordProperty(
        null,
        MorrowindSubRecordPropertyDataTypes.String,
        "String Value",
        "Variable length string. GMST Setting String Value."
      ),
    ],
    INTV: [
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Integer Value",
        "Variable length string. GMST Setting Integer Value."
      ),
    ],
    FLTV: [
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Float,
        "String Value",
        "Variable length string. GMST Setting String Value."
      ),
    ],
  },
} as const;
