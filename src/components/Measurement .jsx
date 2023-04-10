import { FaEdit, FaCamera } from "react-icons/fa";
import { useState } from "react";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Text from "./text";
const Measurement = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  // const handleSave = () => {
  //   const contentState = editorState.getCurrentContent();
  //   const content = JSON.stringify(convertToRaw(contentState));
  //   console.log(content);
  // };
  return (
    <>
      <div className="size-bg">
        <h2 className="text-xl font-bold py-3">Measurement Instructions </h2>
        <div className="measurement-btn">
          <button className="button px-8">
            Image library
            <FaCamera className="inline text-xl ms-4" />
          </button>
          <button className="button px-8">
            How to...
            <FaEdit className="inline text-xl ms-4" />
          </button>
        </div>
        <div className="editor border-solid border border-[#DEE0E2]">
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
          />
          <Text />
          {/* <button onClick={handleSave}>Save</button> */}
        </div>
      </div>
    </>
  );
};

export default Measurement;
