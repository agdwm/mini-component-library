/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--borderRadius": 4 + "px",
    "--blockSize": 8 + "px",
  },
  medium: {
    "--borderRadius": 4 + "px",
    "--blockSize": 12 + "px",
  },
  large: {
    "--borderRadius": 8 + "px",
    "--blockSize": 24 + "px",
  }
};

const ProgressBarBase = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  inline-size: 100%;
  max-inline-size: 370px;
  block-size: var(--blockSize);
  position: relative;
  border-radius: var(--borderRadius);
  overflow: clip;
`

const Bar = styled.div`
  position: absolute;
  background-color: ${COLORS.primary};
  block-size: 100%;
  max-inline-size: calc(100% - 6px);
  max-block-size: 16px;
  margin-block-start: auto;
  margin-block-end: auto;
  inset-block-start: 0;
  inset-block-end: 0;
  inset-inline-start: 3px;
  border-start-start-radius: var(--borderRadius);
  border-start-end-radius: var(--borderRadius);
`
const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size]

  const BarStyles = {
    inlineSize: value + '%',
    borderEndStartRadius: value === 100 && SIZES[size]['--borderRadius'],
    borderEndEndRadius: value === 100 && SIZES[size]['--borderRadius'],
  }

  return (
    <ProgressBarBase role="progressbar" aria-labelledby="loadinglabel" aria-valuenow={value} style={styles}>
      <Bar style={BarStyles} size={size}>
      <VisuallyHidden>
        {value}
      </VisuallyHidden>
      </Bar>
    </ProgressBarBase>
  )
};

export default ProgressBar;
