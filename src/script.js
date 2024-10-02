import sketch from 'sketch'

export default function() {
  let selection = sketch.getSelectedDocument().selectedLayers
  let symbols = selection.layers.filter(
    layer => layer.type == sketch.Types.SymbolMaster
  )
  let o = 0

  if (symbols.length > 0) {
    symbols.map(symbol => {
      symbol.overrides.map(override => {
        if (override.editable) {
          override.editable = false
        }
        o++
      })
    })
    return sketch.UI.message("killswitch » killed " + o + " overrides")
  } else {
    sketch.UI.message("killswitch » select a symbol source to kill its overrides")
  }

}
