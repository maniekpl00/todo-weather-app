import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import BurgerIcon from '../../components/UI/BurgerIcon/BurgerIcon';
import MenuWrapper from '../../components/Menu/MenuWrapper/MenuWrapper';
import MenuDrawer from '../../components/Menu/MenuDrawer/MenuDrawer';
import LanguageSelectHandler from '../LanguageSelectHandler/LanguageSelectHandler';
import ThemeSelectHandler from '../ThemeSelectHandler/ThemeSelectHandler';

class MenuContainer extends Component {
  state = {
    showMenu: false,
  };

  toggleMenuHandler = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  };

  render() {
    const { showMenu } = this.state;

    return (
      <MenuWrapper>
        <Modal show={showMenu}>
          <MenuDrawer>
            <LanguageSelectHandler />
            <ThemeSelectHandler />
          </MenuDrawer>
        </Modal>
        <BurgerIcon open={showMenu} clicked={this.toggleMenuHandler} />
      </MenuWrapper>
    );
  }
}

export default MenuContainer;
