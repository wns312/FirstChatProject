const mongoose = require('mongoose')

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb+srv://wns312:wns312@cluster0-ptxu3.mongodb.net/test?retryWrites=true&w=majority')

const accountSchema = mongoose.Schema({
    id:{
        type:String, 
        required:[true,'아이디를 입력하세요'], 
        unique: true,
        trim : true,
        match : [/^.{4,15}$/,'4~15자의 문자를 입력하세요']
        
    },
    pw:{
        type:String, 
        required:[true,'비밀번호를 입력하세요'],
        trim : true,
        match : [/^.{4,15}$/,'4~15자의 문자를 입력하세요']
    },
    nickname:{
        type:String, 
        required:[true, '별명을 입력하세요'],
        unique: true,
        trim : true,
        match : [/^.{2,9}$/,'2~9자의 문자를 입력하세요']
        
    },
})

module.exports = mongoose.model('account', accountSchema);