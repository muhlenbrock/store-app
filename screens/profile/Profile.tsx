import { logout } from '@/features/auth/authSlice';
import { useAppDispatch } from '@/hooks/hooksRedux';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const dispatch = useAppDispatch();
  return (
    <View style={s.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(logout());
        }}
        style={s.logoutButton}
      >
        <Text style={s.title}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoutButton: {
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 6
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
