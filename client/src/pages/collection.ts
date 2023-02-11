import { renderCollection } from 'src/components/CollectionPage/collectionPage';
import { genresData } from 'src/components/MainPage/mockData';
import { renderApp } from '../components/App/App';

export const collection = (data: ListItems): void => {
  const collectionData = data.item;
  const listData = genresData.find((el) => el.url === data.pathname);
  renderApp(() => renderCollection(collectionData.docs, listData ? listData.displayedTitle : 'Коллекция'));
};