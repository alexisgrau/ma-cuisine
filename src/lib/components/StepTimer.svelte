<script>
    import { onDestroy } from 'svelte';
    
    export let text = "";
    
    let duration = 0;
    let timeLeft = 0;
    /**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
    let interval;
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
                alert("Ding ! C'est fini !"); // Sonnerie simple
            }
        }, 1000);
    }

    function resetTimer() {
        clearInterval(interval);
        isRunning = false;
        timeLeft = 0;
    }

    /**
	 * @param {number} seconds
	 */
    function formatTime(seconds) {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }
</script>

{#if duration > 0}
    <div class="mt-4 p-4 bg-orange-100 rounded-xl border border-orange-300 flex items-center justify-between">
        <span class="text-orange-800 font-bold text-lg">
            ⏱ Minuteur suggéré : {Math.floor(duration/60)} min
        </span>
        
        {#if !isRunning && timeLeft === 0}
            <button on:click={startTimer} class="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold text-xl shadow active:scale-95 transition">
                Lancer
            </button>
        {:else}
            <div class="font-mono text-3xl font-bold text-orange-600">
                {formatTime(timeLeft)}
            </div>
        {/if}
    </div>
{/if}