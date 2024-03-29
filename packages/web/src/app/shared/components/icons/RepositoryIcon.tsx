import { Icon, IconProps } from '@lib/ui';

export function RepositoryIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20">
        <g fill="none">
          <path
            d="M6 5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5zm1 0v1h6V5H7zM4 4v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2zm10-1a1 1 0 0 1 1 1v11H5V4a1 1 0 0 1 1-1h8z"
            fill="currentColor"
          ></path>
        </g>
      </svg>
    </Icon>
  );
}
