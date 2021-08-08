# Mass Effect 5e Data
All of the data for the Mass Effect 5e TTRPG

## Structure

### /data
Contains the uncompiled data in markdown that does not need to be internationalized (i.e., translated).

### /docs
Contains the compiled data for use on the ME5e website (n7.world), which are published at https://data.n7.world

### /text
Contains the uncompiled text and phrases in markdown in various languages. Each language has its own directory.

In addition, each language has a `message.js` file, which contains reusable labels and phrases.

### /templates
Contains md templates for creating new content.

### /utility
Contains script for augmenting content and can be ignored. It's mainly hear to preserve the history of how the shape
of the data structures have changed over time.

## compiling

`npm run build`

