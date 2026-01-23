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
    <div class="min-h-screen bg-stone-50 flex flex-col md:flex-row">
        <!-- Left side - Image with title overlay -->
        <div class="md:w-2/5 relative min-h-400 md:min-h-screen">
            <img src={base+recipe.image} alt={recipe.title} class="w-full h-full object-cover" on:error={displayPlaceholder}/>
            
            <!-- Back button -->
            <a href="{base}/" aria-label="Retour" class="absolute top-6 left-6 w-14 h-14 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/40 transition border border-white">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                </svg>
            </a>

            <!-- Title overlay -->
            <div class="absolute bottom-0 left-0 right-0 p-8 bg-linear-to-t from-black/70 via-black/40 to-transparent">
                <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight drop-shadow-lg">{recipe.title}</h1>
            </div>
        </div>

        <!-- Right side - Ingredients and info -->
        <div class="md:w-3/5 p-8 md:p-8 overflow-y-auto bg-stone-50">
            <!-- Info badges -->
            <div class="flex flex-wrap gap-3 mb-8">
                <div class="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-full">
                    <img src="{base}/icons/chef-hat.svg" alt="Niveau" class="w-5 h-5"/>
                    <span class="font-medium text-stone-800">{recipe.difficulty}</span>
                </div>
                <div class="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-full">
                    <img src="{base}/icons/wallet.svg" alt="Budget" class="w-5 h-5"/>
                    <span class="font-medium text-stone-800">{recipe.budget}</span>
                </div>
                <div class="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-full">
                    <img src="{base}/icons/clock.svg" alt="Préparation" class="w-5 h-5"/>
                    <span class="font-medium text-stone-800">{recipe.prepTime} min</span>
                </div>
                <div class="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-full">
                    <img src="{base}/icons/oven.svg" alt="Cuisson" class="w-5 h-5"/>
                    <span class="font-medium text-stone-800">{recipe.cookTime} min</span>
                </div>
            </div>

            <!-- Ingredients section -->
            <h2 class="text-3xl font-bold text-stone-900 mb-6">Ingrédients</h2>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {#each recipe.ingredients as ing}
                    <div class="flex items-start gap-3">
                        <span class="dot"></span>
                        <div>
                            <div class="font-bold text-xl text-stone-900">{ing.quantity}</div>
                            <div class="text-stone-600">{ing.name}</div>
                        </div>
                    </div>
                {/each}
            </div>

            <!-- Start cooking button -->
            <div class="mt-auto"> <a href={`${base}/recipe/${recipe.id}/cook`} class="block w-full bg-[#36644a] text-white text-center py-5 rounded-full text-2xl font-bold shadow-lg transform active:scale-95 transition">
                    Cuisiner
                </a>
            </div>
        </div>
    </div>
{:else}
    <div class="p-10 text-center">Recette introuvable</div>
{/if}

<style>
    .dot{
        background-color:#f5be86;
        width:15px;
        height: 15px;
        border-radius: 100px;
        margin-top: 8px;
        flex-shrink: 0;
    }
</style>