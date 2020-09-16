import boton from "../assets/img/bot_n.gif";

const classes = {
  subHeader: {
    float: "left",
    width: "100%",
    backgroundColor: "#305880",
  },
  shText: {
    padding: "1em",
    float: "left",
    letterSpacing: "0.1em",
    maxWidth: "430px",
  },
  font: {
    color: "white",
    fontSize: "100% !important",
  },
  help: {
    margin: "0.5em",
    float: "right",
  },
  fieldset: {
    float: "left",
    background: "#ced7de no-repeat right 50%;",
  },
  campos: {
    float: "left",
    width: "35%",
    padding: "1em",
  },
  field: {
    fontSize: "1em",
    width: "85%",
    marginBottom: "10px",
  },
  box: {
    float: "left",
    paddingLeft: "1em",
    marginTop: "1em",
    marginLeft: "1em",
    width: "94%",
    border: "solid 1px #eeeeee",
    paddingBottom: "1.2em",
  },
  subtitles: {
    float: "left",
    marginTop: "1em",
    marginLeft: "1em",
    width: "94%",
    border: "0 !important",
    fontWeight: "bold",
  },
  buttonGroup: {
    paddingTop: "0.5em",
    paddingBottom: "0.5em",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "#ced7de",
  },
  button: {
    borderWidth: "0px",
    float: "right",
    backgroundImage: "url(" + boton + ")",
    width: "86px !important",
    cursor: "pointer !important",
    color: "white",
    height: "21px",
    marginRight: "0.5em",
  },
  none: {
    border: "none",
  },
};

export default classes;
