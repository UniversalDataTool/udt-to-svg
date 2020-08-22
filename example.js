console.log(
  require("./").sampleToSVG(
    JSON.parse(require("fs").readFileSync("./example.udt.json")).samples[0],
    {
      width: 400,
      height: 300,
    }
  )
)
