// ignore
var Config = {};

/**
 * What should the text in the center of the screen be?
 * if empty it will fill in your Server Name
 */
Config.title = "Lithium Project";

/**
 * Enable map text in the top left corner of the screen?
 */
Config.enableMap = true;

/**
 * Enable steamId text in the top right corner of the screen?
 */
Config.enableSteamID = true;

/**
 * Enable announcements?
 */
Config.enableAnnouncements = true;

/**
 * What messages do you want to show up?
 * only works if enableAnnouncements = true
 */
Config.announceMessages = [
  "Добро пожаловать!",
  "Правила можно найти в нашем дискорд-канале.",
  "У нас на сервере разрешены оскорбления. Но не оскорбляйте родных! Это наказуемо.",
  "Чтобы создать свой клан введите !squadmenu в чат.",
  "На карте есть лутбоксы. В них могут быть гранаты, дробовоки и даже гранатомёт!",
  "Патроны можно купить в Tab-меню",
];

/**
 * How many miliseconds for each announcement?
 * only works if enableAnnouncements = true
 */
Config.announcementLength = 6000;

/**
 * Image Filename
 * DROP IMAGE IN "images" FOLDER
 */
Config.backgroundImage = "";

/**
 * Enable debug messages?
 */
Config.enableDebug = false;
