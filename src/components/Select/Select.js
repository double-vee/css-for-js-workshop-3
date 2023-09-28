import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Container>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
      <VisibleWrapper>
        {displayedValue}
        <IconWrapper>
          <Icon id="chevron-down" strokeWidth={2} size={16} />
        </IconWrapper>
      </VisibleWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: max-content;
  position: relative;
`;

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  opacity: 0;
`;

const VisibleWrapper = styled.div`
  border-radius: 8px;
  padding: 12px 48px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};

  ${SelectWrapper}:focus + & {
    outline: 2px solid #000;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${SelectWrapper}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  width: 16px;
  height: 16px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 12px;
  margin: auto;
  pointer-events: none;
`;

export default Select;
