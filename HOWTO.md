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

* SHA: c9b5a3346c6a9d16e2d961327332d525c187073c

### step 1: serve static content

```bash

    npm install --save-dev hapi
    mkdir build
    vi index.js
    git add -A
    git commit

```

start the web server by running `node .` and kill it with ctrl-c

* SHA: bb3e521e179973d796aabd30b46a045c8760ed6b

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

* SHA: 16990599d88df783ac32a3b2427788cd8e142ce1

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

* SHA: b0b4b399ab256a79f2abf4324cbcd4401156d53e

### step 4: angular with bower

```bash

    bower install --save-dev angular angular-route
    mkdir -p app app/controllers app/views
    vi app/app.js
    vi app/app.routes.js
    vi app/controllers/home.js
    vi app/views/home.html
    npm install --save-dev grunt-contrib-concat grunt-angular-templates
    vi Gruntfile.js
    grunt
    git add -A
    git commit

```

* SHA: 714661eff8690b6526c59abce44e7309fbe1b3c1

### step 5: preprocess, uglify and otherwise create dist artifacts

```bash

    npm install --save-dev less-plugin-autoprefix less-plugin-clean-css grunt-contrib-uglify grunt-gitinfo grunt-preprocess
    vi Gruntfile.js
    vi index.js
    vi public/index.html
    vi app/views/home.html
    grunt
    git add -A
    git commit

```

* SHA: edc6bba844a7803f5715d177aadda90a02ce9bc0
* SHA: f9b1a4b20ec5a0b37d3b6e3afe8827b3864669d1
* SHA: 7d7fbb86f9716507e2329423034548eee69f0c80


