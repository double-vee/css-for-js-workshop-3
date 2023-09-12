/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--padding': '0px',
    '--borderRadius': '4px',
  },
  medium: {
    '--height': '12px',
    '--padding': '0px',
    '--borderRadius': '4px',
  },
  large: {
    '--height': '16px',
    '--padding': '4px',
    '--borderRadius': '8px',
  },
};

const ProgressBar = ({ value, size }) => {
  const style = SIZES[size];

  return (
    <Wrapper
      role="progressbar"
      aria-label="loading progress"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={style}
    >
      <Trimmer>
        <InnerBar value={value} style={style}>
          <VisuallyHidden>{value}%</VisuallyHidden>
        </InnerBar>
      </Trimmer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: var(--padding);
  border-radius: var(--borderRadius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

const Trimmer = styled.div`
  border-radius: 4px;
  overflow: hidden;
`;

const InnerBar = styled.div`
  height: var(--height);
  width: ${(props) => props.value + '%'};
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
