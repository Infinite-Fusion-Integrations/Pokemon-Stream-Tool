<p align="center">

  <img src="https://github.com/Readek/Pokemon-Stream-Tool/blob/main/Github%20Resources/Preview%20GUI.png" alt="GUI Preview">
  
</p>

<h1 align="center">Pokemon Stream Tool</h1>

This repo is under active WIP! But for now, feature list:

- Electron, crossplatform GUI.
- Manage your active pokemon party (species, nickname, lvl...)
- Manage your player's stats (medals, useless stats...)
- **Remote GUI** so multiple people can manage the overlay info at the same time.
- All info is inputted manually, with plans to automate things.
- All scripts outside of executable, so modifying stuff to your liking is ez.
- For the moment, focusing on Gen5.
- Current Overlay looks like this:

<p align="center">

  <img src="https://github.com/Readek/Pokemon-Stream-Tool/blob/main/Github%20Resources/Preview%20Overlay%20BnW2.jpg" alt="GUI Preview">
  
</p>

## Getting the Pokémon sprites

The overlay needs the gen 5 sprites from Pokémon Showdown, which aren't included in this repo. **The project won't work without these.** You can download them from its [own repository](https://gitlab.com/pokemon-stream-tool/pokemon-stream-tool-assets). More info about assets can be found there.

The directory structure after unzipping or `wget`ting should be:
```text
Stream Tool/Resources/Assets
├── Gender F.png
├── Gender M.png
├── Gender N.png
├── Gym Badges
│   ├── [files]
├── None.png
├── Pokemon
│   ├── sprites
│   │   ├── gen5
│   │   │   ├── [files]
│   │   ├── gen5ani
│   │   │   ├── [files]
│   │   ├── gen5ani-shiny
│   │   │   ├── [files]
│   │   ├── gen5-shiny
│   │   │   ├── [files]
│   │   ├── pokemonicons-sheet.png
├── Shiny Icon.png
├── Type Icons
│   ├── [files]
└── wget_url_list.txt
```
It's fine if there's more files or folders.
