 <template>
    <div class="user">
        <h3>Hello from User Component</h3>
        <h4>{{ user }}</h4>
    </div>
 </template>


<script>
    export default {
        async setup() {
            const promise =  new Promise((resolve) => {
                setTimeout(() => resolve("Success"), 4000)
            })
            const user = await promise;
            return { user }
        }
    }
</script>

<style lang="scss">

</style>