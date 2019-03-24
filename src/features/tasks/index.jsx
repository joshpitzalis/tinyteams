import { Button } from "grommet";
import { Add } from "grommet-icons";
import React from 'react';
import { TasksContext } from '../../context/TasksContext';
import Modal from '../modals/Modal';
import { ListCreator } from './ListCreator';
import { ListEditor } from './ListEditor';
import { ToDoLists } from './ToDoLists';
const taskReducer = (state, action) => {
  switch (action.type) {
    case 'OPENED_TASK_LIST_CREATOR':
      return { ...state, modalVisible: true };
    case 'MODAL_CLOSED':
      return { ...state, modalVisible: false };
    case 'EDITOR_MODAL_CLOSED':
      return { ...state, modalVisible: false, id: null };
    case 'LIST_UPDATED':
      action.payload.updateLists(action.payload.list);
      return { ...state, modalVisible: false };
    case 'LIST_CREATED':
      return { ...state, modalVisible: false };
    case 'OPENED_TASK_LIST_EDITOR':
      return { ...state, modalVisible: true, id: action.payload };
    default:
      throw new Error('You have probably mispelt an action name');
  }
};

const initialState = {
  modalVisible: false
};

const Tasks = () => {
  const [state, dispatch] = React.useReducer(taskReducer, initialState);
  const { lists } = React.useContext(TasksContext);
  return (
    <div className="mw9 center pa3 pa5-ns ">
      <div className="bb b--black-05 w-100 mw9 flex items-center justify-between ">
        <h2 className="f5 fw2   ">Current Workload</h2>

        <Button
          icon={<Add />}
          className="dib"
          label="Create A New List"
          data-testid="createTask"
          onClick={() => dispatch({ type: 'OPENED_TASK_LIST_CREATOR' })}
          margin={{'vertical': 'medium'}}
        />
      </div>
      <section className="flex ">
        <ToDoLists lists={lists} dispatch={dispatch} />
        <Dialogue
          modalVisible={state.modalVisible}
          id={state.id}
          dispatch={dispatch}
          listId={state.id}
        />
      </section>
    </div>
  );
};

export default Tasks;

const Dialogue = ({ modalVisible, id, dispatch, listId }) => {
  return (
    modalVisible && (
      <Modal
        onClose={() =>
          id
            ? dispatch({ type: 'EDITOR_MODAL_CLOSED' })
            : dispatch({ type: 'MODAL_CLOSED' })
        }
      >
        {id ? (
          <ListEditor dispatch={dispatch} listId={listId} />
        ) : (
          <ListCreator dispatch={dispatch} />
        )}
      </Modal>
    )
  );
};
