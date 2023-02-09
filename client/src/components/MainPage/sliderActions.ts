import { route } from 'src/router/route';
import { createSlideDown } from './components/Slider/SlideDownWindow/SlideDownWindow';

export const addListenerSlideDown = (slider: HTMLElement): HTMLElement => {
  const slideDown: HTMLElement = createSlideDown();
  slider.append(slideDown);
  slider.addEventListener('click', (event: Event): void => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const currentTarget = event.currentTarget as HTMLElement;

    if (target.classList.contains('sliderItem__image')) {
      const allSliders = document.querySelectorAll('.slider');
      allSliders.forEach(
        async (elem): Promise<void> => elem.querySelector('.slideDown')?.classList.remove('show-slidedown')
      );
      currentTarget.querySelector('.slideDown')?.classList.add('show-slidedown');
      const item = target.closest('.sliderItem') as HTMLElement;
      currentTarget.querySelector('.slideDown')?.dispatchEvent(
        new CustomEvent('showFilmInfo', {
          detail: { id: item.dataset.id },
        })
      );

      setTimeout(() => {
        const slide = target.closest('.slider') as HTMLElement;
        slide.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  });

  return slider;
};

export const addListenerCollection = (slider: HTMLElement): HTMLElement => {
  slider.addEventListener('click', async (event: Event): Promise<void> => {
    event.preventDefault();
    event.stopPropagation();
    const target = event.target as HTMLElement;

    if (target.classList.contains('sliderItem__image')) {
      route('/collection');
    }
  });

  return slider;
};
