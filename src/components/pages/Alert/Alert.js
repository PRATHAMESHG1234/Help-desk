import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal } from 'antd';
import {
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const Alert = ({ alerts }) => {
  console.log('Current state:', alerts); // Log the current state to console

  return (
    <Modal
      visible={alerts.length > 0}
      footer={null}
      onCancel={() => console.log('onCancel')}
      zIndex={10000}
    >
      {alerts.map((alert) => (
        <div key={alert.id}>
          {alert.alertType === 'success' ? (
            <CheckCircleOutlined style={{ color: alert.color }} />
          ) : (
            <ExclamationCircleOutlined style={{ color: alert.color }} />
          )}
          <span style={{ marginLeft: 8 }}>{alert.msg}</span>
        </div>
      ))}
    </Modal>
  );
};

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
