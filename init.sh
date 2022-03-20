# create src and sass folder
mkdir src && mkdir src/sass

# copy to src folder
mv index.html images design src

# create main.scss file
touch src/sass/main.scss

# create subfolders in sass folder
cd src/sass && mkdir abstracts base pages components

# create files in abstracts folder
cd abstracts && touch _colors.scss _typography.scss _mixins.scss _breakpoints.scss

# create files in base folder
cd .. && cd base && touch _reset.scss _global.scss