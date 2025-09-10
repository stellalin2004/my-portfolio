$(document).ready( function(){

    $("#closeSidebarBtn").click( function() {
        $("#mySidebar").hide(); // Hide the sidebar
        $("body").removeClass("sidebar-open");
        $("#openSidebarBtn").show(); // Show the open button
    });
    
    $("#openSidebarBtn").click( function() {
        $("#mySidebar").show(); // Show the sidebar
        $("body").addClass("sidebar-open");
        $("#openSidebarBtn").hide(); // Hide the open button
    });
    

    
    // Script to open and close sidebar

    // Modal Image Gallery
    function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
    }
});