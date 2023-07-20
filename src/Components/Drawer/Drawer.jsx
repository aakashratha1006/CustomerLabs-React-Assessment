import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import { Header } from '../Header/Header';
import { SegmentComponent } from './SegmentComponent';

export const DrawerComponent = ({ open, onClose }) => {

  const StyledDrawer = styled(Drawer)(() => ({
    width: '35%',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: '35%',
      boxSizing: 'border-box',
    },
  }));

  return (
    <StyledDrawer anchor="right" open={open} onClose={onClose}>
      <Header text="Saving Segment"/>
      <SegmentComponent cancelHandler={onClose} />
    </StyledDrawer>
  );
};
