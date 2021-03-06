
// SEARCH BAR FUNCTIONALITY //

const searchBar = document.querySelector('input');
searchBar.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    if (searchTerm === '') {
        $('.thumbnail').removeClass('hidden');
        return;
    }
    $('.thumbnail a').filter(function () {
        if ($(this).attr('data-title').toLowerCase().includes(searchTerm)) {
            $(this).parent().removeClass('hidden');
        } else {
            $(this).parent().addClass('hidden');
        }
    });
});