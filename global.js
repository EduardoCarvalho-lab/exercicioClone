import { StyleSheet, StatusBar } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    textAlignVertical: "top",
  },
  
  headerText: {
    color: "#006699",
    fontSize: 25,
  },

  container: {
    flex: 1,
    backgroundColor: '#313335',
    alignItems: "stretch",
    paddingHorizontal: 15,
    justifyContent: "space-between",
    paddingTop: StatusBar.currentHeight,
  },
  
    botao : {
      backgroundColor: "#00A0DC",
      borderRadius: 25,
      paddingVertical: "2%",
      justifyContent: "center",
      alignContent: "center",
      height: 50,
    },
    textoBotao: {
      color: "#313335",
      textAlign:"center", 
      fontSize: 18,
    },

    textoView: {
      marginTop: 0,
    },

    texto : {
      color: "#CACCCE",
      textAlignVertical: "top",
      justifyContent: "space-evenly",
      fontSize: 40,
    },
    
    viewInput: {
      borderColor: "grey",
      borderBottomWidth: 3,
    },

    input: {
      color: "#CACCCE",
      height: 45,
      textAlignVertical: "bottom",
    },
  
  });

  export default styles;