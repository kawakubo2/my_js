class CannotGetLessonRecordsError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CannotGetLessonRecordsError';
    }
}
class PDFError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PDFError';
    }
}
class SendMailError extends Error {
    constructor(message) {
        super(message);
        this.name = 'SendMailError';
    }
}

function getLessonRecords() {
    if (Math.floor(Math.random() * 101) > 80) {
        throw new CannotGetLessonRecordsError('受講記録の取得に失敗しました。');
    }
    console.log('受講記録の取得に成功しました。');
}

function createPDF() {
    if (Math.floor(Math.random() * 101) > 80) {
        throw new PDFError('請求書の作成に失敗しました。');
    }
    console.log('請求書に作成に成功しました。');
}

function sendMail() {
    if (Math.floor(Math.random() * 101) > 80) {
        throw new SendMailError('メールの送信に失敗しました。');
    }
    console.log('メールの送信に成功しました。');
}

try {
    getLessonRecords();
    createPDF();
    sendMail();
} catch (error) {
    console.log(error.message);
    switch(error.name) {
        case 'CannotGetLessonRecordsError':
            console.log('受講記録取得失敗時の処理');
            break;
        case 'PDFError':
            console.log('請求書の作成失敗の処理');
            break;
        case 'SendMailError':
            console.log('メール送信失敗時の処理');
            break;
        default:
            console.log('想定外の例外');
            break;
    }
}