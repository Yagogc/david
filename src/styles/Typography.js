import WebFont from "webfontloader";

const Typography = () => {
  WebFont.load({
    classes: false,
    events: false,
    google: {
      families: ["Pacifico", "IBM Plex Serif"]
    }
  });
};

export default Typography;
