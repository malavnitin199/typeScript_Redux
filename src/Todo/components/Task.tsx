import { todo as todoType } from "../modal";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
type propType = {
  type: "done" | "pending";
  todo: todoType;
  setTodos: React.Dispatch<React.SetStateAction<todoType[]>>;
};
function Task({ todo, setTodos, type }: propType) {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);
  function handleDelete() {
    setTodos((currTodo) =>
      currTodo.filter((item) => {
        if (item.id == todo.id) {
          return false;
        } else {
          return true;
        }
      })
    );
  }
  function handleDone() {
    setTodos((currTodo) =>
      currTodo.map((item) => {
        if (item.id == todo.id) {
          const ans = !item.isDone;
          return {
            ...item,
            isDone: ans,
          };
        } else {
          return item;
        }
      })
    );
  }
  function handleEdit() {
    if (edit == true) return;
    setEdit((state) => !state);
  }     
  useEffect(() => {
    if (edit) {
      inputRef.current?.focus();
    }
  }, [edit]);
  if (type == "pending" && todo.isDone) {
    return;
  }
  if (type == "done" && !todo.isDone) {
    return;
  }

  return (
    <div className="taskBox">
      {edit ? (
        <h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEdit(false);
              setTodos((currTodo) =>
                currTodo.map((item) => {
                  if (item.id == todo.id) {
                    return {
                      ...item,
                      todo: editValue,
                    };
                  } else {
                    return item;
                  }
                })
              );
            }}
          >
            <input
              className="input_edit"
              value={editValue}
              ref={inputRef}
              onChange={(e) => setEditValue(e.target.value)}
              onBlur={(e) => {
                e.preventDefault();
                setEdit(false);
                setTodos((currTodo) =>
                  currTodo.map((item) => {
                    if (item.id == todo.id) {
                      return {
                        ...item,
                        todo: editValue,
                      };
                    } else {
                      return item;
                    }
                  })
                );
              }}
            />
          </form>
        </h1>
      ) : (
        <h1>{todo.todo}</h1>
      )}
      <div className="actions">
        {!todo.isDone && <FaEdit onClick={handleEdit} />}
        {<MdDeleteForever onClick={handleDelete} />}
        {!todo.isDone ? (
          <MdFileDownloadDone onClick={handleDone} />
        ) : (
          <FaUndoAlt onClick={handleDone} />
        )}
      </div>
    </div>
  );
}

export default Task;
