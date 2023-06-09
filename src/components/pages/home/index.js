import React from 'react';
import styles from '../../../styles/index';
import profile from '../images/profile.png';
// import message1 from '../images/message1.png';
import message2 from '../images/message2.png';
import priority from '../images/priority.png';
import { Timeline } from 'antd';
import { BsCircleFill } from 'react-icons/bs';
// import Message from '../messageBox/Message';
import MessageBox from '../messageBox/Message';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className={`${styles.default.ticketSectionContainer}`}>
      <div className={`${styles.default.ticketDetailsContainer}`}>
        <div className={`${styles.default.ticketIDContainer}`}>
          <p className={`${styles.default.ticketId}`}>Ticket #3032</p>
          <p className={`${styles.default.ticketStatus}`}>Open</p>
        </div>

        <div className={`${styles.default.ticketFieldContainer}`}>
          <p className={`${styles.default.ticketFieldTitle}`}>
            Ticket Raised at
          </p>
          <p className={`${styles.default.ticketRaisedTime}`}>
            12 January 2023, 4:30 pm
          </p>
        </div>

        <div className={`${styles.default.ticketFieldContainer}`}>
          <p className={`${styles.default.ticketFieldTitle}`}>Ticket Summary</p>
          <div className={`${styles.default.ticketFieldContent}`}>
            <p className={`${styles.default.ticketSummaryText}`}>
              Lorem ipsum dolor sit amet consectetur dunt proin ac.
            </p>
          </div>
        </div>

        <div className={`${styles.default.ticketFieldContainer}`}>
          <p className={`${styles.default.ticketFieldTitle}`}>Assigned To</p>
          <div className={`${styles.default.ticketFieldContent}`}>
            <div className={`${styles.default.ticketAssignedTo}`}>
              <img src={profile} alt='Profile' />
              <p className={`${styles.default.ticketAssignToName}`}>
                Michael Brooks
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.default.ticketFieldContainer}`}>
          <p className={`${styles.default.ticketFieldTitle}`}>Category/Form</p>
          <div className={`${styles.default.ticketFieldContent}`}>
            <p className={`${styles.default.ticketAssignToName}`}>
              <b>Michael Brooks</b>
            </p>
          </div>
        </div>

        <div className={`${styles.default.ticketFieldContainer}`}>
          <p className={`${styles.default.ticketFieldTitle}`}>Tags</p>
          <div className={`${styles.default.ticketFieldContent}`}>
            <div className={`${styles.default.ticketTags}`}>
              <p className={`${styles.default.ticketTag}`}>company plan</p>
              <p className={`${styles.default.ticketTag}`}>3d mapping</p>
            </div>
          </div>
        </div>

        <div className={`${styles.default.ticketFieldContainer}`}>
          <p className={`${styles.default.ticketFieldTitle}`}>Priority</p>
          <div className={`${styles.default.ticketFieldContent}`}>
            <div className={`${styles.default.ticketPriority}`}>
              <img src={priority} alt='Priority Flag' />
              <p className={`${styles.default.ticketPriorityLable}`}>
                <b>High Priority</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.default.ticketConversationContainer}`}>
        <div className={`${styles.default.ticketConversationHeader}`}>
          <p className={`${styles.default.ticketConversationHeaderTitle}`}>
            Conversation with Michael Brooks
          </p>
          <Link
            to='/tickets/createTicket'
            className={styles.default.ticketCreateBtn}
            style={{ textDecoration: 'none' }}
          >
            Create New Ticket
          </Link>
        </div>
        <div className={`${styles.default.conversationContainer}`}>
          <div className={`${styles.default.messageCard}`}>
            <div className={`${styles.default.messageCardProfile}`}>
              <img src={profile} alt='Profile' />
            </div>
            <div className={`${styles.default.messageCardMessageContent}`}>
              <div className={`${styles.default.messageCardMessageHeader}`}>
                <p className={`${styles.default.messageCardMessageSenderName}`}>
                  John Smith
                </p>
                <p className={`${styles.default.messageCardMessageDate}`}>
                  12 January 2023, 4:30 pm
                </p>
              </div>
              <p className={`${styles.default.messageCardMessage}`}>
                Lorem ipsum dolor sit amet consectetur. Sollicitudin purus magna
                enim at. Dui donec et egestas sit. Sem vel turpis vulputate quam
                pharetra id interdum et. Morbi aliquet turpis massa curabitur
                malesuada et sit. Bibendum adipiscing dignissim at ornare velit
                lacus molestie.
              </p>
            </div>
          </div>
          <div className={`${styles.default.messageCard}`}>
            <div className={`${styles.default.messageCardProfile}`}>
              <img src={profile} alt='Profile' />
            </div>
            <div className={`${styles.default.messageCardMessageContent}`}>
              <div className={`${styles.default.messageCardMessageHeader}`}>
                <p className={`${styles.default.messageCardMessageSenderName}`}>
                  John Smith
                </p>
                <p className={`${styles.default.messageCardMessageDate}`}>
                  12 January 2023, 4:30 pm
                </p>
              </div>
              <img
                className={`${styles.default.messageCardMessageImage}`}
                src={message2}
                alt='Message'
              />
            </div>
          </div>
        </div>
        <div className={`${styles.default.sendReplyContainer}`}>
          <p className={`${styles.default.sendReplyTitle}`}>{<MessageBox />}</p>
        </div>
      </div>
      <div className={`${styles.default.ticketDetailsContainer}`}>
        <p className={`${styles.default.ticketTimeLineTitle}`}>
          Timeline/Interactions
        </p>
        <div
          className={`${styles.default.ticketTimeLineContainer} ticket-timeline-container`}
        >
          <Timeline
            items={[
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>Ticket Raised</b>
                    </p>
                    <p>13 January 2023, 4:30 pm</p>
                  </>
                ),
              },
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>Assigned Support Assistance</b>
                    </p>
                    <p>13 January 2023, 4:30 pm</p>
                  </>
                ),
              },
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>First Interaction with Michael Brooks</b>
                    </p>
                    <p>13 January 2023, 4:30 pm</p>
                  </>
                ),
              },
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>Reply From Michael Brooks</b>
                    </p>
                    <p>13 January 2023, 4:30 pm</p>
                  </>
                ),
              },
              {
                dot: <BsCircleFill />,
                children: (
                  <>
                    <p>
                      <b>Closed the ticket</b>
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
