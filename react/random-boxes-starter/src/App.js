import React, { Component } from 'react';
import './App.css';

// stateless functional component
function Box({ color }) {
  const style = {
    flex: '1 1 12%',
    paddingTop: '12%',
    margin: '2px',
    background: color  // from deconstructed props.color
  }
  // return a box component
  return <div style={style}></div>;
}

class App extends Component {

  constructor(props) {
    super(props);
    const boxes = [...new Array(32)].map(() => this.getRandomColor());
    this.state = { boxes };

    setInterval(() => {
      let boxes = [...this.state.boxes];
      let randBox = Math.floor(Math.random() * boxes.length);
      boxes[randBox] = this.getRandomColor();
      this.setState({ boxes })
    }, 1000);
  }

  getRandomColor() {
    const { allColors } = this.props;
    let colorIdx = Math.floor(Math.random() * allColors.length);
    return allColors[colorIdx];
  }

  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    };
    const boxes = this.state.boxes.map((color, i) => (
      <Box key={i} color={color} />
    ));

    return (
      <div className="App" style={style}>
        {boxes}
      </div>
    );
  }
}

App.defaultProps = {
  allColors: ["AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate",
    "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod",
    "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "Darkorange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey",
    "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue",
    "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod",
    "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan",
    "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon",
    "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow",
    "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid",
    "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise",
    "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy",
    "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue",
    "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen",
    "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen",
    "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke",
    "Yellow", "YellowGreen"]
};

export default App;
