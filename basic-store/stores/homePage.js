import dispatcher from '../dispatcher';

class HomePageStore {
  constructor() {
    this.state = {
      user: '',
      headerEntries: [],
      pageContent: ''
    };

    dispatcher.register((e) => {
      switch(e.type) {
        case 'HOME_PAGE_LOADED':
          Object.assign(this.state, e.payload);
          break;
      }
    });
  }
}

export default new HomePageStore();
