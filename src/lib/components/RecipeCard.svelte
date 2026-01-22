<script lang="ts">
    import { base } from '$app/paths';

    let {recipe} = $props();

    function displayPlaceholder(event: Event) {
        const img = event.target as HTMLImageElement;
        img.src = 'https://placehold.co/600x400?text=Pas+d+image';
    }
</script>

<a href={`${base}/recipe/${recipe.id}`} class="block bg-white rounded-2xl shadow-md overflow-hidden border border-stone-200">
    <div class="h-48 w-full bg-stone-200 relative">
        <img src={base+recipe.image} alt={recipe.title} class="w-full h-full object-cover" onerror={displayPlaceholder}/> 
    </div>
    <div class="p-5">
        <h2 class="text-2xl font-bold text-stone-800 mb-2">{recipe.title}</h2>
        <p class="text-stone-500">{recipe.description}</p>
        <div class="mt-4 flex items-center gap-2 text-orange-600 font-semibold">
            <span>{recipe.ingredients.length} ingrédients</span>
            <span>•</span>
            <span>{recipe.steps.length} étapes</span>
            <span>•</span>
            <span>{recipe.prepTime + recipe.cookTime} min</span>
        </div>
    </div>
</a>