import dispatcher from '../dispatcher';
import { EventEmitter } from 'events';

class HomePageStore extends EventEmitter {
  constructor() {
    super();

    this.state = {
      user: '',
      headerEntries: [],
      pageContent: ''
    };

    dispatcher.register((e) => {
      switch(e.type) {
        case 'HOME_PAGE_LOADED':
          Object.assign(this.state, e.payload);
          this.emit('update', this.state);
          break;
      }
    });
  }
}

export default new HomePageStore();
