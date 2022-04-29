# Hex Color Shades

## Usage
```javascript
shadeColor(color, offset)
```
- `color` (string): the full string of the color to shade (can include or skip the leading `#`). Must be a 6 character color (TODO: allow 3 character colors)
- `offset` (integer): _how much_ to shade the color. Positive numbers will make it lighter, while negative numbers will make it darker. 0 will leave it as is.
_The default is `-1` which will make it "one shade" darker._