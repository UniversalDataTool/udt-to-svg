function regionToSVG(region, { width, height }) {
  if (region.regionType === "polygon") {
    return `<polygon points="${region.points
      .map(({ x, y }) => [x * width, y * height].join(" "))
      .join(", ")}"
            fill="${region.color}" stroke="" />`
  } else if (region.regionType === "bounding-box") {
    return `<rect fill="${region.color}" x="${
      (region.centerX - region.width / 2) * width
    }" y="${(region.centerY - region.height / 2) * height}" width="${
      region.width * width
    }" height="${region.height * height}" />`
  }
}

function sampleToSVG(
  sample,
  { width, height, showImage = true, annotationOpacity = 0.5 }
) {
  return `<svg width="${width}" height="${height}">
    ${
      sample.imageUrl && showImage
        ? `<image preserveAspectRatio="none" href="${sample.imageUrl}" width="${width}" height="${height}" />`
        : ""
    }
    <g style="opacity: ${!showImage ? 1 : annotationOpacity}">
    ${sample.annotation
      .map((region) => regionToSVG(region, { width, height }))
      .join("\n")}
    </g>
  </svg>`
}

module.exports = { regionToSVG, sampleToSVG }
