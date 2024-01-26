const files = [
    "learning-java.java",
    "how-to-learn-machine-leaning.py",
    "abc.cpp",
    "head-first-python.py",
    "xyz.cs"
]

const pattern = /^.+\.py$/i;

for (const file of files) {
    if (pattern.test(file)) {
        console.log(file)
    }
}