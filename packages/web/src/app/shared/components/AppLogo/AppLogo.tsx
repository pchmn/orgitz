import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Stack } from '@lib/ui';
import { MantineNumberSize, Title } from '@mantine/core';
import { DynamicLogo } from './DynamicLogo';

// const sizes = {
//   xs: 32,
//   sm: 14,
//   md: 18,
//   lg: 28,
//   xl: 110
// };

const scale = keyframes({
  '0%': {
    transform: 'scale(0)'
  },
  '40% ': {
    transform: 'scale(1.2)'
  },
  '50%': {
    transform: 'scale(1.0)'
  }
});

const pulse = keyframes({
  '0%': {
    transform: 'scale(1.0)'
  },
  '40% ': {
    transform: 'scale(1.1)'
  },
  '50%': {
    transform: 'scale(1.0)'
  }
});

const translate = keyframes({
  '0%': {
    transform: 'translateY(-200%)',
    opacity: 0
  },
  '40% ': {
    transform: 'translateY(25%)',
    opacity: 1
  },
  '50%': {
    transform: 'translateY(0)',
    opacity: 1
  }
});

const Logo = styled(DynamicLogo)<{ animate: number }>(({ animate }) => ({
  animation: animate ? `${scale} 1s ease-in-out forwards, ${pulse} 1s ease infinite` : undefined,
  animationDelay: '0ms, 1.2s'
}));

const AppName = styled(Title)<{ animate: number }>(({ animate }) => ({
  animation: animate ? `${translate} 1s ease-in-out forwards` : undefined,
  margin: '0 !important',
  fontFamily: "'JetBrains Mono', monospace"
}));

interface AppLogoProps {
  direction?: 'row' | 'column';
  size?: MantineNumberSize;
  animate?: boolean;
  onAnimationEnd?: React.AnimationEventHandler<HTMLHeadingElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export function AppLogo({ direction = 'column', size = 'sm', animate = false, onAnimationEnd, onClick }: AppLogoProps) {
  return (
    <Stack direction={direction} alignItems="center" spacing={size} onClick={onClick}>
      <Logo animate={+animate} size={size} />
      <AppName
        animate={+animate}
        order={size === 'sm' ? 3 : 2}
        onAnimationEnd={onAnimationEnd}
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: size === 'xs' ? 18 : 20 }}
      >
        Orgitz
      </AppName>
    </Stack>
  );
}
