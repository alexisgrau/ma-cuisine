<script lang="ts">
    import { recipes } from '$lib/recipes';

    function displayPlaceholder(event: Event) {
        const img = event.target as HTMLImageElement;
        img.src = 'https://placehold.co/600x400?text=Pas+d+image';
    }

</script>

<div class="min-h-screen bg-stone-100 p-4">
    <header class="mb-6 flex justify-between items-center">
        <h1 class="text-3xl font-bold text-stone-800">Ma Cuisine</h1>
        <button disabled class="bg-stone-300 text-stone-500 px-4 py-2 rounded-lg font-semibold flex items-center gap-2 cursor-not-allowed opacity-50">
            <span>+</span> Ajouter (Bientôt)
        </button>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {#each recipes as recipe}
            <a href={`/recipe/${recipe.id}`} class="block bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-stone-200">
                <div class="h-48 w-full bg-stone-200 relative">
                    <img src={recipe.image} alt={recipe.title} class="w-full h-full object-cover" on:error={displayPlaceholder}/> 
                </div>
                <div class="p-5">
                    <h2 class="text-2xl font-bold text-stone-800 mb-2">{recipe.title}</h2>
                    <p class="text-stone-500">{recipe.description}</p>
                    <div class="mt-4 flex items-center gap-2 text-orange-600 font-semibold">
                        <span>{recipe.ingredients.length} ingrédients</span>
                        <span>•</span>
                        <span>{recipe.steps.length} étapes</span>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>