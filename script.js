// const progress = document.querySelector(".progress");
// if (progress) {
//     const hideProgress = () => {
//         progress.style.display = "none";
//     };

//     progress.addEventListener("animationend", hideProgress);
//     progress.addEventListener("webkitAnimationEnd", hideProgress); // vendor prefix for older browsers
//     progress.addEventListener("transitionend", hideProgress); // in case CSS uses transitions

//     // Fallback: ensure the bar is hidden after a timeout if no event fires
//     setTimeout(() => {
//         if (getComputedStyle(progress).display !== "none") {
//             hideProgress();
//         }
//     }, 5000);
// }
const links1 = document.querySelectorAll(".pic1");
links1.forEach(links1 => {
    links1.addEventListener("click", () => {
        window.location.href = "https://www.flipkart.com/clothing-and-accessories/topwear/pr?sid=clo,ash&p[]=facets.ideal_for%255B%255D%3DMen&p[]=facets.ideal_for%255B%255D%3Dmen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_e944de1a-b3c5-4a23-8e4a-d5e8208e1044_2_X1NCR146KC29_MC.RLI1MOY42WPG&otracker=hp_rich_navigation_1_2.navigationCard.RICH_NAVIGATION_Fashion~Men%27s%2BTop%2BWear~All_RLI1MOY42WPG&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_1_L2_view-all&cid=RLI1MOY42WPG"; // Replace with your desired URL
    });
});
const links2 = document.querySelectorAll(".pic2");
links2.forEach(links2 => {
    links2.addEventListener("click", () => {
        window.location.href = "https://www.flipkart.com/watches/wrist-watches/pr?sid=r18,f13&p[]=facets.ideal_for%255B%255D%3DCouple&p[]=facets.ideal_for%255B%255D%3DWomen&p[]=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p[]=facets.ideal_for%255B%255D%3DMen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_48052cc2-9b39-4d69-9438-72b83da9c360_2_X1NCR146KC29_MC.EVJ2W4TJMGXH&otracker=hp_rich_navigation_6_2.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories_EVJ2W4TJMGXH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L1_view-all&cid=EVJ2W4TJMGXH"; // Replace with your desired URL
    });
});
const links3 = document.querySelectorAll(".pic3");
links3.forEach(links3 => {
    links3.addEventListener("click", () => {
        window.location.href = "https://www.flipkart.com/watches/wrist-watches/pr?sid=r18,f13&p[]=facets.ideal_for%255B%255D%3DCouple&p[]=facets.ideal_for%255B%255D%3DWomen&p[]=facets.ideal_for%255B%255D%3DMen%2B%2526%2BWomen&p[]=facets.ideal_for%255B%255D%3DMen&otracker=categorytree&fm=neo%2Fmerchandising&iid=M_48052cc2-9b39-4d69-9438-72b83da9c360_2_X1NCR146KC29_MC.EVJ2W4TJMGXH&otracker=hp_rich_navigation_6_2.navigationCard.RICH_NAVIGATION_Fashion~Watches%2Band%2BAccessories_EVJ2W4TJMGXH&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_6_L1_view-all&cid=EVJ2W4TJMGXH"; // Replace with your desired URL

    });
});
