import React from 'react';
import { Tabs as MUITabs } from '@mui/material';

import './vertical-tabs-mui.scss';

interface VerticalTabsProps {
    value: number;
    onChange: (value: number) => void;
    children: React.ReactNode
}

export const VerticalTabs = (props: VerticalTabsProps) => {
  const { value, onChange, children } = props;

  return (
    <MUITabs
      orientation="vertical"
      value={value}
      onChange={(e: React.SyntheticEvent, newValue: number) => onChange(newValue)}
    >
      {children}
    </MUITabs>
  );
};
