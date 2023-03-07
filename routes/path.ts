import Home from '../controllers/home.controller';
import APIs from '../controllers/api/api.controller';
import Anime from '../controllers/anime/anime.controller';
import Manga from '../controllers/manga/manga.controller';
import Tools from "../controllers/tools/tools.controller";
import Users from '../controllers/users/users.controller';
import Errors from '../controllers/errors/error.controller';
import Downloads from '../controllers/download/download.controller';

export default class Pathes {
  public homeController: Home = new Home();
  public APIsController: APIs = new APIs();
  public animeController: Anime = new Anime();
  public mangaController: Manga = new Manga();
  public toolsController: Tools = new Tools();
  public usersController: Users = new Users();
  public errorsController: Errors = new Errors();
  public downloadsController: Downloads = new Downloads();
}