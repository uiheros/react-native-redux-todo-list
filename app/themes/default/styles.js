import {
  StyleSheet,
  Dimensions
} from 'react-native';

import variables from './variables';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  mainBgImg: {
    alignSelf: 'center',
    width: width,
    height: height,
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'stretch',
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: variables.colorMain,
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
  todoItem: {
    alignItems: 'stretch',
    flexDirection: 'row',
    opacity: 1,
  },
  todoItemDetails: {
    flex: 1,
    padding: 10,
  },
  todoItemTitle: {
    color: variables.colorMainText,
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoItemTimeStamp: {
    marginTop: 10,
    fontSize: 12,
    color: variables.colorSecondaryText,
  },
  todoItemCompleteTask: {
    padding: 20,
    backgroundColor: variables.colorMain,
  },
  todoItemCompleteTaskIcon: {
    fontSize: 25,
    color: '#fff',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  filterTextStyle: {
    width: width,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    color: variables.colorWhite,
    backgroundColor: variables.colorMain,
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
});

export default styles;
