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
    let dummyValue = 0;

    function addLog(message: string) {
        const time = new Date().toLocaleTimeString();
        logs = [`[${time}] ${message}`, ...logs].slice(0, 10);
        console.log(message);
    }

    onMount(() => {
        addLog('🚀 App démarrée');
        
        // TECHNIQUE 1: Scroll micro toutes les 30 secondes
        const microScroll = setInterval(() => {
            window.scrollBy(0, 1);
            setTimeout(() => window.scrollBy(0, -1), 50);
            addLog('📜 Micro scroll');
        }, 30000);
        
        // TECHNIQUE 2: Touch event simulé toutes les 2 minutes
        const touchSimulation = setInterval(() => {
            const touch = new Touch({
                identifier: Date.now(),
                target: document.body,
                clientX: 0,
                clientY: 0,
                screenX: 0,
                screenY: 0,
                pageX: 0,
                pageY: 0,
                radiusX: 2.5,
                radiusY: 2.5,
                rotationAngle: 0,
                force: 0.5
            });
            
            const touchEvent = new TouchEvent('touchstart', {
                touches: [touch],
                targetTouches: [touch],
                changedTouches: [touch],
                bubbles: true,
                cancelable: true
            });
            
            document.body.dispatchEvent(touchEvent);
            addLog('👆 Touch simulé');
        }, 120000);
        
        // TECHNIQUE 3: Modifier le DOM toutes les minutes
        const domChange = setInterval(() => {
            dummyValue = Date.now();
            addLog('🔄 DOM update');
        }, 60000);
        
        // TECHNIQUE 4: Cursor move simulé toutes les 90 secondes
        const mouseMove = setInterval(() => {
            const event = new MouseEvent('mousemove', {
                bubbles: true,
                cancelable: true,
                clientX: Math.random() * 10,
                clientY: Math.random() * 10
            });
            document.dispatchEvent(event);
            addLog('🖱️ Mouse move');
        }, 90000);
        
        // TECHNIQUE 5: Focus sur un élément invisible
        const focusKeep = setInterval(() => {
            const hiddenInput = document.getElementById('keep-alive-input');
            if (hiddenInput) {
                hiddenInput.focus();
                addLog('🎯 Focus keep');
            }
        }, 45000);
        
        // Log d'activité
        const logInterval = setInterval(() => {
            addLog('💚 App active');
        }, 60000);

        // Visibilité
        const handleVisibilityChange = () => {
            addLog(document.visibilityState === 'visible' ? '👁️ Visible' : '🌙 Caché');
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Empêcher le sleep
        const preventSleep = setInterval(() => {
            document.body.style.transform = 'translateZ(0)';
            setTimeout(() => {
                document.body.style.transform = '';
            }, 10);
            addLog('🛡️ Anti-sleep');
        }, 150000);

        return () => {
            clearInterval(microScroll);
            clearInterval(touchSimulation);
            clearInterval(domChange);
            clearInterval(mouseMove);
            clearInterval(focusKeep);
            clearInterval(logInterval);
            clearInterval(preventSleep);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            addLog('🛑 Cleanup');
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
        
        <!-- Input invisible pour focus -->
        <input 
            id="keep-alive-input" 
            type="text" 
            style="position: absolute; opacity: 0; pointer-events: none; width: 1px; height: 1px;"
            aria-hidden="true"
            tabindex="-1"
        />
        
        <!-- Dummy element pour forcer re-render -->
        <div style="position: absolute; width: 0; height: 0; opacity: 0;" data-dummy={dummyValue}></div>
        
        <!-- Panneau de logs -->
        {#if showLogs}
            <div class="absolute top-20 right-4 bg-black/95 text-green-400 text-xs font-mono p-3 rounded-lg max-w-xs z-50 backdrop-blur border border-green-500/30 max-h-80 overflow-y-auto">
                <div class="flex justify-between items-center mb-2 sticky top-0 bg-black pb-1">
                    <span class="font-bold">🔍 DEBUG</span>
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
                class="absolute top-20 right-4 bg-green-600/80 text-white text-xs px-3 py-2 rounded z-50 hover:bg-green-600 font-bold shadow-lg">
                📊 LOGS
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

        <!-- Zone pour scroll -->
    </div>
    <div style="height: 50px; width: 100%;"></div>
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
