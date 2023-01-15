import { AchievementDataInterface, ClassNameInterface, CommunitySectionMarginInterface, GoldDustAllIcons, GoldDustConstantsInterface, WebsiteColorInterfcae } from "../interfaces";
import { WorkItemInterface } from "../types";


const WorkItemData:WorkItemInterface[] = [
    {
        num:"01",
        title:'Consulting',
        ImageSrc:"glp.svg",
        right:0,
        top:0,
        radius:"295.228px 0px 0px 295.228px",
        direction:true,
    },
    {
        num:"02",
        title:'Research & Complaince',
        ImageSrc:"carbon.svg",
        right:null,
        top:245.56,
        radius:"0px 295.228px 295.228px 0px",
        direction:false,
    },
    {
        num:"03",
        title:'Technology',
        ImageSrc:"grommet.svg",
        right:0,
        top:491.12,
        radius:"295.228px 0px 0px 295.228px",
        direction:true,
    }
]

const GoldDustConstants:GoldDustConstantsInterface = {
    FOOTER_CONTENT:" A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    WEBSITE_TITLE:"GoldDust",
    SOCIAL_MEDIA_HEADER:"Social Media",
    FOOTER_RIGHTS:"All rights reserved@2023",
    ITEM_CONTENT:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum voluptatum dolorem quod nihil beatae facilis, molestiae nisi dicta,tempore, aspernatur magnam consectetur aperiam molestias iurenostrum.",
    LANDING_BUTTON:"Get Whitepaper",
    FOOTER_HEADING:["Newslatter","About us","Support"],
    FOOTER_ABOUT_LISTITEM:["Whitepaper","Blog","Activity"],
    FOOTER_SUPPORT_LISTITEM:["Help & Support","Community","Author Profile","Contact"],
    NAVBAR_LINKS:["About Us","Services","How it works","Community"],
    NAVBAR_BUTTON:"Join for Free",
    LANDING_HEADER_FIRST:"Blockchain technology",
    LANDING_HEADER_SECOND:" and currency",
    LANDING_HEADER_THIRD:"Build the Future with",
    ABOUT_PAGE_CONTENT:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, cupiditate dignissimos, temporibus deleniti voluptates suscipit optio voluptatem explicabo quisquam repudiandae reiciendis amet? Minima assumenda rerum pariatur fugit dignissimos. Nulla voluptas nostrum veniam, accusantium molestiae similique explicabo fugiat inventore iusto vero cumque sequi optio blanditiis aut obcaecati! Voluptasperspiciatis deleniti atque.",
    ABOUT_BUTTON:"Learn More",
    ABOUT_HEADER:"About Us",
    ACHIEVEMENT_HEADER:"Achievements",
    ACHIEVEMENT_SECTION:"Full Decentralised and Currency Security",
    COMMUNITY_CONTENT:"A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.",
    COMMUNITY_PAGE_HEADER:" Our community with User reviews",
    COMMUNITY_PAGE_AUTHOR:"-Dake M. Chile, Business Owner of Bellie",
    WORK_SECTION_HEADER:"How Do We Work Our System and Our Journey",
    FOOTER_BUTTON:"submit",
    LOADING_CONSTANTS:"loading...",
    FOOTER_PLACEHOLDER:"Email Address",
}

const WebsiteIcons:GoldDustAllIcons = {
    LandingSectionContainerImage:"city.svg",
    NAVBAR_MOBILE_IMAGE_FIRST:"Menu.svg",
    NAVBAR_MOBILE_PROFILE_IMAGE:"profile.svg",
    ABOUT_SECTION_COLUMN_ICON:"Group.svg",
    ACHIEVEMENT_SECTION_ICON:"/mapTechnology.svg",
    COMMUNITY_SECTION_PROFILE_IMAGE:"profile.jpg",
    COMPANY_IMAGE_ONE:"coinbase.svg",
    COMPANY_IMAGE_TWO:"blockchain.svg",
    COMPANY_IMAGE_THREE:"bitmex.svg",
    COMPANY_IMAGE_FOUR:"binance.svg",
    LANDING_PAGE_CONTAINER_ICON:"dots.svg",
    
}

const WebsiteClasses:ClassNameInterface = {
    SOCIAL_ICON_CLASSNAME:"social",
    NAVBAR_ICON_CLASSNAME:"close",
    COMMUNITY_ICON_CLASSNAME:"arrow",
}

const AchievementData:AchievementDataInterface = {
    ACHIEVEMENT_ONE:{AMOUNT:"1M+",TITLE:"Happy Users"},
    ACHIEVEMENT_TWO:{AMOUNT:"200K+",TITLE:"Community Assets"},
    ACHIEVEMENT_THREE:{AMOUNT:"20+",TITLE:"Build Community"},
}

const WebsiteColorConstants:WebsiteColorInterfcae = {
    COMMUNITY_ICON_COLOR:"black",
}

const CommunitySectionMargin:CommunitySectionMarginInterface = {
    MARGIN_ONE:"0px 0px 0px -15px",
    MARGIN_TWO:"0px -15px 0px 0px",
}

const WebsiteConstants = {GoldDustConstants,WebsiteIcons, WorkItemData,WebsiteClasses,AchievementData,WebsiteColorConstants,CommunitySectionMargin};

export default WebsiteConstants;