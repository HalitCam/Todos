import React, { useState } from "react";

const Section = () => {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([
        { text: "Learn JavaScript", completed: true },
        { text: "Learn React", completed: false },
        { text: "Have a life!", completed: false }
    ]);
    const [filter, setFilter] = useState('all'); // all, active, completed

    const onSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {
            setTodos([
                ...todos,
                { text: inputValue, completed: false }
            ]);
            setInputValue('');
        }
    };

    const handleFilter = (newFilter) => (e) => {
        e.preventDefault();
        setFilter(newFilter);
    };

    const handleToggle = (idx) => {
        setTodos(todos =>
            todos.map((todo, i) =>
                i === idx ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const handleClearCompleted = () => {
        setTodos(todos => todos.filter(todo => !todo.completed));
    };

    // Filtrelenmiş todo listesi
    const filteredTodos = todos.filter(todo => {
        if (filter === 'active') return !todo.completed;
        if (filter === 'completed') return todo.completed;
        return true;
    });

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
                    {filteredTodos.map((todo, idx) => (
                        <li key={idx} className={todo.completed ? "completed" : ""}>
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => handleToggle(todos.indexOf(todo))}
                                />
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
                        <a
                            href="#/"
                            className={filter === 'all' ? "selected" : ""}
                            onClick={handleFilter('all')}
                        >All</a>
                    </li>
                    <li>
                        <a
                            href="#/"
                            className={filter === 'active' ? "selected" : ""}
                            onClick={handleFilter('active')}
                        >Active</a>
                    </li>
                    <li>
                        <a
                            href="#/"
                            className={filter === 'completed' ? "selected" : ""}
                            onClick={handleFilter('completed')}
                        >Completed</a>
                    </li>
                </ul>

                <button className="clear-completed" onClick={handleClearCompleted}>
                    Clear completed
                </button>
            </footer>
        </section>
    );
};

export default Section;