<template>
    <h3>Todos list</h3>
    <ul>
        <template v-for="todo in todoList" :key="`todo-${todo.id}`">
            <li v-if="todo.isComplete" >
                <p>{{ todo.task }}</p>
            </li>
        </template>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            todoList: [
                { id: 1, task: "Todo1", isComplete: true},
                { id: 2, task: "Todo2", isComplete: false}, 
                { id: 3, task: "Todo3", isComplete: false}, 
                { id: 4, task: "Todo4", isComplete: true},
            ]
        }
    }
}
</script>
<style lang="scss">
    ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    }
</style>
