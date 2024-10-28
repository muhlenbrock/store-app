import { primaryColor } from '@/constants/Colors';
import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center'
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    fontSize: 16
  },
  eyeTouchable: {
    padding: 10
  },
  loginButton: {
    backgroundColor: primaryColor,
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    paddingRight: 10
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  forgotPasswordText: {
    color: '#666'
  },
  resetText: {
    color: primaryColor
  },
  noAccountText: {
    textAlign: 'center',
    marginTop: 30,
    color: '#666'
  },
  registerButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10
  },
  registerButtonText: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: 'bold'
  },
  validateInput: { position: 'absolute', bottom: -20, color: 'red' }
});
