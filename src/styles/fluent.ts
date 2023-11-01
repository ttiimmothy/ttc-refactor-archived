import { makeStyles, shorthands, tokens } from "@fluentui/react-components";

export const fluentStyles = makeStyles({
  fluentProvider: {
    height: "100%",
    ...shorthands.overflow("auto"),
  },
  removeButton: {
    minHeight: "32px",
    minWidth: "32px",

    position: "absolute",
    top: "-16px",
    right: "-16px",

    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  },
  etaLink: {
    display: "flex",
    height: "100%",
    width: "100%",
  },
  radioGroup: {
    ...shorthands.overflow("hidden"),
  },
  dialog: {
    width: "70%",
  },
  card: {
    ...shorthands.overflow("visible"),
    backgroundColor: tokens.colorNeutralBackground3,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1,
    },
  },
  etaCard: {
    width: "100%",
    ...shorthands.overflow("visible"),
    backgroundColor: tokens.colorNeutralBackground3,
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1,
    },
  },
  cardHeader: {
    marginTop: "auto",
    marginBottom: "auto",
  },
  cardBadge: {
    marginRight: "12px",
    minWidth: "48px",
  },
  badge: {
    ...shorthands.margin("8px", "8px", "8px", "0px"),
    minWidth: "48px",
  },
  routeBadge: {
    ...shorthands.margin("4px", "8px", "4px", "0px"),
    minWidth: "36px",
  },
  accordionHeader: {
    ...shorthands.margin("0px", "0px"),

    "& button": {
      height: "auto",
      paddingLeft: "0px",
    },
  },
  switch: {
    marginTop: "8px",
  },
  countDown: {
    fontFamily: ["monospace", "Sans-serif"],
    marginLeft: "auto",
    width: "max-content",
  },
  refreshButton: {
    width: "max-content",
    marginRight: "10px",
  },
  bottomNav: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  bottomNavButton: {
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    "& span": {
      marginRight: "0px",
    },
  },
  navButtonLink: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
  sideNavButton: {
    ...shorthands.padding("8px", "0px"),
    width: "100%",
    borderTopLeftRadius: "0px",
    borderBottomLeftRadius: "0px",
    ":focus": {
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
    },
  },
  flexGrowContent: {
    flexGrow: 1,
  },
  accordionPanel: {
    display: "grid",
    gridTemplateColumns: "36px auto auto",
    gridAutoRows: "auto",
    paddingTop: "8px",
    paddingBottom: "8px",
  },
  smallRoundNavButton: {
    width: "48px",
    height: "48px",
    minWidth: "0px",
    maxWidth: "unset",
    marginLeft: "auto",
    marginRight: "auto",
    "& span": {
      marginRight: "0px",
    },
  },
});
