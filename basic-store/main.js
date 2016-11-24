import dispatcher from './dispatcher';
import homePageStore from './stores/homePage';

console.log(`user: "${homePageStore.state.user}"`);
console.log(`Header Entries: "${homePageStore.state.headerEntries}"`);
console.log(`Page Content: "${homePageStore.state.pageContent}"`);

homePageStore.on('update', (state) => {
  console.log('> user', state.user);
  console.log('> Header Entries', state.headerEntries);
  console.log('> Page Content', state.pageContent);
});

dispatcher.dispatch({
  type: 'HOME_PAGE_LOADED',
  payload: {
    user: 'Einstein',
    headerEntries: [
      'Menu',
      'Courses',
      'Instructors',
      'About'
    ],
    pageContent: 'Welcome to the store'
  }
});

console.log(`user: "${homePageStore.state.user}"`);
console.log(`Header Entries: "${homePageStore.state.headerEntries}"`);
console.log(`Page Content: "${homePageStore.state.pageContent}"`);
