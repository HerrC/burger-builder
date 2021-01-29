# Tag #1

Start with 'create-react-app'
npm run eject

Notwendig für die CSS-classes
Config config\webpack.config.js: Hinzufügen von localIdentName.
    {
        loader: require.resolve('css-loader'),
        options: {
          modules: {
            localIdentName: '[name]__[local]__[hash:base64:5]'
          }
        }
    },

Auxiliary is the same as React.Fragement: Kann beides genutzt werden.


CSS Classes eingebaut (Layout.css): Einfach ein .Content mit css content
und dann importieren unter 
    import classes from '..path..';
    <main className="classes.Content">