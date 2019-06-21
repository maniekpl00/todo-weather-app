import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import messages from './messages';
import Modal from '../../components/UI/Modal';
import BurgerIcon from '../../components/UI/BurgerIcon';
import MenuWrapper from '../../components/Menu/MenuWrapper';
import MenuDrawer from '../../components/Menu/MenuDrawer';
import LanguageSelectHandler from '../LanguageSelectHandler';
import ThemeSelectHandler from '../ThemeSelectHandler';
import MenuSettingName from '../../components/Menu/MenuSettingName';

class MenuContainer extends Component {
  state = {
    showMenu: false,
  };

  toggleMenuHandler = () => {
    this.setState(prevState => ({ showMenu: !prevState.showMenu }));
  };

  render() {
    const { showMenu } = this.state;
    const { intl } = this.props;

    return (
      <MenuWrapper>
        <Modal show={showMenu} displayOnBiggerScreen>
          <MenuDrawer>
            <MenuSettingName name={intl.formatMessage({ ...messages.settings })} />
            <LanguageSelectHandler />
            <ThemeSelectHandler />
          </MenuDrawer>
        </Modal>
        <BurgerIcon open={showMenu} clicked={this.toggleMenuHandler} />
      </MenuWrapper>
    );
  }
}

export default injectIntl(MenuContainer);
