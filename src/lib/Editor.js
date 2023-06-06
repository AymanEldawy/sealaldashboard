import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';

const Editor = ({ msg, setMsg }) => {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      value={msg}
      className='min-h-[200px]'
      // config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(newContent) => setMsg(newContent)} // preferred to use only this option to update the content for performance reasons
      onChange={(newContent) => {}}
    />
  );
};
export default Editor;
