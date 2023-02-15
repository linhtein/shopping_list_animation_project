export const excerpt = function(description,limit=100){
    if(description.length>limit){
        return description.substring(0,limit)+' ...';
    }
    return description;

}