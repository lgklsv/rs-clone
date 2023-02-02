import { createElem } from 'src/utils/create-element';
import styles from './ThemeSwitcher.module.scss';

export const renderThemeSwitcher = (): HTMLElement => {
  const themeSwitcher: HTMLElement = createElem('div', styles['theme-switcher']);

  const lightBtn: HTMLElement = createElem('button', 'theme-switcher__btn');
  lightBtn.dataset.theme = 'light';
  const sunIcon: HTMLElement = createElem('div', 'theme-switcher__icon');
  sunIcon.classList.add('sun-icon');
  const lightBtnText: HTMLElement = createElem('span', 'theme-switcher__text');
  lightBtnText.innerHTML = 'Светлая';

  lightBtn.append(sunIcon, lightBtnText);

  const darkBtn: HTMLElement = createElem('button', 'theme-switcher__btn');
  darkBtn.dataset.theme = 'dark';
  darkBtn.classList.add('theme-switcher__btn_active');
  const moonIcon: HTMLElement = createElem('div', 'theme-switcher__icon');
  moonIcon.classList.add('moon-icon');
  const darkBtnText: HTMLElement = createElem('span', 'theme-switcher__text');
  darkBtnText.innerHTML = 'Темная';

  darkBtn.append(moonIcon, darkBtnText);

  themeSwitcher.append(lightBtn, darkBtn);

  return themeSwitcher;
};
