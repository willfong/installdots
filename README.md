# installdots.sh

This application helps set up a workstation with your dotfiles. 


## How it works

It will clone your `dotfiles` repo into a home directory `.dotfiles` and run the `install.sh` located within your repo. No magic, just automation. You write your own magic.

You can find an example here: https://github.com/willfong/dotfiles


## How to use

```
curl installdots.sh/<GitHub Username> | sh
```


## Requirements
- Git
- A GitHub repository called `dotfiles`
- An `install.sh` shell script in your `dotfiles` repo


## Extensions

Third party shortcuts to help install tooling

- `/choco` - Windows - https://chocolatey.org/install
- `/brew` - MacOS - https://brew.sh/


## Contributions

Welcomed!