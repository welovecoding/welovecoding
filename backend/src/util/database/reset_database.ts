import {APP_ENV, POSSIBLE_APP_ENVS} from 'config/environment';
/**
 * DROP ALL TABLES AND CREATE THEM AGAIN
 */
import sequelize from 'models';

export default function resetDatabase() {
  // just to make sure we never do this on production
  if (APP_ENV !== POSSIBLE_APP_ENVS.PRODUCTION) {
    console.log('RESETTING DATABASE!');
    return sequelize.sync({force: true});
  }
}
