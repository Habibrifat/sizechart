import { FaEdit, FaCamera } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  EditorState,
  convertToRaw,
  ContentState,
  convertFromRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Text from "./text";
import htmlToDraft from "html-to-draftjs";
// const LOCAL_STORAGE_KEY = "measurement-content";
const Measurement = () => {
  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // const [editorState, setEditorState] = useState(() => {
  //   // const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
  //   if (savedContent) {
  //     const contentState = convertFromRaw(JSON.parse(savedContent));
  //     return EditorState.createWithContent(contentState);
  //   }
  //   return EditorState.createEmpty();
  // });
  // useEffect(() => {
  //   const contentState = editorState.getCurrentContent();
  //   const contentRaw = convertToRaw(contentState);
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contentRaw));
  // }, [editorState]);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const savedContent = "<p>Hello hi rifat</p>"; // assume this is fetched from a database

  useEffect(() => {
    if (savedContent) {
      const contentState = ContentState.createFromBlockArray(
        htmlToDraft(savedContent)
      );
      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const contentRaw = convertToRaw(contentState);
    const contentHtml = draftToHtml(contentRaw);
    console.log(contentHtml);
    // const content = JSON.stringify(convertToRaw(contentState));
    // console.log(content);
  };
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
        <div className="editor border-solid border border-[#DEE0E2] h-96 ">
          <Editor
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
          />

          {/* <Text /> */}
          {/* <button onClick={handleSave}>Save</button> */}
        </div>
        <button onClick={handleSave}>Save</button>
      </div>
    </>
  );
};

export default Measurement;
