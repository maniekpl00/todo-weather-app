import React, { Component } from 'react';
import Modal from '../../components/UI/Modal';
import BurgerIcon from '../../components/UI/BurgerIcon';
import MenuWrapper from '../../components/Menu/MenuWrapper';
import MenuDrawer from '../../components/Menu/MenuDrawer';
import LanguageSelectHandler from '../LanguageSelectHandler';
import ThemeSelectHandler from '../ThemeSelectHandler';

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
