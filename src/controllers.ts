import HOME from './home/controller/home.controller';
import ANIME from './anime/controller/anime.controller';
import MANGA from './manga/controller/manga.controller';
import CATS from './cats/controller/cats.controller';
import ERRORS from './errors/controller/error.controller';

export default class Controllers {
  public home = new HOME();
  public anime = new ANIME();
  public manga = new MANGA();
  public cats = new CATS();
  public errors = new ERRORS();

}
