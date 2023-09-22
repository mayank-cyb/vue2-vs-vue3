<template>
    <form action="/">
        <input
            type="number"
            :value="numberInput"
            placeholder="Type some number"
            @input="$emit('update:numberInput', $event.target.value)"
        />
        <input
            type="text"
            :value="firstName"
            placeholder="Type your firstname"
            @input="$emit('update:firstName', $event.target.value)"
        />
    </form>
</template>

<script>
export default {
    props: ['numberInput', 'firstName'],
    emits: ['update:number', 'update:firstName']
}
</script>
<style lang="scss" scoped>
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 10rem;
    margin: 0 auto;
    min-height: 3rem;
}
</style>