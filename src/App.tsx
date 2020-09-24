import React, { useState } from "react";
import { MorrowindDataView } from "./morrowind/MorrowindDataView";
import { MorrowindPluginParser } from "./morrowind/MorrowindPluginParser";
import MorrowindRecord from "./morrowind/structures/MorrowindRecord";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";

const App = () => {
  const [result, setResult] = useState<MorrowindRecord[] | null>(null);

  const handleBuffer = function (e: any) {
    let buffer: ArrayBuffer = e.target.result;
    let dataview: MorrowindDataView = new MorrowindDataView(buffer);
    let parser: MorrowindPluginParser = new MorrowindPluginParser(dataview);
    let records: MorrowindRecord[] = parser.parse();
    let result: string = parser.toJSON(records);
    console.log(result);
    setResult(records);
  };

  const handleFileUpload = function (e: React.ChangeEvent<HTMLInputElement>) {
    if (e?.target?.files == null) {
      return;
    }

    const file = e.target.files[0];

    if (file == null) {
      return;
    }

    var reader = new FileReader();
    reader.onload = handleBuffer;
    reader.readAsArrayBuffer(file);
  };

  const handleChange = function () {};

  let editor;
  if (result !== null) {
    console.log(result);
    editor = (
      <JSONInput
        id="a_unique_id"
        placeholder={result}
        locale={locale}
        theme="light_mitsuketa_tribute"
        width="100vw"
        height="85vh"
      />
    );
  }
  return (
    <div className="App">
      <h5>MorrowBrowser</h5>
      <p>Upload a file to trigger parsing. View console for formatted JSON.</p>
      <form>
        <input type="file" onChange={(e) => handleFileUpload(e)} />
      </form>
      <hr />
      {editor}
    </div>
  );
};

export default App;
