<template>
    <div class="container">
        <v-card elevation="2" shaped>
            <br>
            <h3>{{ recipe.title }}</h3>
            <div class="content-fit">
                <small v-html="recipe.content.body"></small>        
            </div>


            <div class="btn-fit">
                <v-btn color="error">
                    Buy
                </v-btn>            
            </div>      

        </v-card> 
    </div>
</template>

<script>
import RecipeApi from '../api/RecipeApi'

export default {
    name: 'SingleRecipe',
    async created() {
        const recipeApi = new RecipeApi;
        this.recipe = await recipeApi.getRecipe(this.$route.params.id)
    },
    data(){
        return{
            recipe: Object,
        }
    },
    mounted () {
        this.updateImages()
    },
    methods: {
    updateImages () {
      const attachments = document.querySelectorAll('action-text-attachment')
      for (const attachment of attachments) {
        const img = document.createElement('img')
        img.setAttribute('src', attachment.getAttribute('url'))
        attachment.parentNode.replaceChild(img, attachment)
      }
    }
  },
  updated () {
    this.updateImages()
  },

}
</script>

<style scoped>
.container{
    width:800px;
    margin: 0 auto;
    margin-top: 50px;
}

h3{
    text-align: center;
    margin-bottom: 20px;
}

small{
    text-align: center;
    width: 100px;
    margin-left: 20px;
}



.btn-fit{
    margin-left: 45%;
    margin-top: 20px;
    padding-bottom: 20px;
}
</style>