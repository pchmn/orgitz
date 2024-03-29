import { AppLogo } from '@app/shared/components';
import { Stack, ToggleColorScheme } from '@lib/ui';
import { Header as MantineHeader, MantineTheme } from '@mantine/core';
import * as React from 'react';

interface HeaderProps {
  theme: MantineTheme;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

export function Header({ theme, left, right }: HeaderProps) {
  return (
    <MantineHeader
      height={70}
      p="md"
      style={{
        position: 'sticky',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[0]
      }}
    >
      <Stack direction="row" alignItems="center" fullHeight growChildren>
        {left}
        <Stack direction="row" justifyContent="space-between" fullHeight alignItems="center">
          <AppLogo direction="row" size="sm" />
          <ToggleColorScheme />
        </Stack>
        {right}
      </Stack>
    </MantineHeader>
  );
}
