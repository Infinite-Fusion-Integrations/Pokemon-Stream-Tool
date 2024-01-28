<p align="center">
  <img src="https://github.com/Readek/Pokemon-Stream-Tool/blob/main/Github%20Resources/Preview%20GUI.png" alt="GUI Preview">
</p>

**This repo is under active WIP! Things are usable, although not consumer friendly.**
<h1 align="center">Pokemon Stream Tool</h1>


**Pokemon Stream Tool** is a **fully open-source**, **crossplatform** Electron app for Windows and Linux. Streamers on any platform can use this tool to create dynamic overlays, which show game information to viewers in convenient and interesting ways!

You can download it [right here, right now](https://github.com/Readek/Pokemon-Stream-Tool/archive/refs/heads/master.zip) and modify the tool to your heart's content. All scripts can be found outside of executable, so modifying stuff to your liking is ez.

The app can **automatically grab data** with current support for Gen 6 games running on [Citra](https://citra-emu.org/). Currently supports updating player party, with future plans to automate more things.

The **Back-end GUI** supports modifying all information manually. the GUI can also be **accessed remotely** so multiple people on different devices can manage the overlay info at the same time.

Some of the elements that can be used in overlays include:
- Your active Pokemon party (species, nickname, lvl, health...)
- Your trainer stats (badges, caught Pokemon list, useless stats...)
- Stats for the current wild encounter

## Getting started

To get started, you can [download this repository](https://github.com/Readek/Pokemon-Stream-Tool/archive/refs/heads/master.zip).  You will also need to [download the sprites](#getting-the-pokémon-sprites) as they are not included.

To start the GUI, open the Stream Tool folder and run *Poke Stream Tool.exe* on Windows or *Poke Stream Tool.AppImage* on Linux.

To use the overlays, create a new Browser source in OBS and check "local file". Navigate to the folder you want inside **Stream Tool\Overlays** and select the corresponding .html file.

Instructions for remote GUI are not yet available.

## Overlays
For the moment, the tool has the following overlays:

- "Waiting to start" (cycles through Pokemon you've caught):

  <img width="720 px" src="https://github.com/Infinite-Fusion-Integrations/Pokemon-Stream-Tool/blob/main/Github%20Resources/Preview%20Overlay%20Intro.png" alt="Intro Overlay Preview">
  

- Black and White 2:

  <img width="720 px" src="https://github.com/Readek/Pokemon-Stream-Tool/blob/main/Github%20Resources/Preview%20Overlay%20BnW2.jpg" alt="BW2 Overlay Preview">
  

- X and Y:

  <img width="720 px" src="https://github.com/Readek/Pokemon-Stream-Tool/blob/main/Github%20Resources/Preview%20Overlay%20XY.jpg" alt="XY Overlay Preview">
 

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
