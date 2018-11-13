export default (color = "") => {
  if (color.startsWith("#")) {
    const c = color.substring(1); // strip #
    const rgb = parseInt(c, 16); // convert rrggbb to decimal
    const r = (rgb >> 16) & 0xff; // extract red
    const g = (rgb >> 8) & 0xff; // extract green
    const b = (rgb >> 0) & 0xff; // extract blue

    return 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  } else if (color.startsWith("r") || color.startsWith("R")) {
    let c = color.substring(4);
    c = c.slice(0, -1);
    c = c.replace(/ /g, "");
    var [r, g, b] = c.split(",");
    return 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
  }
  return -1;
};
