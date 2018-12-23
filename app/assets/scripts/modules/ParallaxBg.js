import $ from 'jquery';

class ParallaxBg {
    constructor() {
        this.homeBg = $(".hero--parallax");
        this.serviceBg = $(".service--parallax");
        this.contatcBg = $(".contact--parallax");
        this.eventHandler();
    }

    eventHandler() {
       $(window).scroll(() => {
            let scrollLocation = $(window).scrollTop();
            this.homeBg.css("background-position", "center " + (scrollLocation * 0.75) + "px");
            //this.serviceBg.css("background-position", "center " + (scrollLocation * 0.75) + "px");
            //this.contactBg.css("background-position", "center " + (scrollLocation * 0.75) + "px");
       });
    }
}

export default ParallaxBg;