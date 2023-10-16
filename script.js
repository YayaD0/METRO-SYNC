<script>
    $(document).ready(function () {
        // Make an AJAX request to your Flask application's API endpoint
        $.get("/by-location?lat=40.7128&lon=-74.0060", function (data) {
            // Update the HTML content with the data received
            $("#subway-info").html(`Line ${data.line}: ${data.status}<br>${data.message}`);
        });
    });
</script>
