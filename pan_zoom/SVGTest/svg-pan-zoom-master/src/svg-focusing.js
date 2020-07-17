var SvgUtils = require("./svg-utilities");

module.exports = {
    searchText: function(instance) {
        console.log("Tttttttt--------");
        // Zoom Group
        var zoomGroup = document.createElementNS(SvgUtils.svgNS, "g");
        zoomGroup.setAttribute("id", "svg-pan-zoom-controls");
        zoomGroup.setAttribute(
        "transform",
        "translate(" +
            (instance.width - 70) +
            " " +
            (instance.height - 76) +
            ") scale(0.75)"
        );
        zoomGroup.setAttribute("class", "svg-pan-zoom-control");
    }
};