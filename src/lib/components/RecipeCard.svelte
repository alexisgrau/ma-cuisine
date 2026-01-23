<script lang="ts">
    import { base } from '$app/paths';

    let {recipe} = $props();

    function displayPlaceholder(event: Event) {
        const img = event.target as HTMLImageElement;
        img.src = 'https://placehold.co/600x400?text=Pas+d+image';
    }
</script>

<a href={`${base}/recipe/${recipe.id}`} class="block bg-white rounded-2xl shadow-sm overflow-hidden border border-stone-200">
    <div class="h-48 w-full bg-stone-200 relative">
        <img src={base+recipe.image} alt={recipe.title} class="w-full h-full object-cover" onerror={displayPlaceholder}/> 
    </div>
    <div class="p-5">
        <h2 class="text-2xl font-bold text-stone-800 mb-2">{recipe.title}</h2>
        <p class="text-stone-500">{recipe.description}</p>
        <div class="mt-4 flex items-center gap-2 text-orange-600 font-semibold">

            <div class="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-full">
                <img src="{base}/icons/chef-hat.svg" alt="Préparation" class="w-4 h-4"/>
                <span class="font-medium text-stone-800 text-sm">{recipe.difficulty}</span>
            </div>

            <div class="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-full">
                <img src="{base}/icons/list.svg" alt="Préparation" class="w-4 h-4"/>
                <span class="font-medium text-stone-800 text-sm">{recipe.ingredients.length} ingrédients</span>
            </div>

            <div class="flex items-center gap-2 bg-orange-200 px-4 py-2 rounded-full">
                <img src="{base}/icons/clock.svg" alt="Préparation" class="w-4 h-4"/>
                <span class="font-medium text-stone-800 text-sm">{recipe.prepTime + recipe.cookTime} min</span>
            </div>
        </div>
    </div>
</a>