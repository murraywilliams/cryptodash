import styled from 'styled-components';
import {
  subtleBoxShadow,
  lightBlueBackground,
  greenBoxShadow,
  redBoxShadow
} from './Styles';

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightBlueBackground}
padding: 10px;
`;

export const SelectedTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
