import Home from '../controllers/home.controller';
import APIs from '../controllers/api/api.controller';
import Anime from '../controllers/anime/anime.controller';
import Manga from '../controllers/manga/manga.controller';
import Tools from "../controllers/tools/tools.controller";
import Users from '../controllers/users/users.controller';
import Errors from '../controllers/errors/error.controller';
import Downloads from '../controllers/download/download.controller';

export default class Pathes {
  public homeController = new Home();
  public APIsController = new APIs();
  public animeController = new Anime();
  public mangaController = new Manga();
  public toolsController = new Tools();
  public usersController = new Users();
  public errorsController = new Errors();
  public downloadsController = new Downloads();
}