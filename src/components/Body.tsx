import React from "react";
import { MorrowindDataView } from "../morrowind/MorrowindDataView";
import { MorrowindPluginEncoder } from "../morrowind/MorrowindPluginEncoder";
import MorrowindRecord from "../morrowind/structures/MorrowindRecord";

import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import { useState } from "react";
import { PluginUploader } from "./PluginUploader";
import { FileObject } from "material-ui-dropzone";

export function Body() {
  const [result, setResult] = useState<MorrowindRecord[] | null>(null);

  const handleBuffer = function (e: any) {
    let buffer: ArrayBuffer = e.target.result;
    let dataview: MorrowindDataView = new MorrowindDataView(buffer);
    let encoder: MorrowindPluginEncoder = new MorrowindPluginEncoder(dataview);
    let records: MorrowindRecord[] = encoder.encode();
    setResult(records);
  };

  const handleFileUpload = function (files: FileObject[]) {
    const file = files[0].file;

    if (file == null) {
      return;
    }

    var reader = new FileReader();
    reader.onload = handleBuffer;
    reader.readAsArrayBuffer(file);
  };

  let editor;
  if (result !== null) {
    editor = (
      <>
        <JSONInput
          id="a_unique_id"
          placeholder={result}
          locale={locale}
          theme="light_mitsuketa_tribute"
          width="100%"
          height="550px"
        />
      </>
    );
  }

  return (
    <>
      <hr />
      <PluginUploader onUpload={handleFileUpload} />
      <hr />
      <div>{editor}</div>
    </>
  );
}
