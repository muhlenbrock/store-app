import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5'
    },
    header: {
      padding: 16,
      backgroundColor: '#fff',
      flexDirection: 'row'
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: 14,
      color: '#888'
    },
    viewToggle: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      gap: 16
    },
    loadingContainer: {
      flex: 1,
      marginTop:100
    },
  });