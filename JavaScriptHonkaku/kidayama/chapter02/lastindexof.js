const files = ["aaa.bbb.ccc.js", "bbb.ccc.ddd.java", "ccc.ddd.eee.py", "ddd.eee.fff.js",
               "eee.fff.ggg.js"];

for (const file of files) {
    const suffix_pos = file.lastIndexOf(".");
    const suffix = file.substring(suffix_pos + 1);
    if (suffix === "js") {
        console.log(file);
    }
}