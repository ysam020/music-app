import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 42,
    fontWeight: "bold",
    marginLeft: 10,
    letterSpacing: 1,
  },
  searchInput: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    color: "#000000",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    placeholderTextColor: "#000000",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  column: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  footer: {
    backgroundColor: "#1d5260",
    padding: 15,
    paddingTop: 0,
  },
  durationContainer: { flexDirection: "row", justifyContent: "space-between" },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  controlIcon: { marginHorizontal: 10 },
  durationText: { color: "#FFFFFF", textAlign: "center" },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
