import axios from 'axios';
import urls from './urls';

export class Categories {
  public static getCategories() {
    return axios.get(urls.CATEGORIES);
  }
}
