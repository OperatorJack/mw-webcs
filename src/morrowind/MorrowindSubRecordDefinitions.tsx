function getProperty(
  bytes: number | null,
  type: string,
  text: string,
  description: string
) {
  return {
    bytes: bytes,
    type: type,
    text: text,
    description: description,
  };
}

export const MorrowindSubRecordDefinitions = {
  TES3: {
    HEDR: [
      getProperty(4, "n", "Version", "Float. Version. 1.2."),
      getProperty(4, "n", "Unknown", "Long. Unknown."),
      getProperty(32, "s", "Company Name", "String. Company Name."),
      getProperty(256, "s", "ESM Description", "String. ESM File Description."),
      getProperty(4, "n", "Records", "Long. Number of records."),
    ],
    MAST: [
      getProperty(
        null,
        "s",
        "Master File",
        "Variable length string. Master File."
      ),
    ],
    DATA: [
      getProperty(4, "n", "Master Size", "Long. Master Size."),
      getProperty(
        4,
        "n",
        "Master Size",
        "Long. Master Size, split due to JSON."
      ),
    ],
  },
} as const;
