<script lang="ts">
    import { page } from '$app/stores';
    import { recipes } from '$lib/recipes';
    import { base } from '$app/paths';
    
    $: recipeId = $page.params.slug;
    $: recipe = recipes.find(r => r.id === recipeId);
    
    function displayPlaceholder(event: Event) {
        const img = event.target as HTMLImageElement;
        img.src = 'https://placehold.co/600x400?text=Pas+d+image';
    }

</script>

{#if recipe}
    <div class="min-h-screen bg-white flex flex-col md:flex-row">
        <div class="md:w-1/3 bg-stone-100 p-6 flex flex-col border-r border-stone-200 overflow-y-auto">
            
            <a href="/" class="text-stone-500 font-bold mb-4 inline-block text-lg hover:text-stone-800 transition">← Retour</a>

            <h1 class="text-4xl font-extrabold text-stone-800 leading-tight mb-4">{recipe.title}</h1>
            
            <img src={base+recipe.image} alt={recipe.title} class="w-full h-48 object-cover rounded-xl shadow-md mb-6" on:error={displayPlaceholder}/>
            
            <div class="grid grid-cols-2 gap-3 mb-6">
                <div class="bg-white p-3 rounded-lg shadow-sm text-center border border-stone-200">
                    <div class="text-xs text-stone-500 uppercase font-bold">Prépa</div>
                    <div class="font-bold text-stone-800">{recipe.prepTime}</div>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm text-center border border-stone-200">
                    <div class="text-xs text-stone-500 uppercase font-bold">Cuisson</div>
                    <div class="font-bold text-stone-800">{recipe.cookTime}</div>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm text-center border border-stone-200">
                    <div class="text-xs text-stone-500 uppercase font-bold">Niveau</div>
                    <div class="font-bold text-stone-800">{recipe.difficulty}</div>
                </div>
                <div class="bg-white p-3 rounded-lg shadow-sm text-center border border-stone-200">
                    <div class="text-xs text-stone-500 uppercase font-bold">Budget</div>
                    <div class="font-bold text-stone-800">{recipe.budget}</div>
                </div>
            </div>
            
            
            <div class="mt-auto"> <a href={`${base}/recipe/${recipe.id}/cook`} class="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-5 rounded-2xl text-2xl font-bold shadow-lg transform active:scale-95 transition">
                    Cuisiner
                </a>
            </div>
        </div>

        <div class="md:w-2/3 p-6 overflow-y-auto">
            <h3 class="text-2xl font-bold text-stone-700 mb-6 border-b pb-2">Ingrédients</h3>
            <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
                {#each recipe.ingredients as ing}
                    <li class="flex items-center bg-stone-50 p-3 rounded-lg border border-stone-100">
                        <span class="w-3 h-3 bg-orange-400 rounded-full mr-3 flex-shrink-0"></span>
                        <span class="font-bold text-stone-800 mr-2">{ing.quantity}</span>
                        <span class="text-stone-600">{ing.name}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
{:else}
    <div class="p-10 text-center">Recette introuvable</div>
{/if}