import { connect } from 'react-redux';
import { addTodo } from '../../actions';
import AddTodo from './AddTodo';

const mapDispatchToProps = (dispatch) => {
  return {
    saveTodo: (title) => {
      dispatch(addTodo(title));
    }
  };
};

const AddTodoContainer = connect(
  () => ({}),
  mapDispatchToProps
)(AddTodo);

export default AddTodoContainer;
