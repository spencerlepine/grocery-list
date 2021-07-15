import React from 'react';
import { shallow } from 'enzyme';
import Navbar from './Navbar';
import OpenCartBtn from '../OpenCartBtn/OpenCartBtn';
import HomeLink from '../HomeLink/HomeLink';
import MenuButton from '../MenuButton/MenuButton';

describe('Navbar component', () => {
  it('should render correctly with no errors', () => {
    const component = shallow(<Navbar />);
    expect(component).toBeTruthy();
  });

  it('should render OpenCartBtn component', () => {
    const component = shallow(<Navbar />);

    const cartButton = component.find(OpenCartBtn)
    expect(cartButton.exists()).toBeTruthy();
  });

  it('should render HomeLink component', () => {
    const component = shallow(<Navbar />);

    const logoElem = component.find(HomeLink)
    expect(logoElem.exists()).toBeTruthy();
  });

  it('should render MenuButton component', () => {
    const component = shallow(<Navbar />);

    const menuElem = component.find(MenuButton)
    expect(menuElem.exists()).toBeTruthy();
  });
});