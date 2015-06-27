# howto

## about

the purpose of this document is to allow others to reproduce this repository from scratch.

## prerequisites

1. working node installation

   when i run `node --version` it prints `v0.12.4`

   see: https://nodejs.org/

2. working grunt-cli installation

   when i run `grunt --version` it prints `grunt-cli v0.1.13` and `grunt v0.4.5`

   see: http://gruntjs.com/

3. working bower installation

   when i run `bower --version` it prints `1.4.1`

   see: http://bower.io/

## tools

this repository was created on my mac book using vim and [SPF13](git@github.com:spf13/spf13-vim.git)

for spf13 to work i needed to replace the system vim with a custom compilation from howebrew, something along the lines of:

   `brew install macvim --with-cscope --with-lua --override-system-vim`

i built node from source and installed it into `/opt/`

## steps

### step 0: create project folder

```bash

    mkdir bootstragular
    cd bootstragular
    git init
    vi .gitignore
    vi README.md
    vi LICENSE.md
    git add -A
    git commit

```

### step 1: serve static content

```bash

    npm install --save-dev hapi
    mkdir build
    vi index.js
    git add -A
    git commit

```

start the web server by running `node .` and kill it with ctrl-c

### step 2: copy public content into the build directory

```bash

    npm install --save-dev grunt grunt-contrib-copy
    mkdir public
    vi public/index.html
    vi Gruntfile.js
    grunt
    git add -A
    git commit

```

### step 3: bootstrap with bower

```bash

    bower init
    bower install --save-dev bootstrap
    mkdir less
    vi less/theme.less
    npm install --save-dev grunt-contrib-less
    vi Gruntfile.js
    grunt
    git add -A
    git commit

```

### step 4: angular with bower

```bash

    bower install --save-dev angular
    mkdir -p app app/controllers app/models app/views
    vi app/controllers/home.js
    vi app/views/home.html
    npm install --save-dev grunt-contrib-concat
    vi Gruntfile.js
    grunt
    git add -A
    git commit

```

