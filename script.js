//your JS code here. If required.


    // Get the button and paragraph elements
    const button = document.getElementById('enterBtn');
    const paragraph = document.getElementById('status');
    
    // Add click event listener to the button
    button.addEventListener('click', function() {
        // Change the paragraph content to include the new text wrapped in an <h1> tag
        paragraph.innerHTML = '<h1>Entered Metaverse</h1>';
    });

