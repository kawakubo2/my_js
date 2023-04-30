function getEnglishSeasonName(japanese_season_name) {
    const seasons = {"春": "Spring", "夏": "Summer", "秋": "Autumn", "冬": "Winter"};
    if (seasons[japanese_season_name]) {
        return seasons[japanese_season_name];
    }
    return false;
}

console.log(getEnglishSeasonName("春"));
console.log(getEnglishSeasonName("夏"));
console.log(getEnglishSeasonName("秋"));
console.log(getEnglishSeasonName("冬"));
console.log(getEnglishSeasonName("初夏"));

