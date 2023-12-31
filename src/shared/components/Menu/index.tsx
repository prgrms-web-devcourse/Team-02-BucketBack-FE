import { IconButton, Menu, MenuButton, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { CommonIcon } from '@/shared/components';

interface CommonMenuProps {
  type: 'update' | 'logout' | 'create';
  iconSize?: `${number}rem`;
  fontSize?: `${number}rem`;
  onUpdate?: () => void;
  onDelete: () => void;
  onLogout?: () => void;
  onCreate?: () => void;
}

const CommonMenu = ({
  type,
  iconSize = '1.25rem',
  fontSize = '1rem',
  onUpdate,
  onDelete,
  onLogout,
  onCreate,
}: CommonMenuProps) => {
  const handleClick = (onEvent?: () => void) => {
    onEvent && onEvent();
  };

  const menus = {
    update: <MenuItem onClick={() => handleClick(onUpdate)}>수정</MenuItem>,
    logout: <MenuItem onClick={() => handleClick(onLogout)}>로그아웃</MenuItem>,
    create: <MenuItem onClick={() => handleClick(onCreate)}>생성</MenuItem>,
  };

  return (
    <Menu autoSelect={false}>
      <MenuButton
        as={IconButton}
        display="flex"
        fontSize={iconSize}
        icon={<CommonIcon type="ellipsis" />}
        variant="unstyled"
      />
      <MenuList p="0" minW="0" w="6rem" fontSize={fontSize}>
        {menus[type]}
        <MenuDivider m="0" />
        <MenuItem onClick={onDelete}>{type === 'logout' ? '탈퇴' : '삭제'}</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CommonMenu;
