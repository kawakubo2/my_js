const func = {};

func.fullName = '山田太郎';

func.hello = function() {
    console.log('こんにちは、独習太郎');
}

console.log(func.fullName);
func.hello();