import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import Alert from '@material-ui/lab/Alert';
import {useStyles} from 'Common/alert/Alert.styles';

export function AlertComponent({closeModal, timeout, message, type}) {
  const classes = useStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeout) closeModal();
    }, timeout);

    return () => clearTimeout(timer);
  }, [timeout, closeModal]);

  return (
    <div className={classes.root}>
      <Alert
        data-testid="alert-dialog"
        onClose={() => closeModal()}
        className={classes.alert}
        severity={type}>
        <span data-testid="alert-message">{message}</span>
      </Alert>
    </div>
  );
}

AlertComponent.defaultProps = {
  timeout: 5000,
  message: 'Este é um alerta padrão',
  type: 'warning',
};

AlertComponent.propTypes = {
  closeModal: PropTypes.func.isRequired,
  timeout: PropTypes.number,
  message: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  type: PropTypes.string,
};
