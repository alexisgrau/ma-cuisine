<script lang="ts">
    import { recipes } from '$lib/recipes';
    import RecipeCard from '$lib/components/RecipeCard.svelte';
    import { getRecipesCategories } from '$lib/categories';
    import CategoryButton from '$lib/components/CategoryButton.svelte';

    const categories = getRecipesCategories();

    let selectedCategory = $state<string>("Tous");

    const filteredRecipes = $derived(selectedCategory === "Tous" ? recipes : recipes.filter(recipe => recipe.categories.includes(selectedCategory)));

</script>

<div class="min-h-screen bg-stone-100 p-4">
    <header class="mb-6 flex gap-2 items-center">
        {#each categories as category}
            <CategoryButton 
                {category} 
                onclick={() => { selectedCategory = category; }} 
                selected={selectedCategory === category}
            />
        {/each}
    </header>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each filteredRecipes as recipe}
            <RecipeCard {recipe} />
        {/each}
    </div>
</div>