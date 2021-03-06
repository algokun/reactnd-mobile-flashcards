import { StyleSheet } from "react-native";
import {
  surface,
  secondary,
  textSecondary,
  background,
  textPrimary,
} from "./colors";

const globalFont = "LexendDeca";

export const globalStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: background,
    padding: 20,
  },
  title: {
    fontFamily: globalFont,
    fontSize: 24,
    lineHeight: 36,
    color: textPrimary,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: globalFont,
    fontSize: 18,
    lineHeight: 22,
    color: textPrimary,
    marginTop: 20,
  },
  deckItem: {
    backgroundColor: surface,
    padding: 15,
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deckInfo: {
    display: "flex",
    flexDirection: "column",
  },
  deckTitle: {
    fontFamily: globalFont,
    fontSize: 18,
    color: textSecondary,
  },
  deckCards: {
    fontFamily: globalFont,
    fontSize: 12,
    textTransform: "uppercase",
    letterSpacing: 5,
    color: secondary,
  },
  inputField: {
    backgroundColor: surface,
    padding: 15,
    fontFamily: globalFont,
    color: textSecondary,
    borderRadius: 10,
    marginBottom: 20
  },
});
