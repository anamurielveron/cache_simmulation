document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('simulationForm');
    const resultContainer = document.getElementById('resultContainer');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const memoryBlocks = document.getElementById('memoryBlocks').value;
        const inputSequence = document.getElementById('inputSequence').value;

        const simulationResult = await simulateCache(memoryBlocks, inputSequence);

        // Display the result
        displayResult(simulationResult);
    });

    async function simulateCache(memoryBlocks, inputSequence) {
        const response = await fetch('/simulate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `memoryBlocks=${memoryBlocks}&inputSequence=${inputSequence}`,
        });

        return response.json();
    }

    function displayResult(result) {
        resultContainer.style.display = 'block';

        document.getElementById('memoryAccessCount').innerText = `${result.memoryAccessCount}`;
        document.getElementById('cacheHitCount').innerText = `${result.cacheHitCount}`;
        document.getElementById('cacheMissCount').innerText = `${result.cacheMissCount}`;
        document.getElementById('cacheHitRate').innerText = `${result.cacheHitRate}%`;
        document.getElementById('cacheMissRate').innerText = `${result.cacheMissRate}%`;
        document.getElementById('averageMemoryAccessTime').innerText = `${result.averageMemoryAccessTime}`;
        document.getElementById('totalMemoryAccessTime').innerText = `${result.totalMemoryAccessTime}`;
    }
});