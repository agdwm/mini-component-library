import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';



const Select = ({ id, label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(displayedValue)
  return (
    <Wrapper>
      <NativeSelect
        id={id}
        label={label}
        value={value}
        onChange={onChange}
      >
        {children}
      </NativeSelect>
      <Presentational>
        {displayedValue}
        <IconWrapper style={{ '--size': 24 + 'px' }}>
          <Icon id="chevron-down" strokeWidth={2} size={24} />
        </IconWrapper>
      </Presentational>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  inline-size: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: black;
  }
`

const NativeSelect = styled.select`
  appearance: none;
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 100%;
  block-size: 100%;
  opacity: 0;
  cursor: pointer;
`

const Presentational = styled.div`
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  border: 2px solid transparent;
  border-radius: 8px;
  color: inherit;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`

const IconWrapper = styled.div`
  position: absolute;
  color: inherit;
  /* For Optical adjustment */
  inset-block-start: calc(50% + 1px);
  inset-inline-end: 14px;
  transform: translateY(-50%);
  pointer-events: none;
`


export default Select;
