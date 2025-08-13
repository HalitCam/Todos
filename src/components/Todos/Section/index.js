import React, { startTransition, useState } from "react";

const Section = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([
        { text: "Learn JavaScript", completed: true },
        { text: "Learn React", completed: false },
        { text: "Have a life!", completed: false }
    ]);
// value not forget!
    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([
                ...todos, Transition
                { text: inputValue, completed: false }
            ]);
            setInputValue('');
        }
    };

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form onSubmit={onSubmit}>
                    <input
                        value={inputValue}
                        className="new-todo"
                        placeholder="What needs to be done?"
                        onChange={(e) => setInputValue(e.target.value)}
                        autoFocus
                    />
                </form>
            </header>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul id='ulList' className="todo-list">
                    {todos.map((todo, idx) => (
                        <li key={idx} className={todo.completed ? "completed" : ""}>
                            <div className="view">
                                <input className="toggle" type="checkbox" checked={todo.completed} readOnly />
                                <label>{todo.text}</label>
                                <button className="destroy"></button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.filter(t => !t.completed).length}</strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a href="#/" className="selected">All</a>
                    </li>
                    <li>
                        <a href="#/">Active</a>
                    </li>
                    <li>
                        <a href="#/">Completed</a>
                    </li>
                </ul>

                <button className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </section>
    );
};

export default Section;