import React from 'react';
import styles from '../../../styles/index';
import { MdOutlineArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Select, Upload } from 'antd';
const { Dragger } = Upload;
const CreateTicket = () => {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1); // go back one page
  }
  console.log(styles);
  return (
    <div className={`${styles.default.tickets}`}>
      <div className={`${styles.default.pagePath}`}>
        <p>
          All Tickets / <b>New Ticket</b>
        </p>
      </div>
      <div className={`${styles.default.createTicketContainer}`}>
        <div className={`${styles.default.createTicketTitle}`}>
          <button onClick={handleGoBack}>
            <MdOutlineArrowBack />
          </button>

          <p>Submit a ticket request</p>
        </div>
        <div className={`${styles.default.createTicketForm}`}>
          <div className={`${styles.default.col1}`}>
            <label>Ticket Summary</label>
            <input type='text' placeholder='Enter ticket summary' />
          </div>
          <div className={`${styles.default.col2}`}>
            <label>Priority</label>
            <div className={`antd-select-container`}>
              <Select
                placeholder='Select ticket priority'
                //   onChange={handleChange}
                options={[
                  {
                    value: 'Low',
                    label: 'Low',
                  },
                  {
                    value: 'Medium',
                    label: 'Medium',
                  },
                  {
                    value: 'High',
                    label: 'High',
                  },
                ]}
              />
            </div>
          </div>
          <div className={`${styles.default.col2}`}>
            <label>Ticket Category</label>
            <div className={`antd-select-container`}>
              <Select
                placeholder='Select ticket category'
                //   onChange={handleChange}
                options={[
                  {
                    value: 'Low',
                    label: 'Low',
                  },
                  {
                    value: 'Medium',
                    label: 'Medium',
                  },
                  {
                    value: 'High',
                    label: 'High',
                  },
                ]}
              />
            </div>
          </div>
          {/* <div className={`${styles.default.col1}`}>
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "a11ychecker",
                "advlist",
                "advcode",
                "advtable",
                "autolink",
                "checklist",
                "export",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "powerpaste",
                "fullscreen",
                "formatpainter",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | casechange blocks | bold italic backcolor | " +
                "alignleft aligncenter alignright alignjustify | " +
                "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help",
            }}
          />
        </div> */}
          <div className={`${styles.default.col1}`}>
            <div className={`${styles.default.messageContainer}`}>
              <div className={`${styles.default.message}`}>
                <message
                  type='info'
                  description='Please attach any supporting documents to help us understand the issue better'
                />
              </div>
              <div className={`${styles.default.message}`}>
                <label>Enter your message:</label>
                <input type='text' placeholder='Type your message here' />
              </div>
            </div>
            <label>Attach Files(Optional)</label>
            <div className='antd-dragger-container'>
              <Dragger>
                {/* // {...props} */}
                <p className='ant-upload-drag-icon'>
                  <i className='fa-solid fa-cloud-arrow-up'></i>
                </p>
                <p className='ant-upload-text'>
                  drag & drop file <br />
                  or <b>Browse Files</b>
                </p>
              </Dragger>
              <p className={`${styles.default.uploadFileIntruction}`}>
                *You can upload JPEG, PNG, PDF, EXLS, TXT Files
              </p>
            </div>
          </div>
          <div className={`${styles.default.col1}`}>
            <button className={`${styles.default.ticketSubmit}`}>
              Submit Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
