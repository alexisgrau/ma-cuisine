<script lang="ts">
    import { page } from '$app/stores';
    import { recipes } from '$lib/recipes';
    import StepTimer from '$lib/components/StepTimer.svelte';
    import { base } from '$app/paths';
    import { onMount } from 'svelte';

    $: recipeId = $page.params.slug;
    $: recipe = recipes.find(r => r.id === recipeId);

    let currentStep = 0;
    let logs: string[] = [];
    let showLogs = true;

    function addLog(message: string) {
        const time = new Date().toLocaleTimeString();
        logs = [`[${time}] ${message}`, ...logs].slice(0, 8);
        console.log(message);
    }

    onMount(() => {
        addLog('🚀 App démarrée');
        
        // Scroll automatique toutes les 3 minutes pour simuler une activité
        const scrollInterval = setInterval(() => {
            window.scrollBy(0, 1);
            setTimeout(() => window.scrollBy(0, -1), 100);
            addLog('🔄 Keep-alive scroll');
        }, 180000); // 3 minutes
        
        // Log toutes les minutes pour vérifier que l'app tourne
        const logInterval = setInterval(() => {
            addLog('💚 App toujours active');
        }, 60000);

        // Détecter si la page est cachée
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                addLog('👁️ Page visible');
            } else {
                addLog('🌙 Page cachée');
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            clearInterval(scrollInterval);
            clearInterval(logInterval);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            addLog('🛑 App fermée');
        };
    });

    function next() {
        if (currentStep < (recipe?.steps.length || 0)) currentStep++;
        addLog(`➡️ Étape ${currentStep + 1}`);
    }

    function prev() {
        if (currentStep > 0) currentStep--;
        addLog(`⬅️ Étape ${currentStep + 1}`);
    }

    function toggleLogs() {
        showLogs = !showLogs;
    }
</script>

{#if recipe}    
    <div class="h-screen w-screen flex flex-col bg-neutral-900 text-white relative overflow-auto">
        
        <!-- Panneau de logs -->
        {#if showLogs}
            <div class="absolute top-20 right-4 bg-black/90 text-green-400 text-xs font-mono p-3 rounded-lg max-w-xs z-50 backdrop-blur border border-green-500/30">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-bold">DEBUG LOGS</span>
                    <button on:click={toggleLogs} class="text-red-400 hover:text-red-300">✕</button>
                </div>
                <div class="space-y-1">
                    {#each logs as log}
                        <div class="text-[10px] leading-tight">{log}</div>
                    {/each}
                </div>
            </div>
        {:else}
            <button 
                on:click={toggleLogs} 
                class="absolute top-20 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded z-50 hover:bg-black/70">
                📊 Logs
            </button>
        {/if}

        <div class="px-6 pt-6 pb-4">
            <div class="flex items-center justify-between mb-3">
                <span class="text-lg font-medium">{recipe.title}</span>
                {#if currentStep + 1 > recipe.steps.length}
                    <span class="text-sm text-neutral-400"></span>
                {:else}
                    <span class="text-sm text-neutral-400">Étape {currentStep + 1} sur {recipe.steps.length}</span>
                {/if}
                <a href={`${base}/`} class="text-sm text-neutral-400 hover:text-white bg-[#313133] px-4 py-2 rounded-full">Quitter</a>
            </div>

            <div class="w-full h-1.5 bg-neutral-700 rounded-full overflow-hidden">
                <div 
                    class="h-full bg-green-500 transition-all duration-300 rounded-full"
                    style="width: {((currentStep + 1) / recipe.steps.length) * 100}%">
                </div>
            </div>
        </div>
        
        <div class="flex-1 flex flex-col items-center justify-center px-8 text-center">
            {#if currentStep < recipe.steps.length}
                <p class="text-4xl md:text-5xl font-bold leading-tight max-w-4xl animate-fade-in">
                    {recipe.steps[currentStep]}
                </p>

                <div class="mt-10">
                    <StepTimer text={recipe.steps[currentStep]} />
                </div>
            {:else}
                <div class="text-center">
                    <h2 class="text-5xl font-bold text-green-400 mb-6">Bon Appétit !</h2>
                    <a href={`${base}/`} class="inline-block bg-white text-neutral-900 text-2xl font-bold py-4 px-10 rounded-full shadow-lg hover:bg-neutral-200">
                        Choisir une autre recette
                    </a>
                </div>
            {/if}
        </div>
        
        {#if currentStep < recipe.steps.length}
            <div class="flex gap-4 p-6">
                <button 
                    on:click={prev} 
                    disabled={currentStep === 0} 
                    class="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white text-lg font-medium py-4 rounded-xl disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors">
                    <span>←</span> Précédent
                </button>
                <button 
                    on:click={next} 
                    class="flex-3 bg-green-600 hover:bg-green-700 text-white text-xl font-semibold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    J'ai fini, SUIVANT <span>→</span>
                </button>
            </div>
        {/if}

        <!-- Zone invisible pour permettre le scroll -->

    </div>
    <div style="height: 1px; width: 20px;"></div>
{/if}

<style>
    .animate-fade-in {
        animation: fadeIn 0.3s ease-in;
    }

    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
    }
</style>
