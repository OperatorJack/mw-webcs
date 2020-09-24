import { MorrowindDataType } from "./structures/MorrowindDataType";
import MorrowindSubRecordProperty from "./structures/MorrowindSubRecordProperty";
import { MorrowindSubRecordPropertyDataTypes } from "./structures/MorrowindSubRecordPropertyDataTypes";

export const MorrowindSubRecordDefinitions = {
  TES3: {
    HEDR: [
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
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
} as const;
