$(document).ready(function(){
    loadData();

    function loadData() {
        $.ajax({
            url: 'fetch_data.php',
            type: 'GET',
            success: function(data) {
                $('#data-container').html(data);
                $('#room-data-container').html(data);
                $('#price-data-container').html(data);
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    window.deleteRoom = function(id) {
        $.ajax({
            url: 'manage_rooms.php',
            type: 'POST',
            data: { id: id, _method: 'DELETE' },
            success: function(response) {
                alert(response);
                loadData();
            },
            error: function(error) {
                console.log(error);
            }
        });
    }

    window.updatePrice = function(id, price) {
        $.ajax({
            url: 'manage_prices.php',
            type: 'POST',
            data: { id: id, price: price },
            success: function(response) {
                alert(response);
                loadData();
            },
            error: function(error) {
                console.log(error);
            }
        });
    }
});
