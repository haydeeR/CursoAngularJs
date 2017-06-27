import { MenuProyectPage } from './app.po';

describe('menu-proyect App', function() {
  let page: MenuProyectPage;

  beforeEach(() => {
    page = new MenuProyectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
