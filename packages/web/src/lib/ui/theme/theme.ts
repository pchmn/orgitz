import { ButtonStylesParams, CSSObject, MantineTheme } from '@mantine/core';
import { CustomColors, Scheme } from './mantine';

export const defaultProps: Record<string, Record<string, unknown>> = {
  Button: {
    radius: 'xl'
  }
};

export const themeStyles: Record<
  string,
  Record<string, CSSObject> | ((theme: MantineTheme, params: never) => Record<string, CSSObject>)
> = {
  Button: (theme, params: ButtonStylesParams) => ({
    filled: {
      color: getOnColor(params.color as CustomColors, theme)
    },
    outline: {
      color: getColor(params.color as CustomColors, theme),
      borderColor: theme.other.schemes[theme.colorScheme].outline
    }
  }),
  ActionIcon: (theme) => ({
    hover: {
      '&:hover': {
        backgroundColor: theme.fn.rgba('#000', theme.colorScheme === 'dark' ? 0.25 : 0.05)
      }
    }
  })
};

function getColor(color: CustomColors = 'primary', theme: MantineTheme): string {
  return theme.other.schemes[theme.colorScheme][color];
}

function getOnColor(color: CustomColors = 'primary', theme: MantineTheme): string {
  return theme.other.schemes[theme.colorScheme][`on${color.charAt(0).toUpperCase()}${color.slice(1)}` as keyof Scheme];
}
