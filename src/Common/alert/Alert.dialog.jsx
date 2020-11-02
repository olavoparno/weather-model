import React, {useCallback, useMemo} from 'react';
import shallow from 'zustand/shallow';
import {Modal, Fade} from '@material-ui/core';
import {usePlatformStore} from 'Common/platform/Platform.usePlatformStore';
import {AlertComponent} from 'Common/alert/Alert.component';

export function AlertDialog() {
  const {alertOptions, clearAlert} = usePlatformStore(
    (state) => ({
      alertOptions: state.alertOptions,
      clearAlert: state.clearAlert,
    }),
    shallow
  );

  const handleClose = useCallback(() => clearAlert(), [clearAlert]);

  return useMemo(() => {
    return (
      <Modal hideBackdrop open={alertOptions} onClose={handleClose} closeAfterTransition>
        <Fade in={alertOptions !== null}>
          <AlertComponent closeModal={handleClose} {...alertOptions} />
        </Fade>
      </Modal>
    );
  }, [alertOptions, handleClose]);
}
