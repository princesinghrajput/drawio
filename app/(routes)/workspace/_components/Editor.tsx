"use client"
import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from '@editorjs/header';
import List from "@editorjs/list";
import SimpleImage from "@editorjs/simple-image";
import LinkTool from '@editorjs/link';
import Checklist from '@editorjs/checklist';
import Table from '@editorjs/table'

const rawDocument={
  "time" : 1550476186479,
    "blocks" : [{
      data:{
        text:'Document Name',
        level: 2
      },
      id:"123",
      type:"header"
    },
    {
      data:{
       
        level: 4
      },
      id:"12345",
      type:"header"
    }
  ],
    "version" : "2.8.1"
}
function Editor() {
  const ref = useRef<EditorJS>();
  const [document, setDocument] = useState(rawDocument);

  useEffect(() => {
    initEditor();
  }, []);
  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      tools:{
        header: {
            class: Header,
            shortcut: 'CMD+SHIFT+H',

            config: {
              placeholder: 'Enter a Header',
              levels: [2, 3, 4],
              defaultLevel: 3
            }
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: 'unordered'
            }
          },
          image: {
            class:SimpleImage,
          },
          linkTool: {
            class: LinkTool,
            config: {
              endpoint: 'http://localhost:3000/fetchUrl', // Your backend endpoint for url data fetching,
            }
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          table: {
            class: Table,
            inlineToolbar: true,
            config: {
              rows: 2,
              cols: 3,
            },
          },
      },
      holder: "editorjs",
      data:document,

    });
    ref.current = editor;
  };
  return <div>
    <div id="editorjs" className="ml-20"></div>
  </div>;
}

export default Editor;
