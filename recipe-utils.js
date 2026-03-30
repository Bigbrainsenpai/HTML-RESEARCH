/* ============================================================
   recipe-utils.js
   Reusable print & PDF functions for all recipe pages.
   Include this with: <script src="recipe-utils.js"></script>
   ============================================================ */

/**
 * Prints a single recipe card cleanly.
 * Call from: onclick="printRecipe(this)"
 */
function printRecipe(button) {
    const card = button.closest('.recipe-card');
    if (!card) return;

    // Add print class to target this card
    card.classList.add('printing-card');

    // Trigger print
    window.print();

    // Remove class after dialog closes
    setTimeout(function () {
        card.classList.remove('printing-card');
    }, 1000);
}

/**
 * Downloads / saves recipe as PDF.
 * Uses the same print dialog — user clicks "Save as PDF" in their browser.
 * Call from: onclick="downloadPDF(this)"
 */
function downloadPDF(button) {
    const card = button.closest('.recipe-card');
    if (!card) return;

    // Set the document title to the recipe name so the saved file is named correctly
    const titleEl = card.querySelector('.card-title');
    const originalTitle = document.title;
    if (titleEl) {
        document.title = titleEl.textContent.trim() + ' — Culinary Journal';
    }

    card.classList.add('printing-card');

    window.print();

    setTimeout(function () {
        card.classList.remove('printing-card');
        document.title = originalTitle;
    }, 1000);
}
