function openEnvelope() {
    // Hide the envelope and show the card
    document.getElementById('envelope').style.display = 'none';
    document.getElementById('card').classList.remove('hidden');
}

function response(answer) {
    if (answer === 'yes') {
        // Show final message for Yes response
        document.getElementById('finalMessage').classList.remove('hidden');
        document.getElementById('card').classList.add('hidden');
    } else {
        // Show a sad animal image for No response
        document.getElementById('sadAnimal').classList.remove('hidden');
        document.getElementById('card').classList.add('hidden');
    }
}
