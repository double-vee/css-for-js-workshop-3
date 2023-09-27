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
      <IconWrapper>
        <Icon id="chevron-down" strokeWidth={2} size={12} />
      </IconWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const SelectWrapper = styled.select`
  appearance: none;
  padding: 12px 46px 12px 16px;
  border: none;
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  color: inherit;
`;

const IconWrapper = styled.div`
  width: 12px;
  height: 12px;
  position: absolute;
  right: 13px;
  top: 0;
  bottom: 0;
  margin: auto;
  pointer-events: none;
`;

export default Select;
