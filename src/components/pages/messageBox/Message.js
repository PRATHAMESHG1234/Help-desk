import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Dropzone from 'react-dropzone';

const MyMessageBox = () => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);

  const handleSendMessage = () => {
    // Send the message and files
    console.log(message, files);
  };

  const handleDrop = (acceptedFiles) => {
    // Add the dropped files to the state
    setFiles([...files, ...acceptedFiles]);
  };

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['image', 'clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'align',
    'list',
    'bullet',
    'image',
  ];

  return (
    <div style={{ fontSize: '16px', lineHeight: 1.5 }}>
      <ReactQuill
        value={message}
        onChange={setMessage}
        modules={modules}
        formats={formats}
        placeholder='Type your message here...'
        style={{ height: '100px' }} // set the height of the message box
      />
      <Dropzone onDrop={handleDrop} accept='image/*'>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              {files.map((file) => (
                <div key={file.name}>
                  <img src={URL.createObjectURL(file)} alt={file.name} />
                </div>
              ))}
            </aside>
          </section>
        )}
      </Dropzone>
      <button
        onClick={handleSendMessage}
        style={{ backgroundColor: '#282A2C', color: '#fff' }}
      >
        Send
      </button>
    </div>
  );
};

export default MyMessageBox;
