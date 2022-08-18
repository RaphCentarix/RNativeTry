/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
 const path = require('path');

 // react-native >= 0.57
 
 const extraNodeModules = {
   'qb-core': path.resolve(__dirname + '/essai/'),
 };
 const watchFolders = [
   path.resolve(__dirname + '/essai/')
 ];
 


module.exports = {
  resolver : 
  {
    extraNodeModules
  },
  watchFolders,
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};
