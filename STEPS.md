# Tag #1

Start with 'create-react-app'
npm run eject
Config config\webpack.config.js: Hinzufügen von localIdentName.
    {
        loader: require.resolve('css-loader'),
        options: {
          modules: {
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        }
    },

