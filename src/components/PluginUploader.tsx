import React from "react";
import { DropzoneAreaBase, FileObject } from "material-ui-dropzone";

export function PluginUploader(props: {
  onUpload: ((files: FileObject[]) => void) | undefined;
}) {
  return (
    <DropzoneAreaBase
      fileObjects={[]}
      filesLimit={1}
      acceptedFiles={[".esp", ".esm"]}
      showPreviewsInDropzone={false}
      onAdd={props.onUpload}
      dropzoneText="Drag and drop a plugin here or click to begin"
      maxFileSize={200000000}
    />
  );
}
