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
  GLOB: {
    NAME: [
      new MorrowindSubRecordProperty(
        null,
        MorrowindSubRecordPropertyDataTypes.String,
        "Global ID",
        "Variable length string. Global ID."
      ),
    ],
    FNAM: [
      new MorrowindSubRecordProperty(
        1,
        MorrowindSubRecordPropertyDataTypes.String,
        "Type of Global",
        "1 byte String. Type of global. 's' = short; 'l' = long; 'f' = float;"
      ),
    ],
    FLTV: [
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Float,
        "Float Data",
        "Float. Float Data."
      ),
    ],
  },
  CLAS: {
    NAME: [
      new MorrowindSubRecordProperty(
        null,
        MorrowindSubRecordPropertyDataTypes.String,
        "Class ID",
        "Variable length string. Class ID."
      ),
    ],
    FNAM: [
      new MorrowindSubRecordProperty(
        null,
        MorrowindSubRecordPropertyDataTypes.String,
        "Class Name",
        "Variable length string. The name of the class."
      ),
    ],
    CLDT: [
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Attribute ID 1",
        "Long. Attribute Data 1"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Attribute ID 2",
        "Long. Attribute Data 2"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Specialization",
        "Long. 0 = Combat; 1 = Magic; 2 = Stealth;"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Minor Skill 1",
        "Long. Minor Skill 1"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Major Skill 1",
        "Long. Major Skill 1"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Minor Skill 2",
        "Long. Minor Skill 2"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Major Skill 2",
        "Long. Major Skill 2"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Minor Skill 3",
        "Long. Minor Skill 3"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Major Skill 3",
        "Long. Major Skill 3"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Minor Skill 4",
        "Long. Minor Skill 4"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Major Skill 4",
        "Long. Major Skill 4"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Minor Skill 5",
        "Long. Minor Skill 5"
      ),
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Major Skill 5",
        "Long. Major Skill 5"
      ),
      // TODO: Replace with per-bit properties.
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "Flags",
        "Long. Flags"
      ),
      // TODO: Replace with per-bit properties.
      new MorrowindSubRecordProperty(
        MorrowindDataType.Number.Size,
        MorrowindSubRecordPropertyDataTypes.Number,
        "AutoCalc Flags",
        "Long. AutoCalc Flags"
      ),
    ],
    DESC: [
      new MorrowindSubRecordProperty(
        null,
        MorrowindSubRecordPropertyDataTypes.String,
        "Class Description",
        "Variable length string. The description of the class."
      ),
    ],
  },
} as const;
