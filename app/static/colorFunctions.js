window.onload = function() {

    /**
     * Flip square colors
     */
    $("#flip").click(function () {
        var objs1 = document.getElementsByClassName("c1");
        var objs2 = document.getElementsByClassName("c2");
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: "/flip_color",
            data: JSON.stringify({
                'color1': window.getComputedStyle(objs1[0]).backgroundColor,
                'color2': window.getComputedStyle(objs2[0]).backgroundColor,
            }),
            success: function (response) {
                editColors(response);
            }
        });
    });

    /**
     * Change square colors to the values selected in the color input
     */
    $("#change").click(function () {
        var colorc1 = document.getElementById("colorc1").value;
        var colorc2 = document.getElementById("colorc2").value;
        $.ajax({
            type: 'POST',
            contentType: 'application/json',
            url: "/change_color",
            data: JSON.stringify({
                'color1': colorc1,
                'color2': colorc2,
            }),
            success: function (response) {
                editColors(response);
            }
        });
    });

    /**
     * Randomize the square colors
     */
    $("#random").click(function () {
        var colors = {
            "color1": getRandomColor(),
            "color2": getRandomColor()
        };
        editColors(colors);
        document.getElementById("colorc1").value = colors["color1"];
        document.getElementById("colorc2").value = colors["color2"];
    });

    /**
     * Generate a random hex color
     * @returns {string}
     */
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /**
     * Edit the colors of elements in classes c1 and c2
     * @param colors
     */
    function editColors(colors) {
        var elements1 = document.getElementsByClassName('c1');
        var elements2 = document.getElementsByClassName('c2');
        for (var i = 0; i < elements1.length; i++) {
            elements1[i].style.backgroundColor = colors['color1'];
            elements2[i].style.backgroundColor = colors['color2'];
        }
    }
}
