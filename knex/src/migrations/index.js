import characters from './characters.js'

const runMigrations = async () => {
  await characters()
}

export default runMigrations