<script lang="ts">
    let { category, onclick, selected = false }: {
        category: string; 
        onclick: () => void; 
        selected?: boolean;
    } = $props();
</script>

<button class="category-button" class:selected onclick={onclick} type="button">{category}</button>

<style>
    .category-button {
        background-color: #e7dfcc;
        border: none;
        cursor: pointer;
        padding: 0.5rem 1rem;
        transition: background-color 0.2s ease;
        border-radius: 100px;
        font-size: 20px;
    }

    .category-button.selected {
        background-color: #346246;
        color: white;
    }
</style>