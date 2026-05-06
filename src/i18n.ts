import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "brand": "The Ancient Path",
      "nav": {
        "home": "Home",
        "orthodox": "Orthodox",
        "catholic": "Catholic",
        "shared": "Shared Heritage",
        "search": "Search Hub",
        "candle": "Virtual Candle"
      },
      "sections": {
        "holy_scripture": "Holy Scripture",
        "liturgical_calendar": "Liturgical Calendar",
        "prayer_book": "Prayer Book",
        "divine_liturgy": "Divine Liturgy",
        "hymns_chant": "Hymns & Chant",
        "iconography": "Iconography",
        "catechism_teaching": "Catechism & Teaching",
        "saints": "Saints",
        "home_worship": "Home Worship",
        "parish_finder": "Parish Finder",
        "resources": "Resources",
        "the_holy_mass": "The Holy Mass",
        "sacred_music": "Sacred Music",
        "sacred_art": "Sacred Art",
        "catechism_doctrine": "Catechism & Doctrine",
        "devotions": "Devotions",
        "home_faith_life": "Home Faith Life",
        "parish_mass_finder": "Parish & Mass Finder"
      },
      "sidebar": {
        "system_settings": "System Settings",
        "language": "Language",
        "theme": "Theme",
        "choose_atmosphere": "Choose Atmosphere",
        "open": "Open"
      },
      "translator": {
        "title": "Global Translation",
        "info": "Translations include Bible verses, full life stories, and all tabs across the entire hub."
      }
    }
  },
  el: {
    translation: {
      "brand": "Το Αρχαίο Μονοπάτι",
      "nav": {
        "home": "Αρχική",
        "orthodox": "Ορθόδοξα",
        "catholic": "Καθολικά",
        "shared": "Κοινή Κληρονομιά",
        "search": "Αναζήτηση",
        "candle": "Εικονικό Κερί"
      },
      "sections": {
        "holy_scripture": "Αγία Γραφή",
        "liturgical_calendar": "Λειτουργικό Ημερολόγιο",
        "prayer_book": "Προσευχητάριο",
        "divine_liturgy": "Θεία Λειτουργία",
        "hymns_chant": "Ύμνοι & Ψαλμωδία",
        "iconography": "Εικονογραφία",
        "catechism_teaching": "Κατήχηση & Διδασκαλία",
        "saints": "Άγιοι",
        "home_worship": "Κατ' Οίκον Λατρεία",
        "parish_finder": "Εύρεση Ενορίας",
        "resources": "Πηγές",
        "the_holy_mass": "Η Θεία Λειτουργία",
        "sacred_music": "Ιερή Μουσική",
        "sacred_art": "Ιερή Τέχνη",
        "catechism_doctrine": "Κατήχηση & Δόγμα",
        "devotions": "Ευλάβειες",
        "home_faith_life": "Πίστη στο Σπίτι",
        "parish_mass_finder": "Εύρεση Ενορίας & Μάζας"
      },
      "sidebar": {
        "system_settings": "Ρυθμίσεις Συστήματος",
        "language": "Γλώσσα",
        "theme": "Θέμα",
        "choose_atmosphere": "Επιλογή Ατμόσφαιρας",
        "open": "Άνοιγμα"
      },
      "translator": {
        "title": "Παγκόσμια Μετάφραση",
        "info": "Οι μεταφράσεις περιλαμβάνουν εδάφια της Βίβλου, πλήρεις βιογραφίες αγίων και όλες τις καρτέλες."
      }
    }
  },
  ru: {
    translation: {
      "brand": "Древний Путь",
      "nav": {
        "home": "Главная",
        "orthodox": "Православие",
        "catholic": "Католицизм",
        "shared": "Общее наследие",
        "search": "Поиск",
        "candle": "Виртуальная свеча"
      },
      "sections": {
        "holy_scripture": "Священное Писание",
        "liturgical_calendar": "Литургический календарь",
        "prayer_book": "Молитвослов",
        "divine_liturgy": "Божественная литургия",
        "hymns_chant": "Песнопения",
        "iconography": "Иконопись",
        "catechism_teaching": "Катехизис и учение",
        "saints": "Святые",
        "home_worship": "Домашнее богослужение",
        "parish_finder": "Поиск прихода",
        "resources": "Ресурсы",
        "the_holy_mass": "Святая Месса",
        "sacred_music": "Духовная музыка",
        "sacred_art": "Священное искусство",
        "catechism_doctrine": "Катехизис и доктрина",
        "devotions": "Молитвенные практики",
        "home_faith_life": "Вера в доме",
        "parish_mass_finder": "Поиск прихода и мессы"
      },
      "sidebar": {
        "system_settings": "Системные настройки",
        "language": "Язык",
        "theme": "Тема",
        "choose_atmosphere": "Выбор атмосферы",
        "open": "Открыть"
      },
      "translator": {
        "title": "Глобальный перевод",
        "info": "Переводы включают библейские стихи, полные жития святых и все вкладки."
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
