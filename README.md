# UDT to SVG

This project converts UDT samples to SVGs, this makes them viewable in a wide
variety of environments without loading the entire Universal Data Tool as a
Javascript library.

The main goal of this library is comprehensive support of the UDT format. For
the most part, it should remain lightweight.

If you run `node example.js`, you'll get a file that looks like this.

![](https://user-images.githubusercontent.com/1910070/90960162-b3f57e80-e46d-11ea-8340-3694e0949fd8.png)

## Usage

To install: `npm install udt-to-svg`

```javascript
import { sampleToSvg } from "udt-to-svg"

sampleToSvg(udtDataset.samples[0], { width: 400, height: 300 })
// Outputs: <svg width="400" height="300">....</svg>
```
