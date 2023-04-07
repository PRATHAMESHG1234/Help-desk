import React, { useState } from 'react';
import { Upload, Button, Input } from 'antd';

const MyMessageBox = () => {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);

  const handleSendMessage = () => {
    // Send the message and files
    console.log(message, files);
  };

  const handleFileChange = (fileList) => {
    setFiles(fileList);
  };

  return (
    <div style={{ fontSize: '16px', lineHeight: 1.5 }}>
      <Input.TextArea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder='Type your message here...'
        autoSize={{ minRows: 4, maxRows: 4 }}
        style={{ marginBottom: '16px' }}
      />
      <Upload
        multiple
        fileList={files}
        onChange={(info) => handleFileChange(info.fileList)}
      >
        <Button>Upload Files</Button>
      </Upload>
      <div style={{ marginTop: '16px' }}>
        {files.map((file) => (
          <div key={file.uid}>
            <img
              src={file.thumbUrl}
              alt={file.name}
              style={{ width: '100px' }}
            />
          </div>
        ))}
      </div>
      <Button
        onClick={handleSendMessage}
        style={{ backgroundColor: '#282A2C', color: '#fff', marginTop: '16px' }}
      >
        Send
      </Button>
    </div>
  );
};

export default MyMessageBox;
