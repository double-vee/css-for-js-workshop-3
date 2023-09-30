import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--borderSize': '1px',
    '--fontSize': `${14 / 16}rem`,
    '--iconSize': '16px',
    '--paddingBlock': `${3 / 16}rem`,
    '--paddingLeft': `${24 / 16}rem`,
  },
  large: {
    '--borderSize': '2px',
    '--fontSize': `${18 / 16}rem`,
    '--iconSize': '24px',
    '--paddingBlock': `${5 / 16}rem`,
    '--paddingLeft': `${36 / 16}rem`,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Label htmlFor="textinput" style={styles} width={width}>
      <IconWrapper style={styles}>
        <Icon
          id={icon}
          size={size === 'small' ? 16 : 24}
          strokeWidth={size === 'small' ? 1 : 2}
        />
      </IconWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input id="textinput" placeholder={placeholder} style={styles}></Input>
    </Label>
  );
};

const Label = styled.label`
  display: block;
  position: relative;
  width: ${(p) => p.width}px;
  color: ${COLORS.gray700};
  font-size: var(--fontSize);

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  height: var(--iconSize);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;

const Input = styled.input`
  width: 100%;
  padding-block: var(--paddingBlock);
  padding-left: var(--paddingLeft);
  border: none;
  border-bottom: var(--borderSize) solid ${COLORS.black};
  color: inherit;
  font-size: inherit;
  font-weight: 700;
  outline-offset: 2px;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

export default IconInput;
