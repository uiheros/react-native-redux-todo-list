import {
  StyleSheet,
} from 'react-native';

import variables from './variables';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'stretch',
    backgroundColor:  variables.colorBg,
  },
  navbar: {
    borderBottomWidth: 1,
    borderBottomColor: variables.colorBorder,
  },
  separator: {
    backgroundColor: variables.colorBorder,
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: variables.colorRed,
    borderRadius: 5,
    marginTop: 50,
    paddingVertical: 15,
  },
  buttonDisabled: {
    backgroundColor: variables.colorDisabled,
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    color: variables.colorWhite,
  },
  todoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: variables.colorBorder,
  },
  todoHeaderTask: {
    color: variables.colorSecondaryText,
    flex: 1,
    padding: 10,
    fontWeight: 'bold',
  },
  todoHeaderCompleted: {
    color: variables.colorSecondaryText,
    padding: 10,
    fontWeight: 'bold',
  },
  todoItem: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoItemText: {
    color: variables.colorMainText,
    flex: 1,
    padding: 10,
  },
  todoItemCompleteCheck: {
    padding: 10,
  },
  todoEditForm: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  addTodoInput: {
    flex: 1,
    borderWidth: 1,
    borderColor:  variables.colorBorder ,
    borderRadius: 5,
    height: 40,
    color: variables.colorMainText,
    marginTop: 30,
    paddingLeft: 10,
    paddingRight: 10
  },
  link: {
  },
  linkActive: {
    borderBottomColor: 'red',
    borderBottomWidth: 1,
  },
  linkText: {
    color: '#696969',
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 10,
    paddingBottom: 10
  },
  linkTextActive: {
    color: 'red',
  },
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#F7F7F7',
  }
});

export default styles;