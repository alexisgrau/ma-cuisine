<script lang="ts">
    import { onDestroy } from 'svelte';
    import { base } from '$app/paths';
    
    export let text = "";
    
    let duration = 0;
    let timeLeft = 0;
    let interval:NodeJS.Timeout;
    let isRunning = false;

    onDestroy(() => {
        clearInterval(interval);
    });

    // Analyse simple du texte pour trouver des minutes
    $: {
        const match = text.match(/(\d+)\s*(min|minutes)/);
        if (match) {
            duration = parseInt(match[1]) * 60; // conversion en secondes
        } else {
            duration = 0;
        }
        // Reset timer si l'étape change
        resetTimer();
    }

    function startTimer() {
        if (duration === 0) return;
        timeLeft = duration;
        isRunning = true;
        interval = setInterval(() => {
            timeLeft--;
            if (timeLeft <= 0) {
                clearInterval(interval);
                isRunning = false;
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(interval);
        isRunning = false;
        timeLeft = 0;
    }

    function formatTime(seconds:number) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }
</script>

{#if duration > 0}
    <div class="mt-4 px-4 py-2 bg-orange-100 rounded-xl flex items-center justify-between">
        <span class="text-orange-800 font-bold text-lg flex items-center gap-2">
            <img src="{base}/icons/clock.svg" alt="Timer" class="size-5"/> {Math.floor(duration/60)} min
        </span>
        
        {#if !isRunning && timeLeft === 0}
            <button on:click={startTimer} class="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold text-xl shadow active:scale-95 transition ml-4">
                Lancer
            </button>
        {:else}
            <div class="font-mono text-3xl font-bold text-orange-600 ml-4">
                {formatTime(timeLeft)}
            </div>
        {/if}
    </div>
{/if}