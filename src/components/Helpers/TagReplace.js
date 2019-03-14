import moment from 'moment';

const TagReplace = {
    htmlDecode: function(val) {
        return val.replace(/<p>/g, "").replace(/<\/p>/g,"");
    },
    dateFormate: function(val) {
        return moment(val).format('L, LT');
    }
}

export default TagReplace;