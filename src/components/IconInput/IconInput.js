import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const STYLES = {
  small: {
    'borderWidth': '1',
    'fontSize': '14',
    'iconSize': '16',
    'minHeight': '24',
    'paddingBlock': '4',
    'paddingInline': '26',
  },
  large: {
    'borderWidth': '2',
    'fontSize': '18',
    'iconSize': '24',
    'minHeight': '36',
    'paddingBlock': '8',
    'paddingInline': '36',
  }
}
const IconInput = ({
  icon,
  label,
  placeholder,
  size,
  width = 250,
}) => {

  const styles = STYLES[size]

  if(!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`)
  }

  return (
    <Wrapper style={{
      '--width': width +'px',
      '--min-height': styles.minHeight + 'px',
      '--font-size': styles.fontSize + 'px',
      '--border-width': styles.borderWidth + 'px',
      }}>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          '--padding-inline':styles.paddingInline + 'px',
          '--padding-block': styles.paddingBlock + 'px',
        }}/>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{
        '--size': 24 + 'px'
      }}>
        <Icon
          id={icon}
          strokeWidth={2}
          size={styles.iconSize}
          role="presentation"
          aria-hidden="true"
        />
      </IconWrapper>
    </Wrapper>
  )
};

const Input = styled.input`
  color: ${COLORS.gray700};
  font-weight: 700;
  height: 100%;
  max-width: 100%;
  padding-inline: var(--padding-inline);
  padding-block: var(--padding-block);
  border: none;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${COLORS.black};
  }
`

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
  height: 100%;
  min-height: var(--min-height);
  font-size: var(--font-size);
  border-bottom: var(--border-width) solid ${COLORS.black};
  display: inline-block;

  &:focus-within {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 2px;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  color: ${COLORS.gray700};
  pointer-events: none;

  ${Input}:hover ~ & {
    color: ${COLORS.black};
  }
`

export default IconInput;
