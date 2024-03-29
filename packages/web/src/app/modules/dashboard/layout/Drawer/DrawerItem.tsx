import styled from '@emotion/styled';
import { Stack } from '@lib/ui';
import { Text } from '@mantine/core';
import { Link } from '@tanstack/react-location';
import { useDrawer } from './DrawerContext';

interface DrawerItemProps {
  to: string;
  isActive?: boolean;
  icon: React.ReactNode;
  label: string;
}

const DrawerItemContainer = styled(Stack)<{ isActive?: boolean }>(({ isActive, theme }) => ({
  position: 'relative',
  backgroundColor: isActive
    ? theme.colorScheme === 'dark'
      ? theme.colors.dark[5]
      : theme.colors.gray[1]
    : 'transparent',
  borderRadius: theme.radius.md,
  padding: '8px 16px',
  color: isActive && theme.colorScheme === 'dark' ? theme.white : 'inherit',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
  }
  // '&::before': {
  //   content: '""',
  //   position: 'absolute',
  //   left: 0,
  //   width: '1px',
  //   backgroundColor: 'green'
  // }
}));

export function DrawerItem({ to, icon, label }: DrawerItemProps) {
  const { toggle } = useDrawer();

  return (
    <Link to={to} style={{ color: 'inherit', textDecoration: 'none' }}>
      {({ isActive }) => (
        <DrawerItemContainer onClick={toggle} direction="row" isActive={isActive} alignItems="center">
          {icon}
          <Text weight={isActive ? 600 : 400} size="sm">
            {label}
          </Text>
        </DrawerItemContainer>
      )}
    </Link>
  );
}
