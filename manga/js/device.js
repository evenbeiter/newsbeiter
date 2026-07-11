(function(){

    var ua = navigator.userAgent;


    var kindle =
        /Kindle|Silk|KF[A-Z]/i.test(ua);


    window.deviceConfig = {

        kindle: kindle,

        lite: kindle,

        mode: kindle ? "page" : "scroll"

    };


})();