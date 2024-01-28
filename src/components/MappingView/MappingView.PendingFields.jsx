import React, { useState } from 'react';
import {
  EuiAccordion,
  EuiPanel,
  EuiButton,
  EuiSpacer,
} from '@elastic/eui';

const PendingFields = () => {

  const [trigger, setTrigger] = useState('closed');

  const handleButtonClick = () => {
    setTrigger('open')
  }

  const onToggle = (isOpen) => {
    const newState = isOpen ? 'open' : 'closed';
    setTrigger(newState)
  }

  const ActionButton = () => (
    <EuiButton
      iconSide="left"
      iconType="plusInCircle"
      onClick={() => handleButtonClick()}
      size="s">
      Add field
    </EuiButton>
  )

  return (
    <EuiPanel color="subdued" paddingSize="s">
      <EuiAccordion
        id={"add_field_accordion"}
        buttonContent="Add fields to index"
        forceState={trigger}
        onToggle={onToggle}
      >
        <EuiSpacer size="s" />
        <EuiPanel color="plain" paddingSize="m">
          Pending field / Add mapping flow
        </EuiPanel>
      </EuiAccordion>
    </EuiPanel>
  )
}

export { PendingFields }
