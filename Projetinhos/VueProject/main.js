var app = new Vue({
    el: '.todoapp',
    data: {
        todos: '',
        newTodo: '',
        editedTodo: null,
        visibility: 'all'
    },

    computed: {
        filteredTodos: function () {
            return filters[this.visibility](this.todos);
        },
        remaining: function () {
            return filters.active(this.todos).length;
        },
        allDone: {
            get: function () {
                return this.remaining === 0;
            },
            set: function (value) {
                this.todos.forEach(function (todo) {
                    todo.completed = value;
                });
            }
        }
    },
    
    methods: {
        addTodo: function () {
            var value = this.newTodo && this.newTodo.trim();
            if (!value) {
                return;
            }
            this.todos.push({
                title: value,
                completed: false
            });
            this.newTodo = '';
        }
    }
})
