<script lang="ts">
    import { page } from '$app/stores';
    import { recipes } from '$lib/recipes';
    import StepTimer from '$lib/components/StepTimer.svelte';
    import { base } from '$app/paths';

    $: recipeId = $page.params.slug;
    $: recipe = recipes.find(r => r.id === recipeId);

    let currentStep = 0;

    function next() {
        if (currentStep < (recipe?.steps.length || 0)) currentStep++;
    }
    
    function prev() {
        if (currentStep > 0) currentStep--;
    }
</script>

{#if recipe}
    <video src="data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAAAG1kYXQAAAAhaW9uY2UAAABhdmNjAAAAAABhdmNj" loop muted autoplay playsinline></video>
    <div class="h-screen w-screen flex flex-col bg-stone-900 text-stone-100 overflow-hidden">
        
        <div class="h-16 flex items-center justify-between px-6 bg-stone-800 border-b border-stone-700">
            <span class="text-lg font-semibold text-stone-400">{recipe.title}</span>
            <div class="text-xl font-mono text-orange-400">
                Étape {currentStep + 1} <span class="text-stone-500">/ {recipe.steps.length}</span>
            </div>
            <a href={`${base}/recipe/${recipe.id}`} class="text-sm bg-stone-700 px-3 py-1 rounded text-stone-300">Quitter</a>
        </div>

        <div class="flex-1 flex flex-col items-center justify-center p-8 text-center relative">
            {#if currentStep < recipe.steps.length}
                <p class="text-3xl md:text-5xl font-medium leading-snug animate-fade-in">
                    {recipe.steps[currentStep]}
                </p>
                
                <div class="mt-8">
                    <StepTimer text={recipe.steps[currentStep]} />
                </div>

            {:else}
                <div class="text-center">
                    <div class="text-6xl mb-4">🎉</div>
                    <h2 class="text-5xl font-bold text-green-400 mb-6">Bon Appétit !</h2>
                    <a href={`${base}/`} class="inline-block bg-white text-stone-900 text-2xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-stone-200">
                        Choisir une autre recette
                    </a>
                </div>
            {/if}
        </div>

        {#if currentStep < recipe.steps.length}
            <div class="h-24 md:h-32 flex border-t border-stone-700">
                <button on:click={prev} disabled={currentStep === 0} 
                    class="w-1/4 bg-stone-800 hover:bg-stone-700 text-stone-300 text-xl font-bold border-r border-stone-700 disabled:opacity-30">
                    ← Précédent
                </button>
                
                <button on:click={next} 
                    class="w-3/4 bg-green-600 active:bg-green-700 text-white text-3xl md:text-4xl font-bold flex items-center justify-center gap-4">
                    J'ai fini, SUIVANT →
                </button>
            </div>
        {/if}
    </div>
{/if}

<style>
    /* Petite animation fluide */
    .animate-fade-in {
        animation: fadeIn 0.3s ease-in;
    }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
    video{
        position: fixed;
        width: 1px;
        height: 1px;
        opacity: 0;
    }
</style>