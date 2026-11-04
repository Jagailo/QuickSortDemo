# QuickSortDemo

Test task for ITHouse (Minsk, Belarus) about quick sort and visualization.

Deployed project: https://jagailo.github.io/QuickSortDemo/

### Demo: Animation sorting of 2000 items: [imgur gif](https://i.imgur.com/ZDKAnem.gif)

## Project structure

- `index.html` - page markup and controls
- `js/quickSort.js` - quick sort itself, it writes every swap to the history
- `js/logic.js` - input conversion, animation history and animation timer
- `js/drawing.js` - canvas rendering (columns, pivot and current range)
- `js/main.js` - UI handlers (fill, random fill, play/pause/stop, speed slider)
- `css/style.css` - page styles
- `css/fontawesome-all.min.css` + `webfonts/` - self-hosted Font Awesome 5.0.8 (CSS and fonts only, no JS)

## Notes

- Values from the input are read with a regular expression, so both integers and decimals are supported.
- Animation speed `0` means "auto": the delay is picked automatically depending on the array size.

## License

MIT - see [LICENSE](LICENSE).

Bundled third-party assets keep their own licenses: Font Awesome Free 5.0.8 (`css/fontawesome-all.min.css` and `webfonts/`) is licensed under icons CC BY 4.0, fonts SIL OFL 1.1 and code MIT.
