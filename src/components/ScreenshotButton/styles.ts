import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
      width: 40,
      height: 40,
      marginRight: 8,
      borderRadius: 4,
      position: 'relative',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.surface_secondary
  },

  removeIcon: {
      right: 0,
      bottom: 0,
      position: 'absolute'
  },

  image: {
    width: 40,
    height: 40
  }
});