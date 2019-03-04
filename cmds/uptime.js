module.exports.run = async (client, message, args) => {
function msTime(milliseconds){
        var days = (milliseconds / (1000*60*60)) / 24;
        var d = Math.floor(days);
        var hours = (days - d) * 24;
        var h = Math.floor(hours);
        var minutes = (hours - h) * 60;
        var m = Math.floor(minutes);
        var seconds = (minutes - m) * 60;
        var s = Math.floor(seconds);
        return `${d > 0 ? `${d} Day${d > 1 ? 's, ' : ''}` : ''}${h > 0 ? `${h} Hour${h > 1 ? 's' : ''}` : ''}${m > 0 ? `${h > 0 ? ', ' : ''}${m} Minute${m > 1 ? 's' : ''}` : ''}${s > 0 ? `${m > 0 ? ', ' : ''}${s} Second${s > 1 ? 's' : ''}` : ''}`;
    }
}

module.exports.help = {
  name: "uptime"
}
