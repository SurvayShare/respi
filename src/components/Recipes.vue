<template>
<div>
    <div v-for="recipe in recipes" v-bind:key="recipe.id">
        <Recipe :recipe="recipe" />
    </div>
</div>
</template>

<script>
import Task from './Recipe'
export default {
    name: 'Recipes',
    props:{
        recipes: Array
    },
    components:{
        Recipe
    }
}
</script>

<style scoped>
</style>