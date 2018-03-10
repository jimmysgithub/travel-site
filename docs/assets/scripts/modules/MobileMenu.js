import $ from 'jquery';

class MobileMenu {
    constructor() {
    //     $(".site-header__menu-icon").click(function() {
    //         console.log("The top right icon was clicked.");
    //     });

        this.siteHeader= $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();

    }

    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
        //console.log(this);
    }

    toggleTheMenu() {
        // console.log("Hooray - the icon was clicked.");
        // console.log(this);
        
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;